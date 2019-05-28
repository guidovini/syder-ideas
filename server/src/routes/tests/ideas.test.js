//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const request = require('supertest');

const app = require('../../server');
const db = require('../../db');

//
// ─── INITIAL CONFIG ─────────────────────────────────────────────────────────────
//

const userIdeasOne = {
  email: 'userideasone@test.com',
  password: 'userideasone'
}

const userIdeasTwo = {
  email: 'userideastwo@test.com',
  password: 'userideastwo'
}

const ideaOne = {
  id: 'idea1',
  category: 'ideaOne category',
  name: 'ideaOne name',
  description: 'ideaOne description', 
  target: 'ideaOne target'
}

const ideaTwo = {
  id: 'idea2',
  category: 'ideaTwo category',
  name: 'ideaTwo name',
  description: 'ideaTwo description',
  target: 'ideaTwo target',
  favorite: false,
  archive: true,
}

const deleteAllIdeas = async () => {
  await db.query('DELETE FROM ideas WHERE id=$1 OR id=$2', [ideaOne.id, ideaTwo.id])
}

const deleteIdeasUsers = async () => {
  await db.query('DELETE FROM users WHERE email=$1 OR email=$2', [userIdeasOne.email, userIdeasTwo.email])
}

// const createUserAndIdeaTwo = async () => {
//   await request(app)
//     .post('/signup')
//     .send({
//       email: 'userideastwo@test.com',
//       password: 'userideastwo'
//     })

//   await request(app)
//     .post
// }

//
// ─── IDEAS TESTS ────────────────────────────────────────────────────────────────
//

describe('Ideas Tests', () => {



  beforeEach(async () => {
    await deleteAllIdeas();
    await deleteIdeasUsers();
    // await createUser();
  })



  test('Should create idea', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: userIdeasOne.email,
        password: userIdeasOne.password
      });

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id: ideaOne.id,
        category: ideaOne.category,
        name: ideaOne.name
      })
      .expect(201);
  });



  test('Should fetch ideas', async () => {
    await request(app)
      .get('/api/ideas/')
      .send()
      .expect(200);
  });



  test('Should fetch idea by user id', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: userIdeasOne.email,
        password: userIdeasOne.password
      });

    await request(app)
      .get('/api/ideas/user')
      .set('authorization', response.body.token)
      .send()
      .expect(200);
  });



  test('Should update idea', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: userIdeasOne.email,
        password: userIdeasOne.password
      });

    await request(app)
      .put('/api/ideas/update')
      .set('authorization', response.body.token)
      .send({
        id: userIdeasOne.id,
        name: userIdeasOne.name,
        description: userIdeasOne.description,
        target: userIdeasOne.target
      })
      .expect(200);
  });



  test('Should delete idea', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: userIdeasTwo.email,
        password: userIdeasTwo.password
      });

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id: ideaTwo.id,
        category: ideaTwo.category,
        name: ideaTwo.name
      });

    await request(app)
      .delete('/api/ideas/delete')
      .set('authorization', response.body.token)
      .send({
        id: ideaTwo.id
      })
      .expect(200);

    await db.query('SELECT * FROM ideas WHERE id=$1', [ideaTwo.id], (err, result) => {
      const idea = result.rows[0];
      expect(idea).toBeUndefined();
    });
  });



  test('Should favorite idea', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: userIdeasTwo.email,
        password: userIdeasTwo.password
      });

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id: ideaTwo.id,
        category: ideaTwo.category,
        name: ideaTwo.name,
      });

    await request(app)
      .put('/api/ideas/favorite')
      .set('authorization', response.body.token)
      .send({
        id: ideaTwo.id
      })
      .expect(200);

    await db.query('SELECT favorite FROM ideas WHERE id=$1', [ideaTwo.id], (err, result) => {
      const idea = result.rows[0];
      expect(idea.favorite).toBe(true);
    });
  });



  test('Should archive idea', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email: userIdeasTwo.email,
        password: userIdeasTwo.password
      });

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id: ideaTwo.id,
        category: ideaTwo.category,
        name: ideaTwo.name,
      });

    await request(app)
      .put('/api/ideas/archive')
      .set('authorization', response.body.token)
      .send({
        id: ideaTwo.id
      })
      .expect(200);

    await db.query('SELECT archive FROM ideas WHERE id=$1', [ideaTwo.id], (err, result) => {
      const idea = result.rows[0];
      expect(idea.archive).toBe(true);
    });
  });

});