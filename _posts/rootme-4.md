---
title: "TP 3 : rootme 4"
excerpt: "Javascript - Auth 2"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T10:10:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : Javascript - Authentification 2

## Informations générales

-   **Nom du challenge** : Javascript - Authentification 2
-   **Difficulté** : 1
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : Trouver login et mot de passe

### Contexte technique : Bouton login qui oivre des popup de formulaire

---

## 2. Étapes de résolution

### Étape 1 : Ouvrir l'inspécteur

### Étape 2 : aller dans source/top/challenge01.root-me.org/web-client/ch11/login.js

### lire le code et comprendre que ce sont les variables dans var TheLists = ["GOD:HIDDEN"];

### Étape 4 : Récuperer le user GOD et pass HIDDEN

### Etape 5 : remplir le form avec ces variables

### Etape 5 : obtention du flag

---

## 3. Capture ou extrait de code

![Formulaire avec boutons désactivés](/assets/blog/rootme/step5-1.png)

![Flag obtenu après contournement](/assets/blog/rootme/step5-2.png)

---

## 4. Explication technique

### Vulnérabilité exploitée : identifiant en clair dans le code js du frontend

---

## 5. Résultat : HIDDEN

---

## 6. Prévention / bonnes pratiques :

### Ne pas mettre de vérification de valeur dans le frontend ni la valeur d'ailleurs
