# Portfolio — Abdelkader Bouzourine

Site statique d'une seule page (HTML, CSS, JavaScript) servi par un petit serveur Python standard. Il présente le hero, les projets Power BI, les compétences, le parcours professionnel et les coordonnées, en français, anglais et arabe (mise en page RTL).

## Lancer

```powershell
python app.py
```

Puis ouvrir <http://127.0.0.1:8000>. Port et adresse peuvent être changés avec `PORTFOLIO_PORT` et `PORTFOLIO_HOST`.

Le serveur n'utilise que la bibliothèque standard Python. Les polices viennent de Google Fonts ; les autres ressources sont locales. Les liens LinkedIn et l'email ne s'ouvrent que si le visiteur clique.

## Contenu à mettre à jour

- Projets : `projectCatalog` dans [static/app.js](static/app.js). Les PDF sont dans `static/projects/`, les visuels dans `static/assets/projects/`.
- Parcours : `careerSteps` dans [static/app.js](static/app.js).
- Compétences et contact : [index.html](index.html).
- CV : `static/projects/cv-abdelkader-bouzourine.pdf`.

Les détails de construction et les sources sont dans [ANALYSIS.md](ANALYSIS.md).

## Avertissement de déploiement

`app.py` sert tout le dossier. En local (127.0.0.1) c'est sans risque, mais si le site est mis en ligne, placez les fichiers publics dans un dossier dédié plutôt que de servir le projet entier (les `.md` et `app.py` seraient accessibles).
