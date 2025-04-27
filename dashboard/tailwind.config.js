/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.js", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8", // Example primary color
        secondary: "#ff5722", // Example secondary color
        accent: '#E16448',
		    background: '#ffffff',
        bgsecondary: "#F8F8F8", 
        border: "#E4E4E7", // Custom border color
        text: "#09090B",
        muted: "#71717A",
      },
    },
  },
  plugins: [],
};
