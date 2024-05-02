const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": 'https://www.saucedemo.com/',
    "supportFile": 'cypress/support/index.ts',
    "supportFolder": 'cypress/support',
    "specPattern": "cypress/e2e/**/*.cy.ts",
    "retries": { "runMode": 1, "openMode": 1 },
    "chromeWebSecurity": false,
    "reporter": 'mochawesome',
    "reporterOptions": {
        "configFile": "reporter-config.json"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
