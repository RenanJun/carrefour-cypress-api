import '@bahmutov/cy-api'
describe('Users - UPDATE', () => {
  let userId;
  const email = `update${Date.now()}@hotmail.com`;
  before(() => {
    cy.api({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'User Update',
        email: email,
        password: '123456',
        administrador: 'true'
      }
    }).then((res) => {
      userId = res.body._id;
    });
  });
  it('deve atualizar usuário', () => {
    cy.api({
      method: 'PUT',
      url: `/usuarios/${userId}`,
      body: {
        nome: 'Updated User',
        email: `updated${Date.now()}@hotmail.com`,
        password: '123456',
        administrador: 'false'
      }
    }).as('response')
        cy.get('@response').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.include('alterado');
    });
  });
});