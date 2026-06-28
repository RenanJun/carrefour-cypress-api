import '@bahmutov/cy-api';

describe('GET /usuarios/{id}', () => {
    it('deve retornar usuário específico pelo id', () => {
        cy.api({
            method: 'POST',
            url: '/usuarios',
            body: {
                nome: 'User Test',
                email: `qa${Date.now()}@mail.com`,
                password: '123456',
                administrador: 'true'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            const userId = response.body._id;
            cy.api({
                method: 'GET',
                url: `/usuarios/${userId}`
            }).then((response) => {

                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('_id', userId);
                expect(response.body).to.have.property('email');
                expect(response.body).to.have.property('nome');
            });
        });
    });
});