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

![1](/assets/blog/rootme/step9-1.png)

![2](/assets/blog/rootme/step9-2.png)

![3](/assets/blog/rootme/step9-3.png)

![4](/assets/blog/rootme/step9-4.png)

---

## 4. Explication technique

### Vulnérabilité exploitée : SourceMap should not be used in production

---

## 5. Résultat : BecauseSourceMapsAreGreatForDebuggingButNotForProduction

---

## 6. Prévention / bonnes pratiques :

### Ne pas mettre de sourceMap en prod
