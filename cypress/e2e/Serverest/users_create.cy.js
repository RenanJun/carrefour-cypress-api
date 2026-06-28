import '@bahmutov/cy-api'
describe('Users - CREATE', () => {
    it('deve criar usuário com sucesso', () => {
        cy.api({
            method: 'POST',
            url: '/usuarios',
            body: {
                nome: 'User Create',
                email: `create${Date.now()}@hotmail.com`,
                password: '123456',
                administrador: 'true'
            }
        }).as('response')
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.message).to.include('Cadastro realizado');
        });

    });
});