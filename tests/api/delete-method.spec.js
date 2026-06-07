import {test, expect} from '@playwright/test';

test('DELETE request example @delete', async ({request}) => {

    let id = 854;

    const response = await request.delete(`/api/v2/spartans/${id}`);

    // retrieving the infos from response:
    let statusCode = response.status();
    let headers = response.headers();
    let body = await response.json();

    // verify the body message is "Successfully deleted the Spartan."
    expect(body.message).toBe('Successfully deleted the Spartan.');

    // verify status code is 200.
    expect(statusCode).toBe(200);

    // verify content type is application/json
    expect(headers['content-type']).toContain('application/json');

});