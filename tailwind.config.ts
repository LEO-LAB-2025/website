import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			basewhite: 'var(--basewhite)',
  			'blueblue-100': 'var(--blueblue-100)',
  			'blueblue-200': 'var(--blueblue-200)',
  			'blueblue-300': 'var(--blueblue-300)',
  			'blueblue-400': 'var(--blueblue-400)',
  			'blueblue-50': 'var(--blueblue-50)',
  			'blueblue-500': 'var(--blueblue-500)',
  			'blueblue-600': 'var(--blueblue-600)',
  			'blueblue-700': 'var(--blueblue-700)',
  			'blueblue-800': 'var(--blueblue-800)',
  			'blueblue-900': 'var(--blueblue-900)',
  			'graygray-50': 'var(--graygray-50)',
  			'graygray-600': 'var(--graygray-600)',
  			'graygray-700': 'var(--graygray-700)',
  			'input-field-background': 'var(--input-field-background)',
  			leo: 'var(--leo)',
  			'variable-collection-color': 'var(--variable-collection-color)',
  			'variable-collection-color-2': 'var(--variable-collection-color-2)',
  			'variable-collection-main': 'var(--variable-collection-main)',
  			'variable-collection-primary': 'var(--variable-collection-primary)',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			'button-text-btn-lg': 'var(--button-text-btn-lg-font-family)',
  			'headings-headings-h6': 'var(--headings-headings-h6-font-family)',
  			sans: [
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji"',
  				'Segoe UI Emoji"',
  				'Segoe UI Symbol"',
  				'Noto Color Emoji"'
  			]
  		},
  		boxShadow: {
  			'shadow-nav-shadown': 'var(--shadow-nav-shadown)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
} satisfies Config;
