const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
require('dotenv').config();
const fs = require('fs-extra'); // Para anexar screenshots no Allure

const lambda = process.env.LAMBDA;
const ambiente = process.env.AMBIENTE;

// Função para pegar variáveis de ambiente de acordo com o ambiente selecionado
const getEnvVar = (key) => process.env[`${key}_${ambiente}`];

module.exports = defineConfig({
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 1,

  reporter: 'junit',
  reporterOptions: {
    delete: "rm results* || true",
    combine: 'jrm tests/combined-report.xml "tests/*.xml"',
    mochaFile: "reports/junit-report[hash].xml",
    toConsole: true,
    overwrite: false,
    html: false,
    json: true,
    defaultCommandTimeout: 14000
  },

  projectId: 'n4qsv3',

  env: {
    AMBIENTE: ambiente,
    CLIENT_ID: getEnvVar('CLIENT_ID'),
    CLIENT_SECRET: getEnvVar('CLIENT_SECRET'),
    CLIENT_ID_LAMBDA: getEnvVar('CLIENT_ID_LAMBDA'),
    CLIENT_SECRET_LAMBDA: getEnvVar('CLIENT_SECRET_LAMBDA'),
    API_KEY: getEnvVar('API_KEY'),
    CORRELATION_ID: getEnvVar('CORRELATION_ID'),
    URL_LAMBDA: `https://${lambda}.execute-api.us-east-1.amazonaws.com/${ambiente.toLowerCase()}`,

    allure: true,
    allureResultsPath: "allure-results",
    tmsPrefix: "https://url-to-bug-tracking-system/task-",
    issuePrefix: "https://url-to-tms/tests/caseId-",
    allureReuseAfterSpec: true,
    snapshotOnly: true,

    http_proxy: "",
    https_proxy: ""
  },

  "cypress-cucumber-preprocessor": {
    step_definitions: "cypress/support/steps"
  },

  e2e: {
    defaultCommandTimeout: 14000,
    baseUrl: 'https://serverest.dev',
    screenshotOnRunFailure: true,
    video: false,

    setupNodeEvents(on, config) {
      // ✅ Integração com Allure
      allureWriter(on, config);

      // ----------------------------
      // Captura screenshot de todos os testes (pass/fail)
      // ----------------------------
      on('after:spec', (spec, results) => {
        if (results && results.tests) {
          results.tests.forEach(test => {
            const state = test.state; // 'passed' ou 'failed'
            const sanitizedTitle = test.title.join(' -- ').replace(/[/\\?%*:|"<>]/g, '-');
            const screenshotPath = `cypress/screenshots/${spec.name}/${sanitizedTitle} -- ${state}.png`;

            if (fs.existsSync(screenshotPath)) {
              const image = fs.readFileSync(screenshotPath);
              // Adiciona ao Allure
              config.env.allureResultsPath && allureWriter.addAttachment(`Screenshot - ${state}`, image, 'image/png');
            }
          });
        }
      });

      return config;
    }
  },

  chromeWebSecurity: false,

  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
    },
  }
});