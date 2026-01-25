# Style 4 : Raw Compiler

**Genre :** Brutalist Moderne
**Ambiance :** Brut, honnete, ultra-rapide, structure pure du web

---

## Palette de Couleurs

| Role | Couleur | Hex |
|------|---------|-----|
| Fond principal | Blanc pur | `#FFFFFF` |
| Fond alternatif | Gris industriel | `#F0F0F0` |
| Accent primaire | Orange securite | `#FF4800` |
| Texte / Bordures | Noir pur | `#000000` |

---

## Typographie

- **Titres :** Space Grotesk (Bold & Wide)
- **Corps :** Courier Prime

---

## Elements UI Distinctifs

- Zero ombres, zero gradients
- Contrastes violents noir/blanc/orange
- Bordures epaisses 2-3px
- Ombres portees "dures" (blocs noirs decales)
- Texte defilant (Marquee) pour news
- Symboles ASCII et fleches epaisses
- Hover inversant les couleurs

---

## Structure des Sections

1. **Hero**
   - Titre enorme (80% ecran)
   - Impact immediat, pas de fioritures

2. **Index**
   - Liste simple d'articles sans images
   - Survol = inversion couleurs

3. **Code Snippets**
   - Blocs de code mis en avant comme art

4. **Portfolio**
   - Grid brut, pas de decorations

5. **YouTube**
   - Player avec bordure noire epaisse

6. **Archive**
   - Tableau brut : date, titre, tags

---

## CSS Variables

```css
:root {
  --color-bg: #FFFFFF;
  --color-bg-alt: #F0F0F0;
  --color-accent: #FF4800;
  --color-text: #000000;
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Courier Prime', monospace;
  --border-width: 2px;
}
```

---

## Preview Mood

> Brutalisme web assume, performances maximales, anti-bullshit.
> Pour les devs qui celebrent le code brut et l'efficacite pure.
