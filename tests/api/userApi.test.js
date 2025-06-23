// tests/api/userApi.test.js
const request = require('supertest');
const app = require('../../app'); // Your Express app without .listen()

test('GET /users should return 200 OK and array', async () => {
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
