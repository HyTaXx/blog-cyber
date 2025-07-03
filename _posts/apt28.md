---
title: "TP 5 : APT28 : Le groupe Fancy Bear, bras armé numérique du GRU ?"
excerpt: "APT28, aussi connu sous les noms Fancy Bear ou Sofacy, est un groupe de cyberespionnage sophistiqué soupçonné d’être lié au renseignement militaire russe. Actif depuis 2004, il a orchestré certaines des attaques les plus marquantes de la dernière décennie."
coverImage: "https://www.defense.gouv.fr/sites/default/files/comcyber/FancyBear.JPG"
date: "2025-07-03T11:20:00.000Z"
ogImage:
    url: "https://www.defense.gouv.fr/sites/default/files/comcyber/FancyBear.JPG"
---

## Identification du groupe

**Noms** : Fancy Bear, Sofacy, APT28, Pawn Storm  
**Origine supposée** : Russie  
**Affiliation** : Suspecté d’être lié au **GRU** (renseignement militaire russe)  
**Motivations** : Cyberespionnage politique, militaire, diplomatique et campagnes de désinformation

Bien que l'appartenance au GRU ne soit pas officiellement prouvée, les **services de renseignement occidentaux** et des enquêtes techniques attribuent une **forte probabilité d'inféodation** au gouvernement russe. Les infrastructures utilisées, les fuseaux horaires, les cibles, et les motivations géopolitiques laissent peu de place au doute.

## Historique des opérations

APT28 est actif depuis **au moins 2004**. Le groupe est connu pour avoir mené des **attaques très ciblées à haute valeur géopolitique**. Voici quelques campagnes majeures (voir tableau Excel pour la chronologie complète) :

![APT28 Timeline](/assets/blog/frise1.png)

## Arsenal technique

### Malwares utilisés

-   **X-Agent / Sofacy / Sednit** : trojans multifonctions
-   **GameFish** : backdoor utilisée pour l’exfiltration de données
-   **XTunnel** : outil de tunneling réseau
-   **Komplex** : malware ciblant macOS
-   **Droppers** intégrés dans des documents Word/PowerPoint malveillants

### Méthodes d’intrusion

-   **Phishing ciblé (spear phishing)** via mails et faux sites
-   Exploits de vulnérabilités dans Office, Flash, Java
-   Techniques innovantes comme l’**exécution de code via mouvement de souris dans PowerPoint** (2022)
-   **Utilisation de noms de domaines piégés** (souvent en lien avec Microsoft)

### Infrastructure

-   Noms de domaine falsifiés (ex : `rsshotmail.com`, `livemicrosoft.net`)
-   Paiements anonymes (bitcoin, cartes prépayées)
-   Connexions via **Tor** ou **VPNs anonymes**
-   Serveurs de C2 distribués (command and control)

## Victimologie

### Secteurs ciblés

-   Défense et militaire
-   Diplomatie et gouvernements
-   Médias et journalistes
-   Organisations sportives internationales
-   Partis politiques

### Ciblage géographique

-   États-Unis
-   Allemagne
-   France
-   Ukraine
-   Pays-Bas
-   Russie (journalistes dissidents)
-   Arménie, Moldavie

### Sélection des cibles

Les cibles sont choisies en fonction de **l'intérêt géopolitique du Kremlin** : préparation d’élections, sanctions sportives, enquêtes diplomatiques ou renforcement de l’opinion publique en Russie.

## Particularités du groupe

-   **Fuseau horaire** de travail aligné sur Moscou
-   Utilisation fréquente de **domaines imitant Microsoft**
-   **Capacité à s'adapter rapidement** aux mesures défensives (cycle court de développement)
-   Signatures malwares proches, mais avec des **ajustements réguliers**
-   **Spear phishing hyper-ciblé**, souvent très convaincant
-   Opérations hybrides entre **espionnage et influence**

## Indicateurs de compromission (IOCs)

### Exemples de domaines utilisés :

-   `actblues.com`
-   `livemicrosoft.net`
-   `rsshotmail.com`

### Adresses IP connues (exemples historiques) :

-   176.31.112.10
-   185.86.149.125
-   91.219.28.89

### Hashs malwares (exemples publics) :

-   `e56e0b4a0bd6844f37f139f0a7f03ef8` (X-Agent)
-   `cb47b106c40aab8a95a2f8407b6d3d69` (Komplex)

> 📌 Ces IOCs sont **indicatifs**, mais doivent être **corrélés à des comportements**. Le groupe change fréquemment d’infrastructure.

## Contre-mesures recommandées

### Pour se prémunir spécifiquement d’APT28 :

1. **Mise à jour continue des signatures IOC**
2. **Surveillance des domaines similaires à vos marques**
3. **Déploiement de solutions EDR/XDR avec analyse comportementale**
4. **Analyse et blocage des pièces jointes malicieuses**
5. **Formation avancée des collaborateurs au phishing ciblé**
6. **Suivi des alertes de Microsoft Defender / CISA / ANSSI**
7. **Vérification régulière des comptes mail compromis (notamment Office 365)**
8. **Segmenter les environnements sensibles** (politique, diplomatique, médias)
9. **Mise en place d’une threat intelligence dédiée aux APT russes**

> 🎯 La **cyberveille active** et l’adoption d’un **modèle de défense en profondeur** sont les clés pour résister à ce type de menace.

---

Fancy Bear n'est pas un groupe amateur. Ses campagnes sont **persistantes, coordonnées et politiquement motivées**. Toute organisation ayant une visibilité internationale ou des activités diplomatiques doit **considérer APT28 comme une menace sérieuse et constante**.
