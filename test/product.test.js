const request = require('supertest');

const { createApp } = require('../app');
const AppData = require('../src/models/dataSource');

describe('Get all product list', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppData.initialize();
  });

  test('SUCCESS: Get Products List', async () => {
    await request(app)
      .get('/products')
      .expect(200);
  });
  
  test('FAILED: Wrong Path', async()=> {
    await request(app)
      .get('/product')
      .expect(404)
  })

  test('SUCCESS: Get Sorted List by Type', async () => {
    await request(app)
      .get('/products/listing?type=%ED%83%81%EC%A3%BC&alcohol=high&alcohol=low')
      .expect(
        [
          {
              "name": "도리도리",
              "price": "45000.00",
              "capacity": "250ml",
              "image_url": "https://cdn.discordapp.com/attachments/477456560205987868/1057475822354698270/PhotoRoom-20221228_103713.png",
              "description": "#깔끔한 목넘김",
              "expiration_date": "2024-02-01T03:30:00.000Z",
              "alcohol": "36.0",
              "product_type_id": 1,
              "sparkling_volume_id": 2
          },
          {
              "name": "숙성 레몬체리 ",
              "price": "32000.00",
              "capacity": "230ml",
              "image_url": "https://cdn.discordapp.com/attachments/477456560205987868/1057475823587840050/PhotoRoom-20221228_104024.png",
              "description": "#맛 밸런스 최강",
              "expiration_date": "2024-01-29T03:30:00.000Z",
              "alcohol": "33.0",
              "product_type_id": 1,
              "sparkling_volume_id": 1
          },
          {
              "name": "왕십리 산타",
              "price": "29000.00",
              "capacity": "400ml",
              "image_url": "https://cdn.discordapp.com/attachments/477456560205987868/1057475823269056573/PhotoRoom-20221228_103950.png",
              "description": "#깔끔하고 가볍",
              "expiration_date": "2024-01-26T03:30:00.000Z",
              "alcohol": "14.0",
              "product_type_id": 1,
              "sparkling_volume_id": 2
          }
      ]
      )
      .expect(200);
  })

  test('SUCCESS: Get Sorted List by Type', async () => {
    await request(app)
      .get('/products/listing?type=%EA%B3%BC%EC%8B%A4%EC%A3%BC&price=low&sparkling=low')
      .expect(200)
      .expect(
        [
          {
              "name": "머루 와인",
              "price": "28000.00",
              "capacity": "400ml",
              "image_url": "https://cdn.discordapp.com/attachments/477456560205987868/1057475842260873286/PhotoRoom-20221228_104239.png",
              "description": "#병째로 들이켜고 싶은",
              "expiration_date": "2024-01-25T03:30:00.000Z",
              "alcohol": "12.0",
              "product_type_id": 3,
              "sparkling_volume_id": 1
          }
      ]
      )
  })

  test('FAILED: Wrong Query Parameter', async () => {
    await request(app)
      .get('/products/listing?type=1')
      .expect(500)
  })
});
