const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": 'https://www.saucedemo.com/',
    "supportFile": "cypress/support/commands.js",
    "specPattern": "cypress/e2e/**/*.cy.ts",
    "retries": { "runMode": 1, "openMode": 1 },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
