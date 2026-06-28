import '@bahmutov/cy-api';

Cypress.Commands.add('createUser', (email) => {
  return cy.api({
    method: 'POST',
    url: '/usuarios',
    body: {
      nome: 'Auth Test',
      email: email,
      password: '123456',
      administrador: 'true'
    }
  }).then((response) => {
    expect(response.status).to.eq(201);
    return response;
  });
});