# Shree Raghavendra Medicals

A modern, responsive, and patient-centric website built for Shree Raghavendra Medicals in Harugeri. This website is designed following modern 2024 healthcare UI trends, featuring a calming medical teal color palette, soft shadows, and highly legible typography.

## ✨ Key Features

- **English & Kannada Bilingual Toggle**: A fully integrated language switch that translates all content on the page between English and Kannada without requiring a page reload.
- **Modern Minimalist UI**: Clean, patient-focused design with generous whitespace and soft micro-animations (like hover lifts, pulsing discount badges, and sweeping shine effects).
- **Interactive Photo Gallery**: A "Take a Look Inside" gallery featuring a custom Lightbox for viewing images in full screen.
- **Special Offers Integration**: Prominent, animated badges highlighting "10% Off on Medicines" and "Free Home Delivery (₹1000+)".
- **Responsive Mobile-First Design**: Includes a custom hamburger menu and grid adjustments to ensure the site looks stunning on both smartphones and desktop computers.
- **WhatsApp & Map Integration**: One-click WhatsApp prescription sending and embedded Google Maps for easy store location.

## 🛠️ Technology Stack

- **HTML5**: Clean, semantic markup.
- **Vanilla CSS3**: Modern variables (`:root`), Flexbox/Grid layouts, and custom `@keyframes` animations. No external CSS frameworks are required.
- **Vanilla JavaScript**: Lightweight DOM manipulation for the mobile menu, bilingual toggling, scroll reveal animations, and lightbox gallery.
- **FontAwesome**: Icons for services and contact details.

## 🚀 How to Run Locally

Since this is a static website built purely with HTML, CSS, and JS, there is no build step required.

1. Clone or download this repository.
2. Navigate to the `pharmacy-website` folder.
3. Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

## 📁 Project Structure

```text
pharmacy-website/
├── index.html       # The main webpage containing all structure and text translations.
├── style.css        # All styling, variables, media queries, and animations.
├── script.js        # Logic for language toggle, lightbox, mobile menu, and scroll reveals.
└── assets/          # Directory containing images (hero.png, shop1.jpg, etc.)
```

## 🌐 Adding Translations

To add new translated elements:
1. Wrap the text in an HTML tag (e.g., `<span>`, `<h2>`).
2. Add the English text to the `data-en` attribute.
3. Add the Kannada text to the `data-kn` attribute.

Example:
```html
<h2 data-en="Welcome" data-kn="ಸ್ವಾಗತ">Welcome</h2>
```
The JavaScript `switchLanguage()` function will automatically detect and toggle these elements.

---
*Designed to bring quality healthcare closer to the community of Harugeri.*
