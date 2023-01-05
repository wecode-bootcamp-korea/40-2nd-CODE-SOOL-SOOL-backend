const request = require("supertest");
const { createApp } = require("../app");
const { tokenRequired } = require("../src/utils/auth");
const { AppData } = require("../src/models/dataSource");
const { token } = require("morgan");

describe("subscribe", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppData.initialize();
  });

  afterAll(async () => {
    await AppData.query(`SET FOREIGN_KEY_CHECKS = 0`);
    await AppData.query(`TRUNCATE orders`);
    await AppData.query(`SET FOREIGN_KEY_CHECKS = 1`);
    await AppData.destroy();
  });

  test("SUCCESS: Create orders", async () => {
    await request(app)
      .post("/subscribe/user")
      .set(
        "authorization",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY3MjczMzM4OX0.97lMB7FRyZmlakroxhlJpdGtyMFXqrSRb7nVthUFNzA"
      )
      .send({
        userId: tokenRequired.userId,
        address: "aaa",
        totalPrice: 100000,
        productId: 1,
        quantity: 4,
      })
      .expect(201);

    test("FALIED: NOT Create orders", async () => {
      await request(app)
        .post("/subscribe/user")
        .set(
          "authorization",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY3MjczMzM4OX0.97lMB7FRyZmlakroxhlJpdGtyMFXqrSRb7nVthUFNzA"
        )
        .send({
          userId: tokenRequired.userId,
          address: "bbb",
          totalPrice: 300000,
          productId: 1,
          quantity: 4,
        })
        .expect(401)
        .expect({ message: err.message });
    });
  });
});
