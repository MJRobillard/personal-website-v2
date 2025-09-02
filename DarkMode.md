Here is the **Complete Style Guide** for the **"MJRobillard: Lápiz Tech Dark Mode"**, combining the **earthy mythic color symbolism** with **retro-futurist neon aesthetics**.

---

# 🧪 **MJRobillard – Dark Mode Style Guidelines**

> *“Trickster ancient meets terminal neon.”*

---

## 🎨 1. Color Palette

### 🔳 Core Background & Text

| Name                 | Hex       | Use Case                           |
| -------------------- | --------- | ---------------------------------- |
| **Volcanic Ash**     | `#2B2320` | Main background                    |
| **Verdigris Shadow** | `#1E2B26` | Card background or section layer   |
| **Tin Silver**       | `#BFC5C6` | Primary text                       |
| **Obsidian Gray**    | `#626262` | Secondary text, muted metadata     |
| **Ochre Clay**       | `#C89B6D` | Accent backgrounds (cards, badges) |

---

### ✴️ Neon Accent & Glow Colors

| Name                   | Hex       | Usage                     | Glow                                   |
| ---------------------- | --------- | ------------------------- | -------------------------------------- |
| **Lápiz Lazuli Neon**  | `#3C84FF` | Links, borders, CTA hover | `text-shadow: 0 0 8px #3C84FF99`       |
| **Molten Copper**      | `#FF7643` | Buttons, highlights       | `0 0 6px #FF764366`                    |
| **Verdigris Patina**   | `#52C58C` | Outlines, hover effects   | `box-shadow: 0 0 10px #52C58C66 inset` |
| **Imperial Plum Glow** | `#D472FF` | Tags, outlines, pulses    | `0 0 8px #D472FF88`                    |

---

### 🧬 Gradients

**Hero Gradient (Lápiz Taxco):**

```css
background: linear-gradient(135deg, #3C84BF 0%, #2D6B9F 40%, #203E5F 100%);
```

**Copper Hover Gradient:**

```css
background: linear-gradient(90deg, #FF7643, #B25E31);
```

---

## 🔤 2. Typography

### 🔠 Headline Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=VT323&display=swap" rel="stylesheet">
```

| Style           | Font                     | Use                            |
| --------------- | ------------------------ | ------------------------------ |
| **H1 / Titles** | `Orbitron` or `Zen Dots` | Trickster modernity            |
| **Terminal UI** | `VT323`                  | Console readouts, counters     |
| **Body Text**   | `Inter` or `DM Sans`     | Clean, legible base layer      |
| **Embellished** | `Audiowide` or `Monoton` | Stylized glowing text elements |

---

## 🧩 3. UI Components

### 📌 Buttons

#### Primary Lápiz Button

```css
background: linear-gradient(145deg, #2D6B9F, #3C84FF);
color: #F4F4F4;
text-shadow: 0 0 6px #3C84FF99;
box-shadow: 0 0 12px #2D6B9F66;
border: 1px solid #3C84FF;
border-radius: 6px;
font-family: 'Orbitron';
```

#### Secondary Copper Glow Button

```css
background: #B25E31;
color: #FFF3E5;
text-shadow: 0 0 4px #FF7643AA;
box-shadow: 0 0 8px #FF764366 inset;
font-family: 'Inter';
```

---

### 📄 Cards & Modals

```css
background-color: #1E2B26;
border: 1px solid rgba(191,197,198,0.2);
color: #BFC5C6;
box-shadow: 0 0 10px #203E5F33;
border-radius: 10px;
padding: 1.5rem;
```

Use **Verdigris trim** for hover state outlines:

```css
box-shadow: 0 0 0 2px #52C58C88;
```

---

## ✒️ 4. Links & Interactions

### Links

```css
color: #3C84FF;
text-decoration: none;
border-bottom: 1px solid transparent;
transition: all 0.3s ease;
```

### Hover State

```css
border-bottom: 1px solid #3C84FF;
text-shadow: 0 0 4px #3C84FF88;
```

---

## ⚙️ 5. Special Effects

### ✅ Glows

Use sparingly:

```css
text-shadow: 0 0 8px var(--color-accent);
box-shadow: 0 0 10px var(--color-accent) inset;
```

### 🌀 Animated Background Elements

**Subtle SVG Glyphs (faded Mayan runes or Byzantine crosses):**

```css
opacity: 0.05;
position: absolute;
z-index: -1;
filter: blur(2px);
```

**Particle.js or Canvas Fog:**

* Low-opacity Lápiz dots or shimmer waves
* Can represent "trickster" flow of energy across background

---

## 🎛 6. Utility + Layout Suggestions

| Element                     | Style                                                             |
| --------------------------- | ----------------------------------------------------------------- |
| **Navbars**                 | Tin Silver text, Volcanic Ash background, glowing link underlines |
| **Footers**                 | Verdigris Patina or Imperial Plum tags and social icons           |
| **Section Breaks**          | Use horizontal glowing gradient lines or geometric SVG            |
| **Code Blocks / Terminals** | `VT323`, background `#1E1E1E`, glow text in Lápiz                 |
| **Toggle Switches**         | Copper Rust base, Lápiz glow ring when “on”                       |

---

## 🧪 Bonus: Tailwind CSS Config Snippet

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        volcanic: '#2B2320',
        verdigris: '#5B9279',
        tin: '#BFC5C6',
        copper: '#B25E31',
        lápiz: '#2D6B9F',
        neonlapiz: '#3C84FF',
        imperial: '#5E345E',
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        mono: ['VT323', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 10px rgba(60,132,255,0.5)',
      },
    },
  },
};
```

---


