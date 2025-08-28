module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/context/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // vibrant blue
        secondary: '#f59e42', // orange
        background: '#f3f4f6', // off-white
        accent: '#10b981', // green
        darkBg: '#0a192f', // deep navy
        darkText: '#e0eafc', // light text
        neon: '#00fff7', // neon cyan
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
