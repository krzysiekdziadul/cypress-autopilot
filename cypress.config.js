const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('test:after:run', (test, runnable) => {
        // dodatkowe hooki jeśli potrzeba
      })
    },
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
      mochaFile: 'cypress/results/results.xml',
      toConsole: true,
    },
  },
})