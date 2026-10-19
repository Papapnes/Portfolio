# Notes sur le portfolio

## Sources du contenu

- **CV** : `Projet BI/CV/CV_Abdelkader_Bouzourine_Consultant_BI_sep.pdf`. Il sert de source pour le parcours professionnel, la formation, les compétences et les coordonnées.
- **Projets** : PDF Power BI du dossier `Projet BI/` (Coffee, Car, thé, Gatineau, Soccer). Les PDF sont copiés dans `static/projects/` et la première page de chacun sert de visuel de carte (`static/assets/projects/`).
- **Hero** : `static/assets/abdelkader-dashboard-banner.jpg`, fourni par l'utilisateur.

## Structure

- `index.html` : page unique (héros, travaux filtrables, compétences en 4 groupes, parcours en carte, contact).
- `static/app.js` : traductions FR/EN/AR, catalogue des projets, parcours, modale projet, filtres, RTL.
- `static/styles.css` : styles personnalisés (cartes, parcours, badges de compétences, conteneurs).
- `static/tailwind.css` : utilitaires Tailwind générés depuis `index.html` et `app.js` (Tailwind 3.4.17). À régénérer après un changement de classes.

## Régénérer `tailwind.css`

Outil installé hors du projet, dans `/tmp/tw` (non versionné) :

```powershell
npx tailwindcss -c tailwind.config.js -i input.css -o <projet>/static/tailwind.css
```

`tailwind.config.js` pointe sur `index.html` et `static/app.js`.

## Points à compléter

- Les descriptions de projets et le parcours sont en français. EN et AR retombent sur le français tant qu'ils ne sont pas traduits.
- Les vidéos du dossier `Projet BI/` (≈ 540 Mo) ne sont pas incluses. Elles demandent un hébergement externe.
- Aucun lien GitHub ni WhatsApp n'est affiché, faute d'URL valide fournie.

## Réseau

La page charge les polices depuis Google Fonts (`static/styles.css`). Aucun analytics, aucun appel API et aucune requête de fond.
