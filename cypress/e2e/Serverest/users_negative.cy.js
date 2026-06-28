describe('Users - Negative tests', () => {

  it('não deve criar usuário com email duplicado', () => {

    const email = `dup${Date.now()}@qa.com`;

    // 1. cria usuário primeiro (válido)
    cy.api({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'User 1',
        email,
        password: '123456',
        administrador: 'true'
      }
    }).then((res) => {
      expect(res.status).to.eq(201);
    });

    // 2. tenta criar novamente com mesmo email (erro esperado)
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
      expect(res.body.message).to.eq('Este email já está sendo usado');

    });

  });

});