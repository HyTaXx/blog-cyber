---
title: "TP 4 : SolarWinds : L’attaque furtive de la chaîne d’approvisionnement"
excerpt: "L’attaque SolarWinds a compromis des milliers d'organisations en infiltrant une mise à jour logicielle légitime. Plongée dans une cyber-opération d’espionnage à grande échelle orchestrée avec une précision militaire."
coverImage: "https://itsocial.fr/wp-content/uploads/2022/04/solarwinds.jpg"
date: "2025-07-02T12:00:00.000Z"
author:
    name: JJ Kasper
    picture: "/assets/blog/authors/jj.jpeg"
ogImage:
    url: "https://itsocial.fr/wp-content/uploads/2022/04/solarwinds.jpg"
---

En décembre 2020, une attaque d'une **complexité sans précédent** est révélée : les pirates ont compromis les serveurs de l’entreprise **SolarWinds** pour intégrer une backdoor dans leur logiciel **Orion**, utilisé pour la supervision réseau par des milliers d’organisations à travers le monde.

## Quelle est la vulnérabilité exploitée ?

Il ne s'agit pas d'une faille classique, mais d'une **compromission de la chaîne de production logicielle**. Les attaquants ont infiltré le système de build de SolarWinds et modifié le code source du logiciel **Orion** pour y inclure une porte dérobée appelée **SUNBURST**.

La mise à jour signée numériquement par SolarWinds a ensuite été distribuée à plus de 18 000 clients via les canaux officiels.

## Comment l’attaque s’est-elle déroulée ?

1. Compromission du build system de SolarWinds
2. Insertion discrète du malware SUNBURST dans les mises à jour logicielles d'Orion (versions 2019.4 à 2020.2.1)
3. Distribution automatique aux clients de SolarWinds
4. SUNBURST restait inactif plusieurs jours, puis contactait un **serveur C2 (Command & Control)** via DNS
5. S'il détectait un environnement intéressant, il activait des fonctions avancées d’espionnage, d’exfiltration et de persistance

Les attaquants ont utilisé **des techniques de furtivité avancées** (obfuscation, détection d’environnements de test, anti-debugging).

## Qui a été touché ?

-   **Agences gouvernementales américaines** : Département du Trésor, Département d’État, Homeland Security, etc.
-   **Grandes entreprises** : Microsoft, Cisco, Intel, FireEye (la société qui a découvert l’attaque)
-   **Infrastructures critiques** : réseaux électriques, télécommunications
-   **Organisations privées** et **ONG** dans plusieurs pays

Au total, **18 000 organisations** ont téléchargé la mise à jour compromise, mais les attaquants ont ciblé **environ 100 victimes stratégiques** avec des intrusions personnalisées.

## Quels ont été les impacts ?

-   **Espionnage étatique** massif et ciblé
-   **Vol de données sensibles**
-   **Perte de confiance dans la chaîne logicielle** : signature numérique compromise
-   Révision mondiale des pratiques de **supply chain security**

L’impact exact reste difficile à quantifier car les attaquants ont **effacé leurs traces** avec soin.

## Quel coût estimé ?

-   **Petite entreprise** : Peu affectée (la version Orion est plutôt utilisée par des grandes structures)
-   **Moyenne entreprise** : 100 000 € à 500 000 € si Orion était utilisé
-   **Grande entreprise / administration** :
    -   Investigation + remédiation : **plusieurs millions d’euros**
    -   Microsoft a déclaré avoir mobilisé **plus de 500 ingénieurs** pour analyser l’incident

Impact global estimé : **plus de 100 milliards de dollars** à long terme selon certaines analyses.

## Comment s’en protéger ?

1. **Contrôle d’intégrité et traçabilité** dans la chaîne de build (hash, signatures, reproductibilité)
2. Adoption de **frameworks de sécurité de la chaîne logicielle** (SLSA, SSDF, SBOM)
3. **Isolation des environnements de build**
4. **Surveillance des comportements anormaux** post-déploiement (EDR, XDR)
5. **Authentification forte** et segmentation réseau
6. **Audit des dépendances tierces**

## Pourquoi est-ce difficile à éviter ?

-   Les logiciels signés sont **considérés comme sûrs par défaut**
-   Les attaques de type **"supply chain" sont invisibles** pour les clients finaux
-   Les chaînes CI/CD sont **complexes, souvent mal surveillées**
-   L’injection de code se fait en **amont du cycle de vie**, rendant les backdoors quasi indétectables

## Dans le contexte de votre entreprise, que feriez-vous ?

-   Intégrer une **politique de vérification de l’origine logicielle**
-   Imposer des **SBOM (Software Bill of Materials)** pour tous les fournisseurs
-   Mettre en place un **processus de build reproductible et sécurisé**
-   Scanner les dépendances et analyser les mises à jour automatiquement
-   Sensibiliser l’équipe de dev à la **sécurité de la chaîne CI/CD**
-   Utiliser des outils comme **Sigstore**, **Cosign**, ou **In-toto** pour valider les builds

---
