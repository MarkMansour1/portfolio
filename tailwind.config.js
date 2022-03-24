const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["neue-haas-unica", "sans-serif"],
			},
			colors: {
				gray: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#eeeeee",
					300: "#d6d6d6",
					400: "#a6a6a6",
					500: "#757575",
					600: "#575757",
					700: "#3f3f3f",
					800: "#2b2b2b",
					900: "#111111",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
