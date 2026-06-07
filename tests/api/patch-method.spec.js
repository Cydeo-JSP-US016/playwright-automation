import {test, expect} from '@playwright/test';

test('PATCH request example @patch', async ({request}) => {

    let id = 854;

    const payload = {
        "phone": "9999999999"
    }

    const response = await request.patch(`/api/v2/spartans/${id}`, {data: payload});

    // retriving the infos from response:
    let statusCode = response.status();
    let headers = response.headers();
    let body = await response.json();

    // verify the body message is "Successfully updated the Spartan."
    expect(body.message).toBe('Successfully updated the Spartan.');

    // verify status code is 200.
    expect(statusCode).toBe(200);

    // verify content type is application/json
    expect(headers['content-type']).toContain('application/json');


});