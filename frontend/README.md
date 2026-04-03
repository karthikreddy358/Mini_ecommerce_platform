# EcoShop Frontend

EcoShop is a React and Vite storefront for eco-friendly shopping. The app focuses on a clean landing page, category browsing, and simple authentication screens for a sustainable lifestyle brand.

## Features

- Responsive landing page with a hero banner, category grid, and value proposition section.
- Client-side routing for home, login, and sign-up views.
- Reusable UI components for buttons, inputs, category cards, feature cards, and product cards.
- Shared layout with a top navigation bar and footer shell.
- Theme styling powered by CSS variables and the Inter font family.

## Tech Stack

- React
- Vite
- React Router DOM
- Lucide React icons
- @fontsource/inter

## Project Structure

- src/main.jsx: App bootstrap and BrowserRouter setup.
- src/App.jsx: Layout composition and route definitions.
- src/components/layout: Header and footer components.
- src/components/sections: Hero, ShopByCategory, FeaturesSection, and Login views.
- src/components/ui: Shared UI building blocks.

## Routes

- /: Homepage with hero, categories, and feature highlights.
- /login: Sign in screen.
- /signup: Sign up screen using the same authentication layout.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

Run this from the frontend folder:

	npm install

### Start the Development Server

	npm run dev

### Build for Production

	npm run build

### Preview the Production Build

	npm run preview

### Run Linting

	npm run lint

## Notes

- The homepage content is currently focused on sustainable consumer products and eco-conscious shopping.
- The login and sign-up screens are presentational and are ready to be wired to real authentication logic.