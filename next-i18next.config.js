const path = require("path");
module.exports = {
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
};
