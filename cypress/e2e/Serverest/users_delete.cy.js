describe('Users - DELETE', () => {
    let userId;
    before(() => {
        cy.api({
            method: 'POST',
            url: '/usuarios',
            body: {
                nome: 'User Delete',
                email: `delete${Date.now()}@hotmmail.com`,
                password: '123456',
                administrador: 'true'
            }
        }).then((res) => {
            userId = res.body._id;
        });
    });
    it('deve deletar usuário', () => {

        cy.api({
            method: 'DELETE',
            url: `/usuarios/${userId}`
        }).as('response')
        cy.get('@response').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.message).to.include('excluído');
        });
    });
});