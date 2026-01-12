# Contributing to Ervin Ward's Portfolio

First off, thank you for considering contributing to this portfolio project! 🎉

## How Can I Contribute?

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Your browser and OS version

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Use a clear, descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful

### Pull Requests

1. **Fork the repo** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Follow the existing code style
   - Update documentation if needed
   - Test your changes locally

3. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   
   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvements
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

4. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Portfolio_Website.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Code Style Guidelines

- **React Components**: Use functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Styling**: Use Tailwind CSS classes, avoid inline styles
- **Accessibility**: Include proper ARIA labels and semantic HTML
- **Performance**: Lazy load images, minimize bundle size

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utility functions
└── index.css      # Global styles
```

## Questions?

Feel free to open an issue for any questions or reach out on [LinkedIn](https://linkedin.com/in/ervinwardiii).

---

**Thank you for contributing!** 🚀
