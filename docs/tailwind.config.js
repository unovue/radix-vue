module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === "production",
		content: [
			"./index.html",
			"./**/*.{js,ts,jsx,tsx,vue}",
			"./.vitepress/**/*.js",
			"./.vitepress/**/*.vue",
			"..vitepress/**/*.ts",
      './content/**/*.md',
		],
		options: {
			safelist: ["html", "body"],
		},
	},
	important: true,
};
