---
title: "TP 3 : rootme 6"
excerpt: "Javascript - Obfuscation 2"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T10:40:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : Javascript - Obfuscation 2

## Informations générales

-   **Nom du challenge** : Javascript - Obfuscation 2
-   **Difficulté** : 1
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : Trouver mot de passe

### Contexte technique : page blanche avec info dans sources

---

## 2. Étapes de résolution

### Étape 1 : Ouvrir l'inspécteur

### Étape 2 : aller dans source/top/challenge01.root-me.org/web-client/ch12/ch12.html

### Etape 3 : lire le code et comprendre que le pass est obfuscé var pass = unescape("unescape%28%22String.fromCharCode%2528104%252C68%252C117%252C102%252C106%252C100%252C107%252C105%252C49%252C53%252C54%2529%22%29");

### Étape 4 : par etapes, decoder le code une première fois en unescape, puise une seconde fois en unescape, puis en String.fromCharCode et obtenir le pass

### Etape 5 : obtention du flag

---

## 3. Capture ou extrait de code

![1](/assets/blog/rootme/step7-1.png)

![2](/assets/blog/rootme/step7-2.png)

---

## 4. Explication technique

### Vulnérabilité exploitée : identifiant dans le code js du frontend avec différentes fonctions

---

## 5. Résultat : hDufjdki156

---

## 6. Prévention / bonnes pratiques :

### Ne pas mettre de vérification de valeur dans le frontend ni la valeur d'ailleurs
