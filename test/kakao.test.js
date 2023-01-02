const request = require("supertest");
const axios = require("axios");
const { createApp } = require("../app");
const { AppData } = require("../src/models/dataSource");

describe("kakao SignIn", () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await AppData.initialize();
  });

  afterAll(async () => {
    await AppData.query(`SET FOREIGN_KEY_CHECKS = 0`);
    await AppData.query(`TRUNCATE users`);
    await AppData.query(`SET FOREIGN_KEY_CHECKS = 1`);
    await AppData.destroy();
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
      .post("/auth/signin")
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

    await request(app).get("/auth/signin").expect(400);
  });
});
