import '@bahmutov/cy-api';

export const createUser = (payload) => {
  return cy.api({
    method: 'POST',
    url: '/usuarios',
    body: payload
  });
};

export const getUserById = (id) => {
  return cy.api({
    method: 'GET',
    url: `/usuarios/${id}`
  });
};

export const updateUser = (id, payload) => {
  return cy.api({
    method: 'PUT',
    url: `/usuarios/${id}`,
    body: payload
  });
};

export const deleteUser = (id) => {
  return cy.api({
    method: 'DELETE',
    url: `/usuarios/${id}`
  });
};