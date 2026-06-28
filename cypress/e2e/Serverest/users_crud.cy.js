import { createUser } from '../../support/utils/api/users.api';

describe('Users - CRUD completo', () => {

  it('CREATE → GET → UPDATE → DELETE user', () => {

    const email = `qa${Date.now()}@mail.com`;

    // 1. CREATE
    createUser({
      nome: 'QA Test',
      email,
      password: '123456',
      administrador: 'true'
    }).then((createRes) => {

      expect(createRes.status).to.eq(201);

      const userId = createRes.body._id;

      // 2. GET by ID
      cy.api({
        method: 'GET',
        url: `/usuarios/${userId}`
      }).then((getRes) => {

        expect(getRes.status).to.eq(200);
        expect(getRes.body._id).to.eq(userId);

      });

      // 3. UPDATE
      cy.api({
        method: 'PUT',
        url: `/usuarios/${userId}`,
        body: {
          nome: 'Updated QA',
          email: `updated${Date.now()}@mail.com`,
          password: '123456',
          administrador: 'false'
        }
      }).then((updateRes) => {

        expect(updateRes.status).to.eq(200);

      });

      // 4. DELETE
      cy.api({
        method: 'DELETE',
        url: `/usuarios/${userId}`
      }).then((deleteRes) => {

        expect(deleteRes.status).to.eq(200);

      });

    });

  });

});