# indian-hello-loader

A lightweight, zero-configuration React component that displays “Hello” in 13+ Indian languages, with automatic light/dark theme support — perfect for loading screens, onboarding flows, or cultural UIs.

#### Live Demo: [https://indian-hello-loader.vercel.app/](https://indian-hello-loader.vercel.app/)

#### Preview:

<img src="https://raw.githubusercontent.com/asifjirayat/indian-hello-loader/main/src/assets/indian-hello-loader.gif" alt="Indian Hello Loader" width="400" />

No CSS imports. No font setup. Just `<IndianHelloLoader />`.

## Installation

Install via npm:

```bash
npm install indian-hello-loader
```

Or with yarn:

```bash
yarn add indian-hello-loader
```

## Usage

Import and use it anywhere in your React app:

```bash
import IndianHelloLoader from 'indian-hello-loader';

function App() {
return <IndianHelloLoader />;
}
```

## Theme Options

Prop Type Default Description
`theme: 'auto' | 'light' | 'dark'`
Controls theme. Auto-detects system preference.

### Examples:

```bash
// Auto-detect (default)
<IndianHelloLoader />

// Force light mode
<IndianHelloLoader theme="light" />

// Force dark mode
<IndianHelloLoader theme="dark" />
```

## Customization

### Change the Font

By default, it uses Roboto Condensed (optimized for compact display).
To change the font, edit `useFontLoader.js` — we recommend only changing to fonts that support Devanagari, Bengali, Gurmukhi, Tamil, Telugu, Kannada, Malayalam, Oriya scripts.

- Example: Use `Poppins`

```bash
// In src/components/useFontLoader.js
useFontLoader("Poppins", "400");
```

Only use web-safe fonts supporting Indic scripts. Avoid generic fonts like Arial or Helvetica — they won’t render Indian text correctly.

## Change Animation Speed

By default, text changes every `400ms`.

Edit this line in `IndianHelloLoader.jsx`:

```bash
const interval = setInterval(updateText, 200);
```

to

```bash
const interval = setInterval(updateText, 2000); // 2 seconds
```

## Add or Remove Languages

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

Always test rendered text in browser, some fonts don’t support all scripts.

## How It Works

Feature Implementation

- Auto Theme Uses prefers-color-scheme + injects --bg-color & --text-color CSS variables
- No Global Styles Uses CSS Modules (\*.module.css) — zero style conflicts
- Font Loading Loads font via Google Fonts CDN — no bundling, fast, reliable
- Text Cycling Pure JavaScript — no animation libraries
- Zero Dependencies Only uses React — no extra packages

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

- Language is identity.
- This component doesn’t just show text, it says: _“We see you. We honor your language.”_

Whether you’re building an app for rural India, a global startup, or an educational tool, this loader brings warmth, inclusivity, and dignity to your UX.

Thank you for using it.
Let’s make tech more human, one language at a time.
