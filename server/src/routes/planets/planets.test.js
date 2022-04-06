const request = require("supertest");
const app = require("../../app.js");

describe("Test Get /Planets", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/planets")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.statusCode).toBe(200);
  });
});
