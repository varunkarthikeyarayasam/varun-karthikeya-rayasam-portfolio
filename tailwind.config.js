/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        subtle: token('subtle'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        'line-strong': token('line-strong'),
        accent: token('accent'),
        'accent-hover': token('accent-hover'),
        'accent-soft': token('accent-soft'),
        peach: token('peach'),
        'peach-soft': token('peach-soft'),
        'peach-deep': token('peach-deep'),
        violet: token('violet'),
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        mono: ['Consolas', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
