import { test, expect } from '@playwright/test';

const apiKey = process.env.REQRES_API_KEY;

test.describe('ReqRes users API', () => {
  test.skip(!apiKey, 'Set REQRES_API_KEY in your .env file before running API tests.');

  test('GET /api/users/2 returns a user with an email', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2', {
      headers: {
        'x-api-key': apiKey as string,
      },
    });

    expect(response.status()).toBe(200);

    const body: { data?: { email?: string } } = await response.json();
    expect(body.data?.email).toBeTruthy();
  });

  test('POST /api/users creates Morpheus', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      headers: {
        'x-api-key': apiKey as string,
        'Content-Type': 'application/json',
      },
      data: {
        name: 'morpheus',
        job: 'leader',
      },
    });

    expect(response.status()).toBe(201);

    const body: { name?: string; job?: string; id?: string; createdAt?: string } =
      await response.json();
    expect(body.name).toBe('morpheus');
  });
});