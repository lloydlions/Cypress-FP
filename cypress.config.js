const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    reqres: "https://reqres.in",
    demopage : "https://demo.aspnetawesome.com/"
  },
  e2e: {
    specPattern: "cypress/e2e/*/*.spec.js",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
