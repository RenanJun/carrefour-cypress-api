import '@bahmutov/cy-api'
describe('Users - READ', () => {
    it('GET /usuarios deve retornar lista', () => {
        cy.api({
            method: 'GET',
            url: '/usuarios'
        }).as('response')
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.usuarios).to.be.an('array');
        });

    });
});