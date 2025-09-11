const config = {
  plugins: [
    "@tailwindcss/postcss",
    require('tailwind-scrollbar-hide'),
  ],
};

export default config;

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: {
    tailwindcss,
    autoprefixer,
  },
}
