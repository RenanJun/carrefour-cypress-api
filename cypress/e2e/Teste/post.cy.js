import '@bahmutov/cy-api'
import { getDefaultHeaders } from '../../support/utils/headers';
const SharedActions = require('../../support/utils/helpers');
const sharedActions = new SharedActions();
const api_key = Cypress.env('API_KEY');
const correlation_id = Cypress.env('CORRELATION_ID');

describe('Get user details', () => {
    let gerarToken

    before(() => {
        cy.gerarToken()
            .then(tkn => {
                gerarToken = tkn;
            })
    })
        it('Test GET request', () => {
            cy.api({
                video: false,
                method: 'POST',
                failOnStatusCode: false,
                body: body,
                url: `/ciclos`,
                headers: getDefaultHeaders(api_key, correlation_id)
            }).as('response')
            cy.get('@response').then(response => {
                expect(response.status).to.be.equal(201);
                sharedActions.validarTemValorNaPropriedade(response.body.data, 'codigoCiclo', 15);
                sharedActions.validarTemValorNaPropriedade(response.body.data, 'nomeCiclo', 'Ciclo 0001');
                sharedActions.validarTemValorNaPropriedade(response.body.data, 'descricaoCilo', 'Ciclo de avaliação 2626');
                sharedActions.validarTemValorNaPropriedade(response.body.data, 'dataInicioCiclo', '2022-03-14');
                sharedActions.validarTemValorNaPropriedade(response.body.data, 'codigoSituacao', 1);
                sharedActions.validarTemValorNaPropriedade(response.body.data, 'statusCicloAtivo', 'N');
            })
        })
})
