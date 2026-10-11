# QA Automation Take-Home

A small Playwright + TypeScript test suite for the RecruiterFlow QA Automation assignment. This repository tests an existing demo shop and a public demo REST API.

## Included Scenarios

### UI Tests — SauceDemo

1. A valid `standard_user` login displays the **Products** title.
2. A `locked_out_user` login displays an error containing **locked out**.
3. Adding one product updates the cart badge to `1`.

### API Tests — ReqRes

4. `GET /api/users/2` returns HTTP `200` and a non-empty `data.email`.
5. `POST /api/users` with `{ "name": "morpheus", "job": "" }` returns HTTP `201` and the response name `morpheus`.`leader`

The API tests use Playwright's built-in `request` fixture and send the required `x-api-key` header. No browser is used for API tests.

## Requirements

- Node.js 18 or newer
- A ReqRes account and valid API key for the API tests

## Installation and Setup

Clone the repository and navigate to the project directory. Then install the dependencies:

```bash
npm install
npx playwright install chromium
```

Create a `.env` file in the project root and add your ReqRes API key:

```dotenv
REQRES_API_KEY=your_actual_api_key
```

Replace the placeholder with your own valid API key. Never commit your `.env` file or share your API key publicly.

## Running the Tests

Run all UI and API tests from the project root directory:

```bash
npx playwright test
```

The suite contains three UI tests and two API tests. If `REQRES_API_KEY` is not configured, the API tests are intentionally skipped with an explanatory message, while the UI tests can still run. A complete successful run requires a valid API key and access to both public sites.

## Viewing the HTML Report

After running the tests, open the HTML report:

```bash
npx playwright show-report
```

The report provides an overview of the test results and helps identify failed tests.

## Implementation Notes

- **UI automation:** Uses SauceDemo's `data-test` attributes for stable element selection.
- **API automation:** Uses Playwright's built-in `request` fixture to send HTTP requests and validate status codes and response data.
- **Assertions:** Each test checks the expected behavior or response.
- **Configuration:** The API key is read from an environment variable rather than hard-coded into the source code.

## AI Assistance and Reflection

ChatGPT was used throughout the development process to enhance the test suite, identify and rectify errors, improve the test structure, prepare documentation, and suggest improvements to the test scenarios, assertions, project setup, and overall code quality. I reviewed the suggestions, tested the implementation locally, and verified that all five UI and API tests passed. This experience helped me improve my understanding of Playwright, TypeScript, UI automation, API testing, and debugging.
