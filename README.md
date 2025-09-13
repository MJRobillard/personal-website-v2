# MJRobillard - Personal Portfolio

A Next.js portfolio website that explores the intersection of historical scholarship and computational analysis. Built with modern web technologies and inspired by the duality of ancient wisdom and modern intelligence.


## Feature

- **Dual Theme Toggle**: Switch between "History" and "Data" modes with custom styling
- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Automatic theme detection with manual override
- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Performance**: Built with Turbopack for fast development and builds

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Turbopack
- **Linting**: ESLint with Next.js config

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation bar
│   └── ThemeToggle.tsx    # Theme toggle component
```

## Color Palette

### Light Mode (History)
- **Primary**: Lápiz Blue (#2D6B9F)
- **Secondary**: Copper Rust (#B25E31)
- **Background**: Clean White (#ffffff)
- **Muted**: Soft Gray (#f4f4f4)

### Dark Mode (Data)
- **Primary**: Neon Lapiz (#3C84FF)
- **Secondary**: Molten Copper (#FF7643)
- **Background**: Volcanic Ash (#0a0a0a)
- **Muted**: Deep Gray (#121212)

## Development

- **Development**: `npm run dev` (with Turbopack)
- **Build**: `npm run build` (with Turbopack)
- **Start**: `npm start`
- **Lint**: `npm run lint`

## Research Focus

## License

Personal project - All rights reserved.
