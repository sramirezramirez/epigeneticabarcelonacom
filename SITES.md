# Site Management Guide

## Current Sites

### empapadorparaperros
- **Location**: `src/sites/empapadorparaperros/`
- **Config**: Spanish language, dog diapers products
- **Products**: 3 products (different sizes)

## Adding a New Site

### Step 1: Create Site Directory
```bash
mkdir src/sites/newsitename
```

### Step 2: Create Configuration File
Create `src/sites/newsitename/config.js`:
```javascript
export default {
  name: 'Your Site Name',
  shortName: 'Short',
  description: 'Site description',
  heroTitle: 'Hero Title',
  heroSubtitle: 'Hero subtitle',
  primaryColor: '#2563eb',
  primaryColorDark: '#1e40af',
  buyButtonText: 'Buy Now',
  currency: 'USD',
  currencySymbol: '$',
};
```

### Step 3: Create Products File
Create `src/sites/newsitename/products.js`:
```javascript
export const products = [
  {
    id: 1,
    name: 'Product Name',
    price: 29.99,
    image: 'https://example.com/image.jpg',
    description: 'Product description',
    category: 'Category',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === parseInt(id));
}
```

### Step 4: Create App File
Create `src/sites/newsitename/App.jsx`:
```javascript
import { Routes, Route } from 'react-router-dom';
import config from './config';
import { products, getProductById } from './products';
import Header from '../../shared/components/Header';
import Home from '../../shared/pages/Home';
import ProductDetail from '../../shared/pages/ProductDetail';
import Checkout from '../../shared/pages/Checkout';
import '../../shared/styles/App.css';

function NewSiteApp() {
  return (
    <div className="app">
      <Header siteName={config.name} />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                heroTitle={config.heroTitle}
                heroSubtitle={config.heroSubtitle}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                getProductById={getProductById}
                buyButtonText={config.buyButtonText}
              />
            }
          />
          <Route
            path="/checkout/:id"
            element={<Checkout getProductById={getProductById} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default NewSiteApp;
```

### Step 5: Update Main Entry Point
Edit `src/main.jsx` to import your new site:
```javascript
import NewSiteApp from './sites/newsitename/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewSiteApp />
    </BrowserRouter>
  </React.StrictMode>
);
```

## Site-Specific Customization

### Override Styles
Create `src/sites/newsitename/styles.css` and import it in `App.jsx` to override CSS variables:
```css
:root {
  --primary: #your-color;
  --primary-dark: #your-dark-color;
}
```

### Custom Components
You can create site-specific components in `src/sites/newsitename/components/` and use them in your site's `App.jsx`.
