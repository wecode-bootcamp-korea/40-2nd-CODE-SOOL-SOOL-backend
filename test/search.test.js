const request = require("supertest");
const { createApp } = requre("../app.js");
const { AppData } = require("../src/models/dataSource");

describe("search Product", () => {
  let app;

  beforeAll;
  async () => {
    app = createApp();
    await AppData.initialize();
  };
});

test("SUCCESS: search product", async () => {
  await request(app).get("/search/detail/1").expect(200);
});

test("FAILED: invalid product", async () => {
  await request(app)
    .get("/search/detail/name")
    .expect(400)
    .expect({ message: "KEY ERROR" });
});

test("FAILED: invalid product", async () => {
  await request(app)
    .get("/search/detail/11")
    .expect(400)
    .expect({ message: "Not Exist Product" });
});
