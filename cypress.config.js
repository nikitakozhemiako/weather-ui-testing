const { defineConfig } = require("cypress");
require('dotenv/config')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: false,
  },
});
