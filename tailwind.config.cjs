/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./pages/js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
			nunito: ['Nunito', 'sans-serif'],
			opensans: ['Open Sans', 'sans-serif'],
			ropasans: ['Ropa Sans', 'sans-serif'],
		},
		extend: {
			boxShadow: {
				button: '0px 0px 50px rgba(64, 207, 113, 0.45)',
				input: '0px 0px 10px rgba(146, 146, 146, 0.15)',
			},
			backgroundImage: {
				moneycare: "url('/src/assets/moneycare-bg.png')",
			},
		},
	},
	plugins: [],
};
