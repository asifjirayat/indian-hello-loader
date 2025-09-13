# indian-hello-loader

A lightweight, zero-configuration React component that displays "Hello" in 13+ Indian languages, with automatic light/dark theme support — perfect for loading screens, onboarding flows, or cultural UIs.

#### Live Demo: [https://indian-hello-loader.vercel.app/](https://indian-hello-loader.vercel.app/)

#### Preview:

<img src="https://raw.githubusercontent.com/asifjirayat/indian-hello-loader/main/src/assets/indian-hello-loader.gif" alt="Indian Hello Loader" width="400" />

#### No CSS imports. No font setup. Just IndianHelloLoader.

## Features

- 13+ Indian Languages - Hindi, Bengali, Tamil, Telugu, Gujarati, Punjabi, Malayalam, Kannada, Marathi, Oriya, Assamese, Urdu
- Auto Theme Detection - Respects user's system preference (light/dark)
- Zero Dependencies - Only requires React
- Lightweight - Less than 10KB bundled
- Responsive - Works on all screen sizes
- Accessible - Screen reader friendly

## Installation

Clone the repository and copy the component files to your project:

```bash
git clone https://github.com/asifjirayat/indian-hello-loader.git
```

Then copy the component files from `src/components/` to your project:

```bash
your-project/
├── src/
│ └── components/
│ ├── IndianGreetings.js
│ ├── IndianHelloLoader.jsx
│ ├── IndianHelloLoader.module.css
│ ├── useFontLoader.js
│ └── useThemeManager.js
```

### Quick Start

Import and use it anywhere in your React app:

```bash
import IndianHelloLoader from './components/IndianHelloLoader.jsx';

function App() {
return (
<div>
<IndianHelloLoader />
</div>
);
}
```

### API Reference

Props:

- `theme	'auto' or 'light' or 'dark'` Controls theme. Auto-detects system preference

### Usage Examples

```bash
// Auto-detect system theme (default)
<IndianHelloLoader />

// Force light mode
<IndianHelloLoader theme="light" />

// Force dark mode
<IndianHelloLoader theme="dark" />
```

### Customization

#### Custom Font

By default, it uses Roboto Condensed. To change the font, edit `useFontLoader.js`:

```bash
// In src/components/useFontLoader.js
useFontLoader("Poppins", "400");
```

_Important: Only use fonts that support Indic scripts. Avoid generic fonts like Arial or Helvetica — they won't render Indian text correctly._

#### Animation Speed

Default transition speed is `400ms`. Edit this line in `IndianHelloLoader.jsx`:

```bash
// Change from 400ms to 800ms (0.8 seconds)
const interval = setInterval(updateText, 800);
```

#### Add or Remove Languages

Edit `IndianGreetings.js` to customize the list:

```bash
export const indianGreetings = [
"Hello",
"নমস্কাৰ",
"السلام علیکم",
"नमस्ते",
"নমস্কার",
"નમસ્તે",
"ನಮಸ್ಕಾರ",
"नमस्कार",
"നമസ്കാരം",
"ନମସ୍କାର",
"ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
"வணக்கம்",
"నమస్తే",
"आदाब",
];
```

Always test rendered text in browser, some fonts don't support all scripts.

#### Supported Languages

The component cycles through these greetings:

- English: Hello
- Assamese: নমস্কাৰ
- Urdu: السلام علیکم
- Hindi: नमस्ते
- Bengali: নমস্কার
- Gujarati: નમસ્તે
- Kannada: ನಮಸ್ಕಾರ
- Marathi: नमस्कार
- Malayalam: നമസ്കാരം
- Oriya: ନମସ୍କାର
- Punjabi: ਸਤ ਸ੍ਰੀ ਅਕਾਲ
- Tamil: வணக்கம்
- Telugu: నమస్తే
- Urdu (formal): आदाब

## How It Works

#### Feature Implementation

- Auto Theme Uses prefers-color-scheme + injects --bg-color & --text-color CSS variables
- No Global Styles Uses CSS Modules (\*.module.css) — zero style conflicts
- Font Loading Loads font via Google Fonts CDN — no bundling, fast, reliable
- Text Cycling Pure JavaScript — no animation libraries
- Zero Dependencies Only uses React — no extra packages

#### Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Framework Compatibility

Works with all React-based frameworks:

- Create React App
- Next.js
- Gatsby
- Vite
- Remix

## Local Development

To test locally during development:

#### Clone the repository

```bash
git clone https://github.com/asifjirayat/indian-hello-loader
cd indian-hello-loader
```

#### Install dependencies

```bash
npm install
```

#### Start development server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser

## License

MIT © Asif Jirayat

## Why This Matters

Language is identity. This component doesn't just show text, it says: "We see you. We honor your language."

Whether you're building an app for rural India, a global startup, or an educational tool, this loader brings warmth, inclusivity, and dignity to your UX.

Thank you for using it.
Let's make tech more human, one language at a time.
