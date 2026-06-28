describe('Users - Negative tests', () => {

  it('deve falhar login com credenciais inválidas', () => {
    cy.api({
      method: 'POST',
      url: '/login',
      failOnStatusCode: false,
      body: {
        email: 'invalid@test.com',
        password: 'wrong'
      }
    }).then((res) => {
      expect(res.status).to.eq(401);
    });
  });

  it('não deve criar usuário com email duplicado', () => {
    const email = 'duplicado@qa.com';

    cy.api({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'User 1',
        email,
        password: '123456',
        administrador: 'true'
      }
    });

    cy.api({
      method: 'POST',
      url: '/usuarios',
      failOnStatusCode: false,
      body: {
        nome: 'User 2',
        email,
        password: '123456',
        administrador: 'true'
      }
    }).then((res) => {
      expect(res.status).to.eq(400);
    });
  });

});