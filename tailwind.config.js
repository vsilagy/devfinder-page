/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['Space Mono', 'ui-monospace', 'monospace'],
			},
			colors: {
				blueish: 'hsl(212, 100%, 50%)',
				white: 'hsl(0, 0%, 100%)',
				redish: 'hsl(0, 91%, 62%)',
				grayishBlue: 'hsl(217, 20%, 51%)',
				desaturatedBlue: 'hsl(217, 35%, 45%)',
				darkBlue: 'hsl(217, 21%, 21%)',
				saturatedWhite: 'hsl(227, 100%, 98%)',
				veryDarkBlue: 'hsl(220, 40%, 13%)',
				darkSaturatedBlue: 'hsl(222, 41%, 20%)',
			},
		},
	},
	plugins: [],
};
