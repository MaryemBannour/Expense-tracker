/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",   // si tu utilises expo-router
    "./src/**/*.{js,jsx,ts,tsx}",   // si tu as un dossier src
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
theme: {
    extend: {
      colors: {
        // Main Colors
        primary: {
          DEFAULT: '#6C63FF',
          light: '#8B83FF',
          dark: '#5952D4',
        },
        secondary: {
          DEFAULT: '#A29BFE',
          light: '#C4BFFF',
          dark: '#7F73E8',
        },
        accent: '#FF6B6B',
        success: '#51CF66',
        warning: '#FFD93D',
        error: '#FF6B6B',
        info: '#4F98FD',
        
        // Neutrals
        background: '#F8F9FA',
        card: '#FFFFFF',
        border: '#E8E8E8',
        divider: '#F0F0F0',
        
        // Text
        text: {
          DEFAULT: '#2D3436',
          secondary: '#636E72',
          light: '#B2BEC3',
          white: '#FFFFFF',
        },
        
        // Categories
        category: {
          food: '#FF6B6B',
          transport: '#4ECDC4',
          entertainment: '#FFE66D',
          health: '#95E1D3',
          shopping: '#F38181',
          housing: '#AA96DA',
          bills: '#FDCB6E',
          other: '#FCBAD3',
        },
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        'xxl': '32px',
      },
      fontSize: {
        'xs': '10px',
        'sm': '12px',
        'md': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '40px',
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
    },
  },
  plugins: [],
};