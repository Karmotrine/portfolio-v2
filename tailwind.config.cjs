/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderWidth: {
				DEFAULT: '1px',
			},
			backgroundImage: {
				'pattern': "url('/Crosshatch.webp')",
			}
		},
	},
	plugins: [],
}
