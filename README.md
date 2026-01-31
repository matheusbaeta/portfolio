# PC-98 Retro Portfolio

A retro-styled portfolio inspired by NEC PC-9800 series computers, built with React, Vite, and TypeScript.

## Features
- **Authentic PC-98 Aesthetics**: 16-color palette (optimized), VT323 typography, and retro GUI elements.
- **Component-Based**: Reusable `Window`, `ButtonRetro`, and `NavbarRetro` components.
- **Responsive Design**: Works on modern screens while maintaining the retro feel.
- **Modern Tech Stack**: React 18, Vite, TypeScript, React Router.

## Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd portfolio_frontend
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## Customization

### Adding New Pages
1.  Create a new file in `src/pages/`.
2.  Import `Window` from `src/components/Window/Window`.
3.  Add the route in `src/App.tsx`.
4.  Add a menu item in `src/components/NavbarRetro/NavbarRetro.tsx`.

### Changing Theme
Edit `src/styles/variables.css` to change the 16-color palette or font settings.

## License
MIT
