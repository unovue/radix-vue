module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"./index.html",
			"./src/**/*.{js,ts,jsx,tsx, vue}",
			"./docs/.vitepress/**/*.js",
			"./docs/.vitepress/**/*.vue",
			"./docs/.vitepress/**/*.ts",
		],
		options: {
			safelist: ["html", "body"],
		},
	},
	important: true,
};
