---
title: "TP 4 : WannaCry : Le ransomware qui a paralysé le monde"
excerpt: "Découvrez comment une vulnérabilité Windows a été exploitée à grande échelle dans l’attaque WannaCry, affectant hôpitaux, entreprises et gouvernements. Analyse complète de la faille, du déroulé de l’attaque, de ses conséquences et des moyens de s’en protéger."
coverImage: "https://www.kaspersky.com/content/en-global/images/repository/isc/2020/what_is_wannacry_1.jpg"
date: "2025-07-02T10:00:00.000Z"
author:
    name: JJ Kasper
    picture: "/assets/blog/authors/jj.jpeg"
ogImage:
    url: "https://www.kaspersky.com/content/en-global/images/repository/isc/2020/what_is_wannacry_1.jpg"
---

Le 12 mai 2017, le monde entier assiste à la propagation fulgurante du ransomware **WannaCry**. En l’espace de quelques heures, des centaines de milliers de systèmes sont chiffrés à travers plus de 150 pays. Hôpitaux, entreprises, administrations : personne n’est épargné. Derrière cette attaque, une faille critique exploitée dans les systèmes Windows, et un malware d’une redoutable efficacité.

## Quelle est la vulnérabilité exploitée ?

WannaCry s’appuie sur une vulnérabilité baptisée **EternalBlue**, rendue publique après une fuite de la NSA. Cette faille affecte le protocole **SMBv1** (Server Message Block) utilisé pour le partage de fichiers sur Windows. Microsoft avait pourtant publié un patch **MS17-010** en mars 2017, mais de nombreux systèmes étaient encore non mis à jour au moment de l’attaque.

## Comment l’attaque s’est-elle déroulée ?

L’attaque commence par la propagation automatique du ransomware via EternalBlue. Une fois un système vulnérable infecté, WannaCry chiffre tous les fichiers de l’utilisateur et affiche une demande de rançon en bitcoins, avec un compte à rebours. Le malware se réplique ensuite vers les autres machines du réseau, créant un **ver auto-propagé** extrêmement rapide.

Fait marquant : un **kill switch** découvert accidentellement par un chercheur en cybersécurité a permis de freiner la propagation. Le malware essayait de se connecter à un nom de domaine non enregistré ; une fois ce domaine acheté par le chercheur, WannaCry cessait son exécution.

## Qui a été touché ?

Parmi les organisations les plus célèbres :

-   **NHS (National Health Service)** au Royaume-Uni, forçant l'annulation de milliers de rendez-vous médicaux.
-   **Renault-Nissan** a dû arrêter plusieurs chaînes de production.
-   **FedEx**, **Deutsche Bahn**, **Telefonica**, **Ministères russes**, **Université de Montréal** et bien d’autres.

## Quels ont été les impacts ?

-   **Paralysie de systèmes critiques** (notamment médicaux et industriels)
-   **Chiffrement de données sensibles**
-   **Fermeture temporaire d’usines**
-   **Perturbation de services essentiels (transports, hôpitaux, etc.)**

Environ **200 000 ordinateurs infectés** dans plus de 150 pays.

## Quel coût estimé ?

-   **Petite entreprise** : ~5 000 € à 50 000 € (perte d’activité, restauration, rançon)
-   **Moyenne entreprise** : ~100 000 € à 500 000 €
-   **Grande entreprise** : Plusieurs **millions d’euros**
    -   L’attaque aurait coûté plus de **4 milliards de dollars** à l’économie mondiale selon certaines estimations.

## Comment s’en protéger ?

1. **Appliquer immédiatement les mises à jour de sécurité** (patch MS17-010)
2. **Désactiver SMBv1** sur les systèmes Windows
3. **Segmenter les réseaux** pour limiter la propagation
4. **Sauvegardes régulières** hors ligne et testées
5. **Formation des utilisateurs** aux risques de ransomware
6. **Solutions EDR/antivirus à jour**

## Pourquoi est-ce difficile à éviter ?

-   Beaucoup de **systèmes critiques** fonctionnent encore sur de vieux OS (Windows XP, 7)
-   **Manque de réactivité** dans l’application des patchs de sécurité
-   **Propagation autonome** : même sans action de l’utilisateur, WannaCry pouvait se diffuser
-   **Absence de segmentation réseau** dans beaucoup d’infrastructures

## Dans le contexte de votre entreprise, que feriez-vous ?

-   Mettre en place une **politique de patch management rigoureuse**
-   Réaliser un **audit de l’exposition au SMBv1**
-   Créer un **plan de réponse aux ransomwares**
-   Sensibiliser tous les employés par des **campagnes de simulation de phishing**
-   Déployer une **solution de détection comportementale**
-   Réaliser des **tests de restauration** réguliers pour s'assurer de l'efficacité des sauvegardes

---
