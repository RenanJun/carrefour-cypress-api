import '@bahmutov/cy-api'
import { getDefaultHeaders } from '../../support/utils/headers';


describe('Get user details', () => {
    // let gerarToken

    // before(() => {
    //     cy.gerarToken()
    //         .then(tkn => {
    //             gerarToken = tkn;
    //         })
    // })
        it('Test GET request', () => {
            cy.api({
                video: false,
                method: 'GET',
                failOnStatusCode: false,
                url: `https://swapi.dev/api/`,
                headers: { 
                    "Content-Type": "application/json"
                    // 'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                }
            }).as('response')
            cy.get('@response').then(response => {
                expect(response.status).to.be.equal(200);
                // expect(response.body.name).to.be.equal("Luke Skywalker");
            })
        })
})
