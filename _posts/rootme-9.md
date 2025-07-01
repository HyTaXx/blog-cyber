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

![1](https://cdn.discordapp.com/attachments/1020343302052118589/1389543957008224326/image.png?ex=68650127&is=6863afa7&hm=7670071a2945a5d39d8e371fdd2f25f3521bbe696db33c7a20ae57fb4c7eb72b&)

![2](https://cdn.discordapp.com/attachments/1020343302052118589/1389544034678341672/image.png?ex=6865013a&is=6863afba&hm=ea40dff5466158a336c8d7d378320016bb2f88849806778cd7207ed23c10dbcf&)

![3](https://cdn.discordapp.com/attachments/1020343302052118589/1389544091632799754/image.png?ex=68650147&is=6863afc7&hm=831d180e85997c090f05c47684a5d6fe5390dccbb215bd96f46001019aba6d3a&)

---

## 4. Explication technique

### Vulnérabilité exploitée : Manque de prrotection XSS sur les champs

---

## 5. Résultat : NkI9qe4cdLIO2P7MIsWS8ofD6

---

## 6. Prévention / bonnes pratiques :

### Proteger les input des attaques XSS
