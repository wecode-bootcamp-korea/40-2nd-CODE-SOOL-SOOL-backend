const request = require("supertest");
const axios = require("axios");
const { createApp } = require("../app");
const { appDataSource } = require("../src/models/data.source");

describe("kakao SignIn", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
  });

  afterAll(async () => {
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS = 0`);
    await appDataSource.query(`TRUNCATE users`);
    await appDataSource.query(`SET FOREIGN_KEY_CHECKS = 1`);
    await appDataSource.destroy();
  });

  test("SUCCESS: kakao signin", async () => {
    axios.get = jest.fn().mockReturnValue({
      data: {
        id: 1010101022,
        connected_at: "2022-08-30T14:41:02Z",
        properties: {
          nickname: "아무개",
        },
        kakao_account: {
          profile_nickname_needs_agreement: false,
          profile: {
            nickname: "아무개",
          },
          has_email: true,
          email_needs_agreement: false,
          is_email_valid: true,
          is_email_verified: true,
          email: "abc@gmail.com",
        },
      },
    });
    await request(app)
      .post("/auth/signIn")
      .set({
        Authorization: "Bearer accessToken",
      })
      .expect(200);
  });

  test("FAILED: kakaoToken not exist", async () => {
    axios.get = jest.fn().mockReturnValue({
      data: {
        id: 1010101022,
        connected_at: "2022-08-30T14:41:02Z",
        properties: {
          nickname: "아무개",
        },
        kakao_account: {
          profile_nickname_needs_agreement: false,
          profile: {
            nickname: "아무개",
          },
          has_email: true,
          email_needs_agreement: false,
          is_email_valid: true,
          is_email_verified: true,
          email: "abc@gmail.com",
        },
      },
    });

    await request(app).get("/auth/signIn").expect(400);
  });
});
