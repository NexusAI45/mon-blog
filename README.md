# NexusAI Blog

Blog personnel avec theme Neural Grid 2026 - Style cyberpunk neon.

## Demo

**Production** : [mon-blog-psi.vercel.app](https://mon-blog-psi.vercel.app)

## Stack Technique

| Technologie | Version |
|-------------|---------|
| React | 19.2.3 |
| TypeScript | 5.9.3 |
| Vite | 7.3.1 |
| Tailwind CSS | 3.4.19 |
| React Router | 7.13.0 |

## Structure

```
src/
├── components/     # Composants reutilisables
├── pages/          # Pages de l'application
├── services/       # Services (Notion API)
├── types/          # Types TypeScript
├── App.tsx         # Point d'entree React
├── main.tsx        # Bootstrap
└── index.css       # Styles globaux + Tailwind
```

## Installation

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploiement

Deploiement automatique sur Vercel via la branche `main`.

## Historique des Commits

| Commit | Description |
|--------|-------------|
| f61d2c0 | Fix TypeScript errors: unused variable and JSX namespace |
| 45a4f4e | Remove Windows-specific rollup dependency |
| a695a39 | Trigger Vercel rebuild |
| daa712b | Remove package-lock.json for cross-platform compatibility |
| 1c2f52f | Initial commit - NexusAi Blog |

## Fonctionnalites

- Page d'accueil avec hero section animee
- Integration Notion pour les articles de blog
- Theme cyberpunk avec effets neon
- Design responsive
- Animations CSS avancees

## Style

Le projet utilise le theme **Neural Grid 2026** :
- Palette : Bleu nuit `#0B0E14` + Cyan `#00F5FF` + Magenta `#FF007A`
- Typographie : Space Grotesk + JetBrains Mono
- Effets : Grille animee, glow neon, glassmorphism

Voir [styles/README.md](styles/README.md) pour les alternatives de style.
