---
title: "TP 3 : rootme 5"
excerpt: "Javascript - Obfuscation 1"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T10:20:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : Javascript - Obfuscation 1

## Informations générales

-   **Nom du challenge** : Javascript - Obfuscation 1
-   **Difficulté** : 1
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : Trouver login et mot de passe

### Contexte technique : Bouton login qui oivre des popup de formulaire

---

## 2. Étapes de résolution

### Étape 1 : Ouvrir l'inspécteur

### Étape 2 : aller dans source/top/challenge01.root-me.org/web-client/ch4/ch4

### Etape 3 : lire le code et comprendre que le pass est obfuscé pass = '%63%70%61%73%62%69%65%6e%64%75%72%70%61%73%73%77%6f%72%64';

### Étape 4 : lire le code et comprendre que le mot de passe est vérifie avec un unescape

### Etape 5 : utiliser le unescape dans la console avec le pass

### Etape 5 : obtention du flag

---

## 3. Capture ou extrait de code

![1](https://cdn.discordapp.com/attachments/1020343302052118589/1389523656883044426/image.png?ex=6864ee3f&is=68639cbf&hm=bbf611d019872a5155f1956f1adb5a7d6c0db0cd73484c2f0fabc1e79daa02c7&)

![2](https://cdn.discordapp.com/attachments/1020343302052118589/1389524135784222821/image.png?ex=6864eeb2&is=68639d32&hm=b8834b9f40898c6058984e31ce2b5a53b4475da29e86db341efad7b238eaabad&)

![3](https://cdn.discordapp.com/attachments/1020343302052118589/1389524203870486598/image.png?ex=6864eec2&is=68639d42&hm=03280db4eafea4eaf4deba53ae1ff743a9c8e3e16c54a6370b0ecca13c3a6169&)

---

## 4. Explication technique

### Vulnérabilité exploitée : identifiant le code js du frontend avec la function de decrypt

---

## 5. Résultat : cpasbiendurpassword

---

## 6. Prévention / bonnes pratiques :

### Ne pas mettre de vérification de valeur dans le frontend ni la valeur d'ailleurs
