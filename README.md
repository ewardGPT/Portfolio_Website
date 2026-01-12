<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Deployed][deployed-shield]][deployed-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT HEADER -->
<br />
<div align="center">
  <h1 align="center">Cloud & AI Systems Architect Portfolio</h1>

  <p align="center">
    Professional portfolio showcasing cloud architecture, AI systems, and production infrastructure projects
    <br />
    <strong>Live at <a href="https://ervinward.com">ervinward.com</a></strong>
    <br />
    <br />
    <a href="https://ervinward.com">View Live Site</a>
    ·
    <a href="https://github.com/ewardGPT/Portfolio_Website/issues">Report Bug</a>
    ·
    <a href="https://github.com/ewardGPT/Portfolio_Website/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Portfolio Screenshot][product-screenshot]](https://ervinward.com)

A modern, responsive portfolio website built to showcase cloud architecture expertise, AI system design, and production infrastructure projects. Designed with professional aesthetics and optimized for performance and accessibility.

### Highlights

* ⚡ **Sub-second Load Time** - Optimized for performance (98/100 Lighthouse score)
* 🎨 **Modern Design** - Dark mode by default with cosmic theme
* 📱 **Fully Responsive** - Mobile-first design, tested on all devices
* ♿ **Accessible** - WCAG 2.1 AA compliant
* 🚀 **Fast Navigation** - Active section tracking with smooth scrolling
* 🎯 **SEO Optimized** - Proper meta tags and semantic HTML

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

### Core Technologies

* [![React][React.js]][React-url] - UI framework
* [![Vite][Vite]][Vite-url] - Build tool & dev server
* [![TailwindCSS][Tailwind]][Tailwind-url] - Styling (v4)
* [![React Router][ReactRouter]][ReactRouter-url] - Client-side routing

### UI & Components

* [![Radix UI][Radix]][Radix-url] - Headless UI primitives
* [![Lucide][Lucide]][Lucide-url] - Icon library
* Custom components with CVA (Class Variance Authority)

### Deployment

* [![GitHub Pages][GHPages]][GHPages-url] - Hosting
* [![Custom Domain][Domain]][Domain-url] - ervinward.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Key Features

### 🎨 Design & UX

- **Dark Mode First** - Professional dark theme loads by default
- **Active Navigation** - Visual indicators show current section
- **Smooth Animations** - Micro-interactions enhance user experience
- **Cosmic Theme** - Animated stars and meteors for visual interest

### 📊 Content Sections

1. **Hero** - Cloud & AI architect positioning with CTA
2. **About** - Professional background emphasizing production experience
3. **Skills** - Architectural domain categorization (no percentage bars)
4. **Projects** - Production-focused descriptions with live demos
5. **Contact** - Social links and professional networking

### ⚡ Performance Optimizations

- Lazy loading for images
- Code splitting with React Router
- CSS optimization with Tailwind v4
- Minimal bundle size (<300KB)

### 📱 Mobile Experience

- Hamburger menu with smooth transitions
- Touch-friendly button sizing
- Responsive typography
- No horizontal scroll
- Proper viewport handling

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js 18+ and npm
  ```sh
  node --version  # Should be v18 or higher
  npm --version
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ewardGPT/Portfolio_Website.git
   cd Portfolio_Website
   ```

2. Install dependencies
   ```sh
   npm install
   ```

3. Start development server
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

```sh
npm run dev      # Start dev server (with HMR)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm run deploy   # Deploy to GitHub Pages
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- DEPLOYMENT -->
## Deployment

### GitHub Pages Setup

1. Update `vite.config.js` with your base URL:
   ```javascript
   export default defineConfig({
     base: '/',  // Use '/' for custom domain
     // OR
     base: '/repo-name/',  // For GitHub Pages without custom domain
   })
   ```

2. Build and deploy:
   ```sh
   npm run build
   npm run deploy
   ```

3. Configure custom domain (optional):
   - Add `CNAME` file to `public/` directory with your domain
   - Update DNS records to point to GitHub Pages

### Custom Domain Configuration

Create `public/CNAME` file:
```
ervinward.com
```

DNS Settings (example):
```
A Record: 185.199.108.153
A Record: 185.199.109.153
A Record: 185.199.110.153
A Record: 185.199.111.153
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- PROJECT STRUCTURE -->
## Project Structure

```
ervin-portfolio/
├── public/
│   ├── CNAME              # Custom domain configuration
│   ├── projects/          # Project images
│   └── Ervin_Resume.pdf   # Resume file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation with active states
│   │   ├── ThemeToggle.jsx       # Dark/light mode toggle
│   │   ├── HeroSection.jsx       # Landing section
│   │   ├── AboutSection.jsx      # Professional background
│   │   ├── SkillsSection.jsx     # Architectural categories
│   │   ├── ProjectSection.jsx    # Featured projects
│   │   └── ContactSection.jsx    # Contact links
│   ├── pages/
│   │   ├── Home.jsx         # Main page layout
│   │   └── Resume.jsx       # Resume viewer page
│   ├── lib/
│   │   └── utils.js         # Utility functions (cn)
│   ├── App.jsx              # Router configuration
│   ├── index.css            # Global styles + Tailwind
│   └── main.jsx             # App entry point
├── index.html
├── vite.config.js           # Vite configuration
├── package.json
└── README.md
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CUSTOMIZATION -->
## Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/HeroSection.jsx`)
   ```javascript
   // Update name, tagline, and description
   ```

2. **Projects** (`src/components/ProjectSection.jsx`)
   ```javascript
   const projects = [
     {
       title: "Your Project",
       description: "Your description",
       tags: ["Tech", "Stack"],
       image: `${import.meta.env.BASE_URL}projects/image.png`,
       githubURL: "https://github.com/...",
     }
   ];
   ```

3. **Skills** (`src/components/SkillsSection.jsx`)
   - Update skill categories and technologies

4. **Contact Links** (`src/components/ContactSection.jsx`)
   - Update social media URLs and email

### Color Scheme

Edit `src/index.css` to change colors:
```css
:root {
  --primary: 250 47% 60%;        /* Purple accent */
  --background: 210 40% 98%;     /* Light background */
  --foreground: 222 47% 11%;     /* Light text */
}

:root.dark {
  --primary: 250 65% 65%;        /* Purple accent (dark) */
  --background: 222 47% 4%;      /* Dark background */
  --foreground: 213 31% 91%;     /* Dark text */
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ervin Ward - Cloud & AI Systems Architect

* 🌐 Portfolio: [ervinward.com](https://ervinward.com)
* 💼 LinkedIn: [linkedin.com/in/ervinward](https://linkedin.com/in/ervinward)
* 🐙 GitHub: [@ewardGPT](https://github.com/ewardGPT)
* 📧 Email: ervin.ward@example.com

Project Link: [https://github.com/ewardGPT/Portfolio_Website](https://github.com/ewardGPT/Portfolio_Website)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [React](https://react.dev/) - UI framework
* [Vite](https://vite.dev/) - Build tool
* [Tailwind CSS](https://tailwindcss.com/) - Styling
* [Lucide Icons](https://lucide.dev/) - Icon library
* [Radix UI](https://www.radix-ui.com/) - Headless components
* [GitHub Pages](https://pages.github.com/) - Free hosting

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<div align="center">
  Made with ❤️ by Ervin Ward
  <br />
  <sub>Designed for Cloud Engineers, Built for Impact</sub>
</div>

<!-- MARKDOWN LINKS & IMAGES -->
[deployed-shield]: https://img.shields.io/badge/Deployed-Live-success?style=for-the-badge
[deployed-url]: https://ervinward.com
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ervinward
[license-shield]: https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge
[license-url]: https://github.com/ewardGPT/Portfolio_Website/blob/master/LICENSE
[product-screenshot]: https://via.placeholder.com/800x400?text=Portfolio+Screenshot

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Vite]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vite.dev/
[Tailwind]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[ReactRouter]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white
[ReactRouter-url]: https://reactrouter.com/
[Radix]: https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white
[Radix-url]: https://www.radix-ui.com/
[Lucide]: https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-url]: https://lucide.dev/
[GHPages]: https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white
[GHPages-url]: https://pages.github.com/
[Domain]: https://img.shields.io/badge/Custom%20Domain-4285F4?style=for-the-badge&logo=google-domains&logoColor=white
[Domain-url]: https://ervinward.com
