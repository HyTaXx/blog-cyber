---
title: "TP 3 : rootme 9"
excerpt: "XSS - Stockée 1"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T11:50:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : XSS - Stockée 1

## Informations générales

-   **Nom du challenge** : XSS - Stockée 1
-   **Difficulté** : 3
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : Trouver cookie admin

### Contexte technique : forum avec form sensible au xss

---

## 2. Étapes de résolution

### Étape 1 : crée un lien de webhook

### Étape 2 : injecter le lien de webhook dans le from en le camouflant dans une image

### Etape 3 : attendre que l'admin visite le lien et webhook et obtenir le cookie que sa session contient

### Etape 4 : obtention du cookie = obtention du flag

---

## 3. Capture ou extrait de code

![1](/assets/blog/rootme/step10-1.png)

![2](/assets/blog/rootme/step10-2.png)

![3](/assets/blog/rootme/step10-3.png)

---

## 4. Explication technique

### Vulnérabilité exploitée : Manque de prrotection XSS sur les champs

---

## 5. Résultat : NkI9qe4cdLIO2P7MIsWS8ofD6

---

## 6. Prévention / bonnes pratiques :

### Proteger les input des attaques XSS
