---
title: "TP 4 : NotPetya : Du ransomware au sabotage économique"
excerpt: "Derrière l’apparence d’un ransomware, NotPetya s’est révélé être une opération de sabotage à grande échelle. Retour sur cette attaque dévastatrice, son mode opératoire, ses conséquences, et les leçons à en tirer pour se protéger à l’avenir."
coverImage: "https://www.tripwire.com/sites/default/files/shutterstock_667869304.jpg"
date: "2025-07-02T13:00:00.000Z"
author:
    name: JJ Kasper
    picture: "/assets/blog/authors/jj.jpeg"
ogImage:
    url: "https://www.tripwire.com/sites/default/files/shutterstock_667869304.jpg"
---

Le 27 juin 2017, une attaque soi-disant de type ransomware frappe massivement l’Ukraine avant de se propager à l’international. Baptisée **NotPetya**, cette cyberattaque utilise une fausse demande de rançon comme écran de fumée pour une opération de **destruction de données à grande échelle**, visant l’infrastructure économique et industrielle.

## Quelle est la vulnérabilité exploitée ?

NotPetya combine plusieurs vecteurs :

-   **EternalBlue**, la même vulnérabilité SMBv1 utilisée par WannaCry
-   **EternalRomance**, une autre faille Windows exploitée pour l’exécution de code à distance
-   **Credential harvesting** : l’outil Mimikatz intégré permet de récupérer les identifiants utilisateurs en mémoire
-   **Propagation via PsExec et WMIC**, outils légitimes Windows

Il infiltrait initialement les systèmes via une **mise à jour compromise** du logiciel ukrainien de comptabilité **MeDoc**.

## Comment l’attaque s’est-elle déroulée ?

1. Compromission des serveurs de mise à jour de MeDoc
2. Déploiement de NotPetya via une mise à jour logicielle officielle
3. Une fois installé, NotPetya :
    - Chiffre la MFT (Master File Table) de NTFS, rendant le système inutilisable
    - Affiche une demande de rançon avec une adresse email (vite désactivée)
    - Se propage via SMB, PsExec, Mimikatz à travers le réseau
    - Supprime les journaux d’événements et redémarre la machine pour activer le chiffrement

Mais **aucun mécanisme de déchiffrement n’existe réellement** : les fichiers sont perdus définitivement.

## Qui a été touché ?

-   **Ukraine** : banques, aéroports, transports, énergie, institutions gouvernementales
-   **Maersk** (transport maritime) : tous les systèmes IT redémarrés manuellement
-   **Rosneft**, **Merck**, **FedEx (TNT Express)**, **Saint-Gobain**, **Mondelez** : opérations paralysées
-   **Chernobyl** : les capteurs de radiation désactivés pendant plusieurs heures

Bien que ciblée sur l’Ukraine, l’attaque s’est propagée de manière **indiscriminée**.

## Quels ont été les impacts ?

-   **Dommages matériels** irréversibles (destruction logique des données)
-   **Pertes d’exploitation majeures** pour des multinationales
-   **Interruption des chaînes logistiques internationales**
-   **Pas de récupération possible** : le chiffrement est en fait une opération de sabotage

> NotPetya est estimé comme **la cyberattaque la plus coûteuse de l'histoire**, avec plus de **10 milliards de dollars** de pertes cumulées.

## Quel coût estimé ?

-   **Petite entreprise** : 50 000 € à 100 000 € (si touchée)
-   **Moyenne entreprise** : 500 000 € à plusieurs millions €
-   **Grande entreprise** :
    -   Maersk : 300 millions $
    -   FedEx : 400 millions $
    -   Merck : 870 millions $
    -   Total estimé global : **>10 milliards $**

## Comment s’en protéger ?

1. **Désactiver SMBv1**
2. **Appliquer tous les correctifs de sécurité Microsoft**
3. **Segmenter les réseaux internes**
4. **Bloquer PsExec et WMIC si non nécessaires**
5. **Contrôler les accès administratifs et surveiller les mouvements latéraux**
6. **Sauvegardes offline testées régulièrement**
7. **Surveillance en temps réel avec détection comportementale**

## Pourquoi est-ce difficile à éviter ?

-   L’attaque vient d’une **chaîne de confiance compromise (MeDoc)**
-   **Propagation interne extrêmement rapide** : une fois à l’intérieur, le malware agit comme un ver
-   Utilise des **outils légitimes Windows** (difficiles à détecter sans EDR)
-   Les ransomwares de sabotage sont souvent **indiscernables au départ**

## Dans le contexte de votre entreprise, que feriez-vous ?

-   Imposer des **mises à jour automatiques critiques**
-   Mettre en place une **veille sur les logiciels tiers utilisés (supply chain)**
-   Renforcer la **détection de mouvements latéraux internes**
-   Désactiver ou restreindre **l’accès aux outils comme PsExec/WMIC**
-   Faire des **tests de confinement réseau** simulant des vers internes
-   Créer un **plan de résilience cyber** incluant la continuité des opérations en cas de destruction totale

---
