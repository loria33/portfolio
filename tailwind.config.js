/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#05040a',
        surface: '#0b0b15',
        accent: '#4f46e5',
        accentSoft: '#6366f1',
        accentMuted: '#a5b4fc',
        borderSubtle: '#1f2937',
        textPrimary: '#f9fafb',
        textMuted: '#9ca3af',
      },
      boxShadow: {
        'soft-card': '0 18px 45px rgba(15,23,42,0.5)',
      },
    },
  },
  plugins: [],
}

