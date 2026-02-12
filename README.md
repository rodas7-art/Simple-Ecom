# Shopping Cart Mini Project - React

A modern shopping cart application built with React, featuring a clean UI and full cart functionality.

## Features

### Core Functionality
- **Home Page**: Displays all available products with images, names, and prices
- **Cart Page**: Shows selected items with quantity controls and total amount
- **Add to Cart**: Each product has an "Add to Cart" button
- **Remove from Cart**: Each cart item has a "Remove" button
- **Quantity Management**: +/- buttons to change item quantities
- **Dynamic Total**: Total price recalculates automatically when quantities change
- **Empty Cart Message**: Displays a friendly message when the cart is empty
- **Persistent Storage**: Cart data is saved to localStorage

### Additional Features
- Modern, responsive UI design
- Smooth animations and transitions
- Cart count badge in navigation
- Visual feedback when adding items
- Mobile-friendly layout
- React Context API for state management
- React Router for navigation

## Project Structure

```
shopping-cart-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── ProductCard.js
│   │   ├── ProductCard.css
│   │   ├── CartItem.js
│   │   └── CartItem.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Cart.js
│   │   └── Cart.css
│   ├── context/
│   │   └── CartContext.js
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation

1. Navigate to the project directory:
```bash
cd shopping-cart-react
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

Create an optimized production build:
```bash
npm run build
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **React Context API** - State management
- **CSS3** - Styling with modern features
- **LocalStorage API** - Data persistence

## Features Breakdown

### State Management
- Uses React Context API to manage cart state globally
- Cart data persists in localStorage
- Automatic cart count updates across components

### Components
- **Navbar**: Navigation with active route highlighting and cart badge
- **ProductCard**: Displays product information with add to cart functionality
- **CartItem**: Shows cart item with quantity controls and remove button
- **Home**: Product listing page
- **Cart**: Cart page with items and total calculation

### Routing
- `/` - Home page with all products
- `/cart` - Cart page with selected items

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript features
- CSS Grid and Flexbox
- LocalStorage API
- React 18
