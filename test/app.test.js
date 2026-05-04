import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import { app } from "../src/app.js";

test("GET /health returns API health status", async () => {
  const response = await request(app).get("/health");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    message: "Everything is good, API is running.",
  });
});

test("GET /v1/api/profile returns profile message", async () => {
  const response = await request(app).get("/v1/api/profile");

  assert.equal(response.status, 300);
  assert.deepEqual(response.body, {
    message: "This is the profile page",
  });
});

test("GET /v1/api/orders returns orders message", async () => {
  const response = await request(app).get("/v1/api/orders");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    message: "This is the orders page",
  });
});

test("GET /v1/api/payments returns payment message", async () => {
  const response = await request(app).get("/v1/api/payments");

  assert.equal(response.status, 200);
  assert.deepEqual(response.body, {
    message: "This is the payment info page",
  });
});
