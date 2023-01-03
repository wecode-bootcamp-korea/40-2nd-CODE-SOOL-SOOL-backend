const request = require('supertest');

const { createApp } = require('../app');
const AppData = require('../src/models/dataSource');

describe('Get all product list', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppData.initialize();
  });

  afterAll(async () => {
    await AppData.query(`TRUNCATE carts`);
    await AppData.destroy();
  });

  test('SUCCESS: Insert Data Into Cart', async () => {
    await request(app)
      .post('/products/cart')
      .send(
        {
          "kakao_id": 2605070115,
          "product_id" : 3,
          "quantity": 2
        }
      )
      .expect(200);
  });

  test('SUCCESS: Delete Product From Cart', async () => {
    await request(app)
      .patch('/products/cart')
      .send(
        {
            "kakao_id" : 2605070115,
            "product_id" : 1
        }
      )
      .expect(200);
  });

  test('FAILED: Wrong Request Data', async () => {
    await request(app)
      .post('/products/cart')
      .send(
        {
          "kakao_id": "Wrong Kakao ID",
          "product_id": 3,
          "quantity": 2
        }
      )
      .expect(500)
  })

});