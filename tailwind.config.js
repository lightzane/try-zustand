import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  // prettier-ignore
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        enter: 'enter .5s ease-in-out forwards',
        'enter-delay': 'enter .5s ease-in-out .8s forwards',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        enter: {
          from: {
            opacity: 0,
            filter: 'blur(12px)',
            transform: 'translateY(1.25rem)',
          },
          to: {
            opacity: 1,
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },

  // prettier-ignore
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
