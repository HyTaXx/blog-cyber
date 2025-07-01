---
title: "TP 3 : rootme 8"
excerpt: "Javascript - Webpack"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T10:55:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : Javascript - Webpack

## Informations générales

-   **Nom du challenge** : Javascript - Webpack
-   **Difficulté** : 2
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : Trouver mot de passe

### Contexte technique : prompt de rentrer un mot de passe

---

## 2. Étapes de résolution

### Étape 1 : Ouvrir l'inspécteur

### Étape 2 : aller dans le code source et explorer les fichiers jusqu'à trouver le fichier js app.a92... à la fin de ce fichier il y'a un commentaire avec un fichier

### Etape 3 : télécharger le fichier avec curl puis utiliser grep pour chercher le terme "flag"

### Etape 4 : obtention du flag

---

## 3. Capture ou extrait de code

![1](https://cdn.discordapp.com/attachments/1020343302052118589/1389539304287633490/Capture_decran_2025-07-01_a_11.31.47.png?ex=6864fcd2&is=6863ab52&hm=a73573363b4ab5dd0140b7c57830051af29d458aa4c57e02e96be96f2f142c67&)

![2](https://cdn.discordapp.com/attachments/1020343302052118589/1389539304782565406/Capture_decran_2025-07-01_a_11.32.06.png?ex=6864fcd2&is=6863ab52&hm=aafd08212b3b7a23fe72aae0afe162af48562219ecd0ad85696d63f54b66ce5d&)

![3](https://cdn.discordapp.com/attachments/1020343302052118589/1389539305147600917/Capture_decran_2025-07-01_a_11.32.31.png?ex=6864fcd2&is=6863ab52&hm=0e5d9e0b4e44fe157c8b9face8f38917753a299b9726c0f27942d39df481b611&)

![4](https://cdn.discordapp.com/attachments/1020343302052118589/1389539305491267674/Capture_decran_2025-07-01_a_11.32.39.png?ex=6864fcd2&is=6863ab52&hm=2ed1f721a5c9ecfcd7deaf7e8ffb0d2492216b098b75ae158d6d3061439daefa&)

---

## 4. Explication technique

### Vulnérabilité exploitée : SourceMap should not be used in production

---

## 5. Résultat : BecauseSourceMapsAreGreatForDebuggingButNotForProduction

---

## 6. Prévention / bonnes pratiques :

### Ne pas mettre de sourceMap en prod
