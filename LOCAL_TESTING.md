# Local Testing Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

Vite will automatically open your browser, or you can navigate to that URL manually.

## Testing Different Sites

Currently, the app loads the `empapadorparaperros` site by default (see `src/main.jsx`).

### To Test a Different Site:

**Option 1: Temporarily change `src/main.jsx`**
```javascript
// Change this line:
import EmpapadorApp from './sites/empapadorparaperros/App';

// To:
import NewSiteApp from './sites/newsitename/App';

// And update the component:
<NewSiteApp />
```

**Option 2: Use Environment Variables (Future Enhancement)**
You can set up environment-based site selection for easier switching.

## Hot Reload

Vite provides hot module replacement (HMR), so:
- Changes to components automatically refresh the browser
- No need to manually refresh
- Fast development experience

## Testing Checklist

- [ ] Home page displays products correctly
- [ ] Product cards show images, names, prices
- [ ] Clicking a product goes to detail page
- [ ] Product detail page shows full information
- [ ] "Buy Now" button navigates to checkout
- [ ] Checkout form displays correctly
- [ ] All navigation works (back buttons, header links)
- [ ] Responsive design works on mobile (resize browser)

## Preview Production Build

To test the production build locally:

```bash
npm run build
npm run preview
```

This builds the site and serves it at **http://localhost:4173** (or another port if 4173 is taken).

## Common Issues

### Port Already in Use
If port 5173 is taken, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### Changes Not Reflecting
- Make sure you saved the file
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Routing Issues
If routes don't work, make sure you're using `BrowserRouter` (which we are). For GitHub Pages deployment, you might need `HashRouter` instead.
