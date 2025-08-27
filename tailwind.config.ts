// tailwind.config.ts

import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // A fonte sans-serif padrão que já configuramos
        sans: ['Nunito', 'sans-serif'],
        
        // Adicione a nova fonte serifada aqui
        hedvig: ['"Hedvig Letters Serif"', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config