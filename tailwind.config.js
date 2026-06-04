/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: 'var(--navy)',
          deep: 'var(--navy-deep)',
          soft: 'var(--navy-soft)',
        },
        gold: {
          DEFAULT: 'var(--gold)',
          soft: 'var(--gold-soft)',
          deep: 'var(--gold-deep)',
        },
        paper: {
          DEFAULT: 'var(--paper)',
          warm: 'var(--paper-warm)',
        },
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
        },
        steel: {
          DEFAULT: 'var(--steel)',
          deep: 'var(--steel-deep)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sharp: 'var(--r-sharp)',
        sm: 'var(--r-sm)',
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
    },
  },
};
