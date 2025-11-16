# Studio Natalii - Women's Caring Centre Website

A modern, multilingual website for Studio Natalii beauty salon in Warsaw, Poland.

## Features

- 🌍 **Multi-language Support**: English, Polish, and Ukrainian
- 💅 **Services Showcase**: Manicure, Facial Treatments, Hair Styling, Massage, Makeup, and Waxing
- 📅 **Online Booking**: Easy appointment scheduling system
- 📍 **Location Integration**: Google Maps integration
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Modern UI**: Built with shadcn-ui and Tailwind CSS

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn-ui
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context API
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8.10.0+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://[username].github.io/studio-natalii/`

### Manual Deployment

```bash
# Build the project
pnpm run build

# The dist folder contains the production build
# Upload the contents to your hosting provider
```

## Project Structure

```
src/
├── components/          # React components
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   ├── ui/            # shadcn-ui components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── contexts/           # React contexts
│   └── LanguageContext.tsx
├── lib/               # Utilities
│   └── translations.ts
├── pages/             # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx
└── main.tsx
```

## Customization

### Changing the Repository Name

If you use a different repository name, update the `base` path in `vite.config.ts`:

```typescript
base: mode === 'production' ? '/your-repo-name/' : '/',
```

### Adding New Languages

1. Add translations to `src/lib/translations.ts`
2. Update the language type and add to the languages array in `src/components/LanguageSwitcher.tsx`

### Updating Contact Information

Edit the contact details in `src/lib/translations.ts` for all languages.

## License

© 2024 Studio Natalii. All rights reserved.

## Contact

- **Address**: Krzysztofa Kieślowskiego 3/lok. U3, 02-962 Warszawa, Poland
- **Facebook**: [Studio Natalii](https://www.facebook.com/studionatalii/)
- **Email**: info@studionatalii.pl