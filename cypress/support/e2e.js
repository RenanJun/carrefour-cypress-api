// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import '@shelex/cypress-allure-plugin';
afterEach(function () {
  const testTitle = this.currentTest.title;
  const testState = this.currentTest.state; // 'passed' ou 'failed'
  
  // Remove caracteres inválidos para nomes de arquivo
  const sanitizedTitle = testTitle.replace(/[/\\?%*:|"<>]/g, '-'); 
  const fileName = `${sanitizedTitle} -- ${testState}`;

  // Captura print do viewport
  cy.screenshot(fileName, { capture: 'viewport' }).then(() => {
    const screenshotPath = `cypress/screenshots/${Cypress.spec.name}/${fileName}.png`;
    cy.allure().attachment(`Screenshot - ${testState}`, screenshotPath, 'image/png');
  });
});
import 'cypress-plugin-api';
require('@shelex/cypress-allure-plugin');

// Alternatively you can use CommonJS syntax:
// require('./commands')