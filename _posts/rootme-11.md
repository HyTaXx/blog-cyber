---
title: "TP 3 : rootme 11"
excerpt: "AST - Deobfuscation"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T12:20:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : AST - Deobfuscation

## Informations générales

-   **Nom du challenge** : AST - Deobfuscation
-   **Difficulté** : 3
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : réussir à déchiffrer le json pour trouver le passkey

### Contexte technique : fichier json obfusqué

### cette execrice a été réalisé à l'aide d'IA ( big up à claud Sonnet 4 )

---

## 2. Étapes de résolution

### Étape 1 : Analyse l'AST et identifier les structures principales ( IIFE,fonctions, variables ) et reprérer les arrays de nombres suspects qui semblent encodés

### Étape 2 : Décoder le premier bloc simple, pour cela il faut extraire l'array [1856,1824,...] et appliquer une opération de décalage de bits (>> 4) puis convertrir en caractères ASCII

### Étape 3 : Identifier la fonction principale d'obfuscation, il faut trouver la fonction gen_sensor dans l'ast et extraire l'array des valeurs encodés puis noter la présence d'une clé de décodage (sens) et d'une opération XOR

### Etape 4 : création d'une fonction de detection de texte lisible qui vérifie si un texte décodé est valide et que 80% des caractères sont ASCII imprimables

### Etape 5 : implémenter une fonction de test multi-méthodes avec une fonction qui va tester différentes approches de décodage en supportant le XOR, LSB direct et soustraction puis qui applique un masque & 0xFF

### Etape 6 : Lancer une attaque par brute force XOR qui va tester toutes les clés possibles de 0 à 255 en appliquant la fonction de detection d'avant puis filtrera les resultats

### Etape 7 : Tester des méthodes alternatives par exemple le LSB direct, soustraction de valeurs de base et analyse de patterns de données

### Etape 8 : Analyse des resultats pour identifier le flag et chercher une clé potable

# code utilisé pour décrypter :

```js
// Désobfuscation Challenge 38

// 1. Premier bloc - décodage simple
console.log("=== Premier bloc ===");
let d = [1856, 1824, 1776, 1728, 1776, 1728, 1776];
let decoded1 = d.map((c) => String.fromCharCode(c >> 4)).join("");
console.log("Premier message:", decoded1); // "trololo"

// 2. Fonction l33t
console.log("\n=== Fonction l33t ===");
console.log("vive le reverse d'AST");

// 3. Test de brute force pour trouver la bonne clé
console.log("\n=== BRUTE FORCE - Test de toutes les clés possibles ===");

let encodedArray = [
    65353704, 65353663, 65353663, 65353707, 65353680, 65353701, 65353663,
    65353709, 65353680, 65353706, 65353710, 65353724, 65353718, 65353680,
    65353707, 65353706, 65353696, 65353709, 65353705, 65353722, 65353724,
    65353708, 65353710, 65353723, 65353702, 65353696, 65353697,
];

function isReadableText(text) {
    // Vérifie si le texte contient principalement des caractères ASCII imprimables
    let printable = 0;
    for (let char of text) {
        let code = char.charCodeAt(0);
        if ((code >= 32 && code <= 126) || code === 10 || code === 13) {
            printable++;
        }
    }
    return printable / text.length > 0.8; // Au moins 80% de caractères imprimables
}

function testKey(key, method = "xor") {
    let result = encodedArray
        .map((c) => {
            let decoded;
            if (method === "xor") {
                decoded = (c ^ key) & 0xff;
            } else if (method === "lsb") {
                decoded = c & 0xff;
            } else if (method === "sub") {
                decoded = (c - key) & 0xff;
            }
            return String.fromCharCode(decoded);
        })
        .join("");

    return result;
}

// Test avec XOR
console.log("=== Test XOR avec différentes clés ===");
for (let key = 0; key < 256; key++) {
    let result = testKey(key, "xor");
    if (isReadableText(result) || result.match(/[a-zA-Z]{5,}/)) {
        console.log(`Clé XOR ${key}: "${result}"`);
    }
}

// Test direct LSB
console.log("\n=== Test direct LSB ===");
let directResult = testKey(0, "lsb");
console.log(`Direct LSB: "${directResult}"`);

// Test soustraction
console.log("\n=== Test soustraction avec différentes clés ===");
for (let key = 65353600; key < 65353800; key += 10) {
    let result = encodedArray
        .map((c) => {
            let decoded = (c - key) & 0xff;
            return String.fromCharCode(decoded);
        })
        .join("");

    if (isReadableText(result) || result.match(/[a-zA-Z]{5,}/)) {
        console.log(`Clé SUB ${key}: "${result}"`);
    }
}

// Test avec la valeur de base commune
console.log("\n=== Test avec valeur de base commune ===");
let baseValue = 65353663; // La valeur la plus fréquente
let baseResult = encodedArray
    .map((c) => {
        let decoded = (c - baseValue) & 0xff;
        return String.fromCharCode(decoded);
    })
    .join("");
console.log(`Base ${baseValue}: "${baseResult}"`);

// Analyse des valeurs
console.log("\n=== Analyse des patterns ===");
console.log(
    "Valeurs uniques:",
    [...new Set(encodedArray)].sort((a, b) => a - b)
);
console.log("Différences avec la première valeur:");
encodedArray.forEach((val, i) => {
    let diff = val - encodedArray[0];
    console.log(
        `${i}: ${val} - ${encodedArray[0]} = ${diff} = '${String.fromCharCode(
            Math.abs(diff) & 0xff
        )}'`
    );
});
```

---

## 3. Capture ou extrait de code

![1](https://cdn.discordapp.com/attachments/1020343302052118589/1389575790529609808/image.png?ex=68651ecd&is=6863cd4d&hm=4adfb77be2ba348984eef8e6c36b654e60a20a669146df73fbcdf732c4941227&)

---

## 4. Explication technique

### Vulnérabilité exploitée : Manque de prrotection XSS sur les champs

---

## 5. Résultat : g00d_j0b_easy_deobfuscation

---

## 6. Prévention / bonnes pratiques :

### Proteger les input des attaques XSS
