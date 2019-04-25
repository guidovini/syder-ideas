//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

const request = require('supertest');

const app = require('../../server');
const db = require('../../db');

//
// ─── INITIAL CONFIG ─────────────────────────────────────────────────────────────
//

const userFeaturesOne = {
  email: 'userfeaturesone@test.com',
  password: 'userfeaturesone'
}

const ideaFeaturesOne = {
  id: 'ideaFeatures1',
  category: 'ideaFeatures1 category',
  name: 'ideaFeatures1 name'
}

const featureOne = {
  id: 'feature1',
  text: 'featureOne text',
  idea_id: ideaFeaturesOne.id
}

const featureTwo = {
  id: 'feature2',
  text: 'featureTwo text',
  idea_id: ideaFeaturesOne.id
}

const deleteFeatures = async () => {
  await db.query('DELETE FROM features', [])
}

const deleteIdeas = async () => {
  await db.query('DELETE FROM ideas WHERE id=$1', [ideaFeaturesOne.id])
}

const deleteUsers = async () => {
  await db.query('DELETE FROM users WHERE email=$1', [userFeaturesOne.email])
}

// const createFeature = async () => {

// }

//
// ─── FEATURES TESTS ─────────────────────────────────────────────────────────────
//

describe('Features Tests', () => {

  beforeEach(async () => {
    await deleteFeatures();
    await deleteIdeas();
    await deleteUsers();
  })



  test('Should create a new feature', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email:      userFeaturesOne.email,
        password:   userFeaturesOne.password
      })

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id:       ideaFeaturesOne.id,
        category: ideaFeaturesOne.category,
        name:     ideaFeaturesOne.name
      })

    await request(app)
      .post('/api/features/create')
      .set('authorization', response.body.token)
      .send({
        id:       featureOne.id,
        text:     featureOne.text,
        idea_id:  featureOne.idea_id
      })
      .expect(201)
  });



  test('Should get features', async () => {
    await request(app)
      .get('/api/features/')
      .send()
      .expect(200)
  });



  test('Should get features by user id', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email:      userFeaturesOne.email,
        password:   userFeaturesOne.password
      })

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id:       ideaFeaturesOne.id,
        category: ideaFeaturesOne.category,
        name:     ideaFeaturesOne.name
      })

    await request(app)
      .get('/api/features/user')
      .set('authorization', response.body.token)
      .send()
      .expect(200)
  });



  test('Should update feature', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email:      userFeaturesOne.email,
        password:   userFeaturesOne.password
      })

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id:       ideaFeaturesOne.id,
        category: ideaFeaturesOne.category,
        name:     ideaFeaturesOne.name
      })

    await request(app)
      .post('/api/features/create')
      .set('authorization', response.body.token)
      .send({
        id:       featureOne.id,
        text:     featureOne.text,
        idea_id:  featureOne.idea_id
      })
      .expect(201)
  
    await request(app)
      .put('/api/features/update')
      .set('authorization', response.body.token)
      .send({
        id:     featureOne.id,
        text:   'new text'
      })
      .expect(200)

    db.query('SELECT * FROM features WHERE id=$1', [featureOne.id], (err, result) => {
      const feature = result.rows[0];
      expect(feature.text).toBe('new text')
      expect(feature.text).not.toBe(featureOne.text)
    });
  });



  test('Should delete feature', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email:      userFeaturesOne.email,
        password:   userFeaturesOne.password
      })

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id:       ideaFeaturesOne.id,
        category: ideaFeaturesOne.category,
        name:     ideaFeaturesOne.name
      })

    await request(app)
      .post('/api/features/create')
      .set('authorization', response.body.token)
      .send({
        id:       featureOne.id,
        text:     featureOne.text,
        idea_id:  featureOne.idea_id
      })

    await request(app)
      .delete('/api/features/delete')
      .set('authorization', response.body.token)
      .send({
        id: featureOne.id
      })
      .expect(200)

    db.query('SELECT * FROM features WHERE id=$1', [featureOne.id], (err, result) => {
      const feature = result.rows[0];
      expect(feature).toBeUndefined();
    });
  });



  test('Should delete features after idea delete', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        email:      userFeaturesOne.email,
        password:   userFeaturesOne.password
      })

    await request(app)
      .post('/api/ideas/create')
      .set('authorization', response.body.token)
      .send({
        id:       ideaFeaturesOne.id,
        category: ideaFeaturesOne.category,
        name:     ideaFeaturesOne.name
      })

    await request(app)
      .post('/api/features/create')
      .set('authorization', response.body.token)
      .send({
        id:       featureOne.id,
        text:     featureOne.text,
        idea_id:  featureOne.idea_id
      })

    await request(app)
      .post('/api/features/create')
      .set('authorization', response.body.token)
      .send({
        id:       featureTwo.id,
        text:     featureTwo.text,
        idea_id:  featureTwo.idea_id
      })

    await request(app)
      .delete('/api/features/clear')
      .set('authorization', response.body.token)
      .send({
        id: ideaFeaturesOne.id
      })
      .expect(200)

    db.query('SELECT * FROM features', [], (err, result) => {
      const features = result.rows;
      expect(features.length).not.toBe(2);
    });
  });


});