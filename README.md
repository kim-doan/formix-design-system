# StoryBook
https://kim-doan.github.io/formix-design-system

# Formix Design System

A modern React component library built with TypeScript and vanilla-extract.

## React 19 Compatible! ✨

This library is fully compatible with React 16.8+, React 18, and React 19.

## Installation

```bash
npm install @wdyj-lab/formix-design-system
```

## Usage

```tsx
import { Button } from '@wdyj-lab/formix-design-system';

function App() {
  return (
    <Button variant="primary" size="medium">
      Click me
    </Button>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `disabled`: boolean (default: false)
- `children`: React.ReactNode
- ...all standard HTML button attributes

#### Examples

```tsx
// Primary button
<Button variant="primary">Primary</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Danger button
<Button variant="danger">Delete</Button>

// Different sizes
<Button size="small">Small</Button>
<Button size="large">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Storybook
npm run storybook

# Build the library
npm run build

# Run linting
npm run lint

# Run type checking
npm run typecheck
```

## Tech Stack

- React
- TypeScript
- vanilla-extract (CSS-in-JS)
- Rollup (bundler)
- Storybook (component documentation)

## License

MIT
