//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const request = require('supertest');

const app = require('../../server');
const db = require('../../db');

//
// ─── INITIAL CONFIG ─────────────────────────────────────────────────────────────
//

const userLogin = {
  email: 'userlogin@test.com',
  password: 'userlogin'
}

const userSignup = {
  email: 'usersignup@test.com',
  password: 'usersignup'
}

const deleteAuthUsers = async () => {
  await db.query('DELETE FROM users WHERE email=$1 OR email=$2', [userLogin.email, userSignup.email])
}

const createUser = async () => {
  await request(app)
    .post('/signup')
    .send({
      email: userLogin.email,
      password: userLogin.password
    })
}

//
// ─── AUTHENTICATION TESTS ───────────────────────────────────────────────────────
//

describe('Authentication Tests', () => {

  beforeEach(async () => {
    await deleteAuthUsers();
    await createUser();
  });

  test('Should signup new user', async () => {
    await request(app)
      .post('/signup')
      .send({
        email: userSignup.email,
        password: userSignup.password
      })
      .expect(201)

    await db.query('SELECT * FROM users WHERE email=$1', [userSignup.email], (err, result) => {
      const user = result.rows[0]

      // Assert that the database was changed correctly
      expect(user).not.toBeNull();

      // Assert that the password was hashed
      expect(user.password).not.toBe(userSignup.password)
    });
  });
  
  test('Should login existing user', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: userLogin.email,
        password: userLogin.password
      })
      .expect(200)

    await db.query('SELECT * FROM users WHERE email=$1', [userLogin.email], (err, result) => {
      const user = result.rows[0];

      // Assert that the token was delivered
      expect(response.body.token).not.toBeNull();
    });
  });

})
