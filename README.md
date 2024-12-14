# Travelly: Explore, Dream, Book 🌍

![Travelly Logo](static/hero.jpg)

Travelly is a travel application designed to inspire exploration, simplify trip planning, and make booking effortless. Built with modern web technologies, Travelly is your go-to platform for all things travel.

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Features

- **Inspiration**: Discover new destinations and travel ideas
- **Trip Planning**: Easily plan and organize your trips
- **Effortless Booking**: Streamlined booking process for flights, hotels, and activities
- **Fast Performance**: Lightning-quick load times powered by Vercel
- **Modern UI**: Sleek and responsive design using Tailwind CSS
- **Component Library**: Reusable UI components showcased in Storybook
- **Comprehensive Docs**: Detailed documentation powered by Mintlify

## 🛠️ Tech Stack

- ✨ **Frontend**: Next.js
- 🌍 **Deployment**: Vercel
- 🎨 **Styling**: Tailwind CSS
- 🚀 **Monorepo**: Turborepo
- 👨‍🎨 **UI Development**: Storybook (Vite)
- 🍵 **Documentation**: Mintlify

## 🏗️ Project Structure

Travelly is a monorepo managed with Turborepo, consisting of three main applications:

1. **Web App** (Next.js): The main Travelly application
2. **Storybook** (Vite): UI component library and development environment
3. **Docs** (Mintlify): Comprehensive project documentation

### Turborepo Configuration

Our Turborepo is configured with the following tasks:

- `dev`: Starts development servers (not cached, persistent)
- `build`: Builds all apps and packages, with dependencies on environment variables
- `typecheck`: Runs type checking across the entire monorepo
- `format-and-lint`: Formats and lints all files (Biome)
- `format-and-lint:fix`: Formats and lints all files, fixing issues automatically (Biome)
- `check-dependencies`: Checks for dependency issues
- `clean`: Cleans up build artifacts and caches

## 🚦 Getting Started

### Prerequisites

- Node.js (22 or later)
- pnpm
- mintlify

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:nass59/nextjs-travel.git
   cd nextjs-travel
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cd apps/web
   cp .env.example .env
   ```
   Edit the `.env` file with your specific configuration.

### Development

To run the development server:

```bash
pnpm run dev
```

This will start the Next.js app, Storybook, and the documentation site concurrently.

### Building for Production

To build all apps and packages:

```bash
pnpm run build
```

## 📖 Documentation

To run the documentation:

```bash
cd apps/docs
pnpm run dev
```
![Travelly Logo](static/doc.jpeg)

## 📝 License

Travelly is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [Turborepo](https://turbo.build/)
- [Storybook](https://storybook.js.org/)
- [Mintlify](https://mintlify.com/)

---

Built with ❤️ by the Travelly Team
