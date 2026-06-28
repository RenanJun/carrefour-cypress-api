// import '@bahmutov/cy-api'
// import Ajv from "ajv"
// import {getDefaultHeaders} from '../../support/utils/headers';
// const ajv = new Ajv({ allErros: true, verbose: true });
// const SharedActions = require('../../support/utils/helpers');;
// const sharedActions = new SharedActions();
// const api_key = Cypress.env('API_KEY');
// const correlation_id = Cypress.env('CORRELATION_ID');

// describe('Get user details', () => {

//     // beforeEach(() => {
//     //     cy.gerarToken()
//     //         .then(tkn => {
//     //             Cypress.env('access_token', tkn)
//     //         })
//     // })
//     it('Customers - GET - retorno 200', () => {
//         cy.api({
//             video: false,
//             method: 'GET',
//             failOnStatusCode: false,
//             url: `/customers`,
//             // headers: getDefaultHeaders(api_key, correlation_id)
//         }).as('response')
//         cy.get('@response').then(res => {
//             cy.log('response', res);
//             expect(res.status).to.be.equal(200);
//             sharedActions.validarStatusCode(res, 200);
//         });
//     });

//      it('Customers - POST - retorno 201', () => {
//         const body = {
//             id: 1,
//             nomePessoa: "Renan Jun Furuya",
//             idade: 28,
//             nacionalidade: "brasileira"
//         }
//         cy.api({
//             video: false,
//             method: 'POST',
//             failOnStatusCode: false,
//             url: `/customers`,
//             body: body,
//             // headers: getDefaultHeaders(api_key, correlation_id)
//         }).as('response')
//         cy.get('@response').then(res => {
//             cy.log('response', res);
//             expect(res.status).to.be.equal(201);
//             sharedActions.validarStatusCode(res, 201);
//         });
//     });
    
//     it('Customers - PUT - retorno 200', () => {
//         const body = {
//             nacionalidade: "japonesa"
//         }
//         cy.api({
//             video: false,
//             method: 'PUT',
//             failOnStatusCode: false,
//             url: `/customers`,
//             body: body,
//             // headers: getDefaultHeaders(api_key, correlation_id)
//         }).as('response')
//         cy.get('@response').then(res => {
//             cy.log('response', res);
//             expect(res.status).to.be.equal(200);
//             sharedActions.validarStatusCode(res, 200);
//         });
//     });

//     it('Customers - DELETE - retorno 200', () => {
//         cy.api({
//             video: false,
//             method: 'DELETE',
//             failOnStatusCode: false,
//             url: `/customers`
//             // headers: getDefaultHeaders(api_key, correlation_id)
//         }).as('response')
//         cy.get('@response').then(res => {
//             cy.log('response', res);
//             expect(res.status).to.be.equal(200);
//             sharedActions.validarStatusCode(res, 200);
//         });
//     });
// });
