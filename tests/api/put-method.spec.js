import {test, expect} from '@playwright/test';

test('PUT request example @put', async ({request}) => {

    let id = 854;

    let payload = {
        "name": "Kuzzat Altay",
        "gender": "Male",
        "phone": "1234567890"
    }

    const response = await request.put(`/api/v2/spartans/${id}`, { data: payload });

    // Retrieve the response information:
    let statusCode = response.status();
    let headers = response.headers();
    let body = await response.json();

    // verify the status code is 200.
    expect(statusCode).toBe(200);

    // verify content type is application/json
    expect(headers['content-type']).toContain('application/json');

    // verify the body message is "Successfully updated the Spartan."
    expect(body.message).toBe('Successfully updated the Spartan.');

});