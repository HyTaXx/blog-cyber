"use client";

import styles from "./switch.module.css";
import { memo, useEffect, useState } from "react";

declare global {
    var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

/** to reuse updateDOM function defined inside injected script */

/** function to be injected in script tag for avoiding FOUC (Flash of Unstyled Content) */
export const NoFOUCScript = (storageKey: string) => {
    /* can not use outside constants or function as this script will be injected in a different context */
    const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

    /** Modify transition globally to avoid patched transitions */
    const modifyTransition = () => {
        const css = document.createElement("style");
        css.textContent = "*,*:after,*:before{transition:none !important;}";
        document.head.appendChild(css);

        return () => {
            /* Force restyle */
            getComputedStyle(document.body);
            /* Wait for next tick before removing */
            setTimeout(() => document.head.removeChild(css), 1);
        };
    };

    const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

    /** function to add remove dark class */
    window.updateDOM = () => {
        const restoreTransitions = modifyTransition();
        const mode = localStorage.getItem(storageKey) ?? SYSTEM;
        const systemMode = media.matches ? DARK : LIGHT;
        const resolvedMode = mode === SYSTEM ? systemMode : mode;
        const classList = document.documentElement.classList;
        if (resolvedMode === DARK) classList.add(DARK);
        else classList.remove(DARK);
        document.documentElement.setAttribute("data-mode", mode);
        restoreTransitions();
    };

    // Initialize with the stored preference immediately to avoid hydration mismatch
    const initialMode = localStorage.getItem(storageKey) ?? SYSTEM;

    // Only update DOM if the stored mode is different from the server-rendered default
    if (initialMode !== SYSTEM) {
        const systemMode = media.matches ? DARK : LIGHT;
        const resolvedMode = initialMode === SYSTEM ? systemMode : initialMode;

        // Set both the class and data-mode attribute immediately
        if (resolvedMode === DARK) {
            document.documentElement.classList.add(DARK);
        } else {
            document.documentElement.classList.remove(DARK);
        }
        document.documentElement.setAttribute("data-mode", initialMode);
    }

    // Set up the update function and listener
    media.addEventListener("change", window.updateDOM);
};

let updateDOM: () => void;

/**
 * Switch button to quickly toggle user preference.
 */
const Switch = () => {
    const [mode, setMode] = useState<ColorSchemePreference>("system");
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        // Set hydrated to true and get the actual mode from localStorage
        setIsHydrated(true);
        const storedMode = (localStorage.getItem(STORAGE_KEY) ??
            "system") as ColorSchemePreference;
        setMode(storedMode);

        // store global functions to local variables to avoid any interference
        updateDOM = window.updateDOM;
        /** Sync the tabs */
        addEventListener("storage", (e: StorageEvent): void => {
            e.key === STORAGE_KEY &&
                setMode(e.newValue as ColorSchemePreference);
        });
    }, []);

    useEffect(() => {
        if (isHydrated) {
            localStorage.setItem(STORAGE_KEY, mode);
            updateDOM();
        }
    }, [mode, isHydrated]);

    /** toggle mode */
    const handleModeSwitch = () => {
        if (!isHydrated) return; // Prevent mode switching before hydration
        const index = modes.indexOf(mode);
        setMode(modes[(index + 1) % modes.length]);
    };

    return (
        <button
            suppressHydrationWarning
            className={styles.switch}
            onClick={handleModeSwitch}
            style={{ opacity: isHydrated ? 1 : 0 }} // Hide until hydrated to prevent layout shift
        />
    );
};

const Script = memo(() => (
    <script
        dangerouslySetInnerHTML={{
            __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
        }}
    />
));

/**
 * This component wich applies classes and transitions.
 */
export const ThemeSwitcher = () => {
    return (
        <>
            <Script />
            <Switch />
        </>
    );
};
