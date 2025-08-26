# TypeScript Todo Application

A modern todo application built with TypeScript, React, and tested with Vitest.

## Tech Stack

- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **Vite** - Build tool and development server
- **Vitest** - Testing framework with browser testing
- **Playwright** - Browser automation for testing
- **pnpm** - Fast, disk space efficient package manager

## Prerequisites

- Node.js (version 16 or higher)
- pnpm (version 10.10.0 or compatible)

## Setup

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd typescript-todo
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

## Development

Currently, the project is set up for testing but may need additional configuration for development server. The main application component is located in `src/components/App.tsx`.

### Project Structure

```
├── src/
│   ├── components/
│   │   └── App.tsx          # Main React component
│   └── test/
│       ├── App.test.tsx     # Component tests
│       └── setup.ts         # Test setup configuration
├── index.tsx                # Application entry point
├── package.json             # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vitest.config.ts        # Vitest testing configuration
└── pnpm-lock.yaml          # Dependency lock file
```

### Adding Development Server

To run the application in development mode, you may need to add Vite dev server configuration. Consider adding these scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

And create a `vite.config.ts` file:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## Testing

The project uses Vitest for testing with browser-based testing via Playwright.

### Available Test Commands

- **Run tests in watch mode**:
  ```bash
  pnpm test
  ```

- **Run tests once**:
  ```bash
  pnpm test:run
  ```

- **Run tests with coverage**:
  ```bash
  pnpm test:coverage
  ```

### Test Configuration

- Tests are configured to run in a real browser (Chromium) using Playwright
- Test files are located in `src/test/`
- Test setup is handled in `src/test/setup.ts`

### Writing Tests

Tests use Vitest with React testing utilities. Example test structure:

```typescript
import { render } from '@testing-library/react'
import App from '../components/App'

test('renders app component', () => {
  render(<App />)
  // Add your test assertions here
})
```

## Building

To build the application for production:

```bash
pnpm build
```

This will create optimized production files in the `dist/` directory.

## TypeScript Configuration

The project uses strict TypeScript settings including:
- ESNext module system
- React JSX transformation
- Strict type checking
- Source maps for debugging
- Declaration files generation

## Package Manager

This project uses pnpm as specified in the `packageManager` field. Make sure to use pnpm commands:

- ✅ `pnpm install`
- ✅ `pnpm test`
- ❌ `npm install` or `yarn install`

## Contributing

1. Install dependencies: `pnpm install`
2. Make your changes
3. Run tests: `pnpm test:run`
4. Ensure TypeScript compiles: `pnpm build` (if build script is added)
5. Submit your changes

## License

ISC License
