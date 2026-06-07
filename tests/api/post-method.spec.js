import {test, expect} from '@playwright/test';

test('POST request example @post', async ({request}) => {

    let newSpartan = {
        "name": "Muhtar Mahmut",
        "gender": "Male",
        "phone": "78965412332"
    }

    const response = await request.post('/api/v2/spartans', { data: newSpartan });

    // Retrieve the response information:
    let statusCode = response.status();
    let headers = response.headers();
    let body = await response.json();

    // verify the status code is 201.
    expect(statusCode).toBe(201);

    // verify content type is application/json
    expect(headers['content-type']).toContain('application/json');

    // verify the message in the body is "Successfully created the Spartan."
    expect(body.message).toBe('Successfully created the Spartan.');

});