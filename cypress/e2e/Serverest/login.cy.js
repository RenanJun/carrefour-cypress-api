import '@bahmutov/cy-api'
describe('Auth - Login ServeRest', () => {
  it('deve criar usuário e fazer login com sucesso', () => {

    const email = `qa${Date.now()}@hotmail.com`;
    cy.api({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'Auth Test',
        email: email,
        password: '123456',
        administrador: 'true'
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });
    cy.api({
      method: 'POST',
      url: '/login',
      body: {
        email: email,
        password: '123456'
      }
    }).as('response')
        cy.get('@response').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
    });
  });
});