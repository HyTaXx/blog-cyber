---
title: "Lapsus$ : Le chaos numérique par la désinvolture"
excerpt: "Lapsus$ est un groupe de cybercriminels atypique qui a frappé des géants comme Microsoft, Nvidia ou Uber, non pas pour l'espionnage, mais pour la gloire, la rançon ou le chaos. Leur style : attaques éclairs, fuites massives et communication publique assumée."
coverImage: "https://cdn.prod.website-files.com/635e632477408d12d1811a64/64062bea6725e806f3b81ea5_threat-actor-group-lapsus-min.jpeg"
date: "2025-07-03T12:00:00.000Z"
ogImage:
    url: "https://cdn.prod.website-files.com/635e632477408d12d1811a64/64062bea6725e806f3b81ea5_threat-actor-group-lapsus-min.jpeg"
---

## Identification du groupe

**Nom** : Lapsus$  
**Origine supposée** : Royaume-Uni, Brésil (membres adolescents identifiés)  
**Affiliation** : Aucun lien connu avec des États ; groupe **désorganisé mais efficace**  
**Motivations** : Célébrité, chaos, vengeance, **argent (parfois)**

Contrairement aux APTs étatiques, **Lapsus$** se distingue par sa **désinvolture** : le groupe agit de manière publique, provocante, en revendiquant ses attaques sur Telegram.

## Historique des opérations

Voici quelques cibles majeures de Lapsus$ :

-   **Ministère de la Santé brésilien** – 2021
-   **Telecoms portugaises (Impresa)** – janvier 2022
-   **Nvidia** – février 2022 (fuite de code source + sabotage de firmware)
-   **Samsung** – mars 2022 (190 Go de données internes volées)
-   **Microsoft** – mars 2022 (exfiltration de projets internes Azure, Bing, Cortana)
-   **Okta** – mars 2022 (fuite d’informations d’identifiants administrateurs)
-   **Ubisoft** – 2022
-   **Uber** – septembre 2022
-   **Rockstar Games** – septembre 2022 (fuite de GTA VI)

![Lazarus](/assets/blog/frise3.png)

## Arsenal technique

### Méthodes d’intrusion

-   **Social engineering** pur : harcèlement des employés, manipulation via SMS/WhatsApp
-   Vol d'identifiants via **SIM swapping**, **phishing MFA**, ou récupération de cookies
-   Accès à des outils internes (Okta, VPN, GitHub, Slack, etc.)
-   Exploitation de **fuites de credentials** et de **tokens non révoqués**
-   Failles dans la chaîne d’authentification MFA (fatigue MFA, récupération de compte)

### Mode d'opération

Le groupe suit généralement cette méthodologie :

1. **Obtention d'accès initial** via des informations d'identification d'employés privilégiés
2. **Acquisition des identifiants** par plusieurs méthodes :
    - Recrutement d'employés internes
    - SIM swapping et piratage d'employés
    - Social engineering intensif
3. **Accès réseau** via bureau à distance ou VPN
4. **Exfiltration** de données sensibles (code source, détails clients)
5. **Extorsion** avec menace de divulgation
6. **Publication** sur Telegram, souvent sans négociation

### Pas de malware sophistiqué

Lapsus$ n’utilise pas de malware complexe ni de botnet. Leur attaque repose uniquement sur **l’ingénierie sociale, les failles humaines et les accès non surveillés**.

## Victimologie

### Secteurs ciblés

-   Big Tech (Microsoft, Samsung, Nvidia)
-   Gaming (Ubisoft, Rockstar Games)
-   Transport & mobilité (Uber)
-   Infrastructure numérique (T-Mobile)
-   Gouvernement & médias (Brésil, Impresa)
-   Énergie (Engie)

### Ciblage géographique

-   États-Unis
-   Royaume-Uni
-   Brésil
-   Corée du Sud
-   Portugal
-   Multinationales

### Sélection des cibles

Pas de logique géopolitique, mais plutôt **opportunisme**, **visibilité**, et parfois **vengeance personnelle** ou idéologique.

## Particularités

-   Groupe **jeune** : des membres âgés de **16 à 21 ans** (dont certains arrêtés à Londres)
-   **Utilisation de Telegram** comme principal canal de communication (près de 50 000 abonnés en mars 2022)
-   Fuites massives publiées sans négociation
-   Publication de sondages pour choisir les prochaines cibles
-   Style provocateur, voire immature
-   Refus des logiques classiques de ransomwares ou APTs

## Arrestations et démantèlement

Le **24 mars 2022**, sept personnes âgées de **16 à 21 ans** ont été arrêtées par la police de Londres dans le cadre d'une enquête sur Lapsus$. Parmi eux :

-   Un membre éminent surnommé **"White"** (alias Breachbase), arrêté à Oxford
-   Deux membres adolescents inculpés le **1er avril 2022**
-   Un membre inculpé le **16 avril 2022**

**Cas particulier** : L'auteur de l'attaque contre Rockstar Games (GTA VI), un Britannique de **18 ans** atteint d'un trouble du spectre de l'autisme, a été jugé en décembre 2023 et placé dans un hôpital pour une durée indéterminée.

Depuis l'arrestation de "White", le canal Telegram original de Lapsus$ est resté **largement inactif depuis 2022**. Le groupe a toutefois relancé ses activités de **"Web Defacement"** (défiguration de sites web), ciblant principalement des sites israéliens.

## Indicateurs de compromission (IOCs)

Lapsus$ utilise peu d’infrastructures fixes ou d’outils malveillants, mais voici quelques traces :

### Domaines utilisés pour phishing

-   `mfasupport[.]com`
-   `okta-helpdesk[.]com`
-   `auth0-support[.]live`

### IPs utilisées (phishing ou reverse shells)

-   45.61.136.120
-   185.178.208.185

### Cas d’usage détourné

-   Accès à **Slack internes**, **Confluence**, **GitHub privé**
-   **OTP fatigue** sur MFA (envoi répété de notifications jusqu’à acceptation)

⚠️ Les IOCs sont très volatils car Lapsus$ change souvent de méthodes, utilise des outils publics et se greffe sur des services tiers.

## Contre-mesures

### Se protéger contre Lapsus$ :

1. **MFA robuste**, avec protection contre la fatigue MFA (app push + token hardware)
2. **Surveillance des connexions anormales** (pays inhabituels, heures bizarres)
3. **Gestion des accès internes (Zero Trust)** : GitHub, Slack, outils internes
4. **Limitation des autorisations administratives** (surtout pour les prestataires)
5. **Revocation rapide des sessions actives après compromission**
6. **Sensibilisation avancée au social engineering (service desk, RH, employés IT)**
7. **Détection des tentatives de SIM swapping / escalade via opérateurs mobiles**
8. **Monitoring des fuites d’identifiants (haveibeenpwned, Git leaks, etc.)**

> 🚨 Lapsus$ prouve que **même sans virus, un pirate peut ruiner une entreprise**. La sécurité moderne ne se limite plus aux firewalls : **l’humain est le nouveau périmètre**.

---

Lapsus$ est l’illustration parfaite d’une **cybermenace post-moderne** : jeune, imprévisible, bruyante, et redoutablement efficace.  
Pas besoin de sophistication quand la faille est **dans la poche de l’employé.**
