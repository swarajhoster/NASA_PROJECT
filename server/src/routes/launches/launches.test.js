const request = require("supertest");
const app = require("../../app.js");

describe("Test Get /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.statusCode).toBe(200);
  });
});

describe("Test Get /Planets", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .get("/planets")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(response.statusCode).toBe(200);
  });
});

describe("Test POST /launches", () => {
  const completeLauchData = {
    mission: "ZTM1555",
    rocket: "ZMT EXPERIMENT ZS59",
    target: "Kepler-186 f",
    launchDate: "March 23,2050",
  };

  const lauchDataWithOutDate = {
    mission: "ZTM1555",
    rocket: "ZMT EXPERIMENT ZS59",
    target: "Kepler-186 f",
  };

  const lauchDataWithInvalidDate = {
    mission: "ZTM1555",
    rocket: "ZMT EXPERIMENT ZS59",
    target: "Kepler-186 f",
    launchDate: "Invaild date",
  };

  test("It should respond with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLauchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLauchData.launchDate).valueOf(); //Date Value
    const responseDate = new Date(response.body.launchDate).valueOf(); //also Date Value

    expect(responseDate).toBe(requestDate);

    expect(response.body).toMatchObject(lauchDataWithOutDate);
  });

  test("It should catch missing reqired properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(lauchDataWithOutDate)
      .expect("Content-Type", /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Missing required launch Property",
    });
  });

  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(lauchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(400);
    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});

describe("Test Get /launches", () => {
  test("It should respond with 200 success", async () => {
    const response = await request(app)
      .delete("/launches/100")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  test("It should respond with 404 lauch not found", async () => {
    const response = await request(app)
      .delete("/launches/999")
      .expect("Content-Type", /json/)
      .expect(404);
    expect(response.body).toStrictEqual({
      error: "Launch not found",
    });
  });
});
