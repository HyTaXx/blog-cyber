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

![1](/assets/blog/rootme/step6-1.png)

![2](/assets/blog/rootme/step6-2.png)

![3](/assets/blog/rootme/step6-3.png)

---

## 4. Explication technique

### Vulnérabilité exploitée : identifiant le code js du frontend avec la function de decrypt

---

## 5. Résultat : cpasbiendurpassword

---

## 6. Prévention / bonnes pratiques :

### Ne pas mettre de vérification de valeur dans le frontend ni la valeur d'ailleurs
