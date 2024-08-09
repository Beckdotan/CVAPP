/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1F2937", // Dark Slate Gray
        skyBlue: "#60A5FA",        // Sky Blue
        lightSky: "#93C5FD",       // Light Sky Blue
        cyanBlue: "#38BDF8",       // Cyan Blue
        lightGray: "#F3F4F6",      // Very Light Gray
        coolGray: "#4B5563",       // Cool Gray
        brightBlue: "#3B82F6",     // Bright Blue
      },
    },
  },
  plugins: [],
}

