# EcoEmpapador - Simple Product SPA

A clean, simple single-page application for selling focused products. Perfect for hosting on GitHub Pages with a custom domain.

## Structure

```
src/
├── components/      # Header component
├── pages/          # Home, ProductDetail, Checkout
├── data/           # Products data
├── config.js       # Site configuration
└── App.jsx         # Main app component
```

## Features

- **Landing Page**: Scroll-based sections (Hero, How It Works, Products)
- **Simple Checkout**: Direct checkout flow (no cart)
- **Responsive Design**: Mobile-first, modern UI
- **GitHub Pages Ready**: Easy deployment

## Setup

1. Install dependencies:
```bash
npm install
```

2. Update `vite.config.js` - change the `base` path:
   - If using GitHub Pages with repo name: `base: '/your-repo-name/'`
   - If using custom domain: `base: '/'`

3. Run locally:
```bash
npm run dev
```

## Customizing

- **Products**: Edit `src/data/products.js`
- **Branding**: Edit `src/config.js`
- **Content**: Edit `src/pages/Home.jsx` for landing page content
- **Styling**: Edit CSS files in `src/pages/` and `src/components/`

## Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy:
```bash
npm run deploy
```

Or manually:
- Push the `dist` folder contents to the `gh-pages` branch
- Configure GitHub Pages to serve from `gh-pages` branch

## Custom Domain

1. Add a `CNAME` file in `public/` with your domain
2. Update `vite.config.js` to use `base: '/'`
3. Configure DNS settings as per GitHub Pages instructions

## Payment Integration

The checkout page currently shows a demo. To integrate payments:
- Add Stripe, PayPal, or your preferred payment processor
- Update the `handleSubmit` function in `src/pages/Checkout.jsx`
