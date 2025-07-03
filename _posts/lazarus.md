---
title: "TP 5 : Lazarus Group : Cyber-bras armé de la Corée du Nord"
excerpt: "Lazarus Group est un groupe APT nord-coréen tristement célèbre pour des attaques spectaculaires comme le piratage de Sony Pictures ou le ransomware WannaCry. Leur objectif : cyberespionnage, sabotage et financement du régime."
coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69RLBiFLUWKL-ooGxEGlae7vBKGT9cOGnqw&s"
date: "2025-07-02T17:00:00.000Z"
ogImage:
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69RLBiFLUWKL-ooGxEGlae7vBKGT9cOGnqw&s"
---

## Identification du groupe

**Noms** : Lazarus Group, Guardians of Peace, APT38, Hidden Cobra  
**Origine supposée** : Corée du Nord  
**Affiliation** : Bureau 121 – unité du renseignement nord-coréen (RGB)  
**Motivations** : Espionnage, sabotage, déstabilisation géopolitique, **financement du régime nord-coréen** via des cyberattaques financières

Le **Lazarus Group** est considéré comme l’un des groupes APT les plus prolifiques et agressifs. Son activité, bien documentée depuis 2009, couvre à la fois des campagnes **géopolitiques** (attaques contre les USA, la Corée du Sud) et **financières** (vols massifs de cryptomonnaies).

## Historique des opérations

Lazarus est actif depuis plus d'une décennie, avec des opérations connues telles que :

-   **Sony Pictures (2014)** : attaque destructrice suite à la sortie du film _The Interview_
-   **Bangladesh Bank (2016)** : vol de 81 millions de dollars via SWIFT
-   **WannaCry (2017)** : ransomware mondial affectant des centaines de milliers de machines
-   **Attaques contre des exchanges crypto** : Youbit, Coincheck, Ronin, etc.
-   **Campagnes de phishing ciblant les chercheurs en cybersécurité (2019)**
-   **Espionnage de laboratoires pharmaceutiques** pendant la pandémie de COVID-19

![Lazarus](/assets/blog/frise2.png)

## Arsenal technique

### Malwares utilisés

-   **Destover** : malware destructeur utilisé contre Sony
-   **WannaCry** : ransomware exploitant la faille SMB EternalBlue
-   **Hermit / Manuscrypt / NukeSped** : familles de trojans d’accès et de surveillance
-   **FastCash** : malware ciblant les distributeurs automatiques et transactions financières
-   **AppleJeus** : fausse application crypto utilisée pour piéger les investisseurs

### Méthodes d’intrusion

-   Phishing ciblé (email, réseaux sociaux, développeurs open source)
-   Fausses offres d’emploi pour piéger des professionnels IT
-   Exploitation de failles critiques (ex: EternalBlue)
-   Injection de code malveillant dans des projets open source
-   Utilisation de **sociétés écrans / fausses entreprises IT** pour diffuser des malwares

### Infrastructure

-   Serveurs proxy hébergés à l’étranger (souvent en Asie du Sud-Est)
-   Domaines frauduleux (imitant des sites d’échange crypto ou entreprises légitimes)
-   Utilisation fréquente de VPNs et Tor
-   Réseaux de botnets pour dissimuler l'origine des attaques

## Victimologie

### Secteurs ciblés

-   **Cinéma, médias et divertissement**
-   **Banques et institutions financières**
-   **Exchanges de cryptomonnaies / DeFi**
-   **Industrie militaire et gouvernementale**
-   **Recherche médicale et pharmaceutique**

### Ciblage géographique

-   Corée du Sud (cible historique)
-   États-Unis
-   Japon
-   Europe (notamment les institutions financières)
-   Afrique et Amérique latine (échanges crypto et banques locales)

### Sélection des cibles

Les cibles sont choisies en fonction de leur **intérêt géopolitique ou économique**. L’objectif : contourner les **sanctions internationales** et **financer les opérations du régime nord-coréen**.

## Particularités

-   **Style destructif** : Lazarus n'hésite pas à effacer les données (ex: Sony)
-   **Vol financier à grande échelle**, notamment dans le monde crypto
-   **Faux profils LinkedIn / GitHub** pour attirer les cibles
-   Groupes affiliés : APT38 (branche financière), Kimsuky (espionnage pur)
-   Utilisation de **malwares complexes avec offuscation forte**

## Indicateurs de compromission (IOCs)

### Domaines connus

-   `update-microsoft.com`
-   `secure-appleupdate.com`
-   `github-dev-login.com`

### Adresses IP (exemples historiques)

-   210.52.109.22
-   103.20.198.40
-   185.163.109.66

### Hashs de malwares

-   `f9c4b5d3b8b7f019adc658be981f5c3a` (Destover)
-   `2f5ae92d2e4e91b18004d060b6fe7335` (WannaCry)
-   `c7ad234a3db1845ebf3bd9267d6a4bc7` (AppleJeus)

⚠️ Comme toujours, les IOCs changent fréquemment — utiliser une **veille CTI actualisée** pour suivre les dernières campagnes.

## Contre-mesures

### Défenses recommandées face à Lazarus :

1. **Segmenter les environnements critiques (finance, R&D, RH)**
2. **Vérifier les signatures numériques des logiciels utilisés**
3. **Surveiller l’usage de réseaux anonymes (VPN, Tor) en interne**
4. **Analyser toute pièce jointe et lien dans les emails d’offres d’emploi**
5. **Durcir les accès aux outils de messagerie et postes à privilèges**
6. **Mener des audits réguliers des chaînes logicielles open source utilisées**
7. **Bloquer les IOC connus et surveiller les activités réseau suspectes**
8. **Implémenter un SOC avec capacités d’analyse comportementale (UEBA, EDR)**

> 🛡️ La posture de sécurité face à Lazarus doit inclure une **défense en profondeur**, une **cyberveille active**, et une **hygiène numérique stricte**, surtout pour les secteurs crypto et R&D.

---

Le **Lazarus Group** incarne une **cyber-menace étatique hybride** : capable de voler, d'espionner, de saboter et de financer des opérations militaires. **Ignorer ce groupe, c’est accepter un risque géopolitique majeur.**
