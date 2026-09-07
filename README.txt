# ShiftPilot PWA - Installation

## Fichiers inclus
- index.html : ton app complète V0.5 bêta fermée avec suppression pointages + alertes pause
- manifest.json : configuration PWA
- sw.js : service worker offline
- icon-192.png, icon-512.png : icônes standard
- icon-192-maskable.png, icon-512-maskable.png : icônes maskable (Android adaptive)
- icon-180.png : icône iOS

## Comment installer sur téléphone

### Option 1 : Hébergement simple (recommandé)
1. Upload tout le dossier sur un hébergement HTTPS (Netlify, Vercel, GitHub Pages, ton NAS, etc.)
2. Ouvre https://ton-domaine.com/index.html sur ton téléphone
3. Android Chrome : menu ⋮ > Installer l'application / Ajouter à l'écran d'accueil
4. iPhone Safari : bouton Partage > Sur l'écran d'accueil

### Option 2 : Test local
- Tu ne peux pas installer en PWA depuis file://
- Lance un petit serveur local : python -m http.server
- Puis ouvre http://localhost:8000

### Icône
L'icône fournie est celle que tu as envoyée, nettoyée en 192/512 + version maskable avec zone de sécurité pour Android.

Theme color: #06b6d4 (cyan ShiftPilot)
Background: #0a0e13
Display: standalone (sans barre navigateur)

Bonne install !
