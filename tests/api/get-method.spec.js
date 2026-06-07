import { test, expect } from '@playwright/test';

test('GET request example @get', async ({ request }) => {

    const response = await request.get(`/api/v2/spartans`);

    // retriving the infos from response:
    let statusCode = response.status();
    let headers = response.headers();
    let body = await response.json();

    
    // Assert the status code
    expect(response.status()).toBe(200);

    // assert content type
    expect(headers['content-type']).toContain('application/json');

    // verify the message in json body.
    expect(body.message).toBe('Successfully retrieved all the Spartans.');

    // verify that totalElement in the body is 147.
    expect(body.totalElement).toBe(147);
    
});


test('GET request example2 @get2', async ({ request }) => {
    let id = 853;
    const response = await request.get(`/api/v2/spartans/${id}`);

    // retriving the infos from response:
    let statusCode = response.status();
    let headers = response.headers();
    let body = await response.json();

    // Assert the status code
    expect(response.status()).toBe(200);

    // assert content type
    expect(headers['content-type']).toContain('application/json');

    // verify the message in body is: "Successfully retrieved the Spartan.""
    expect(body.message).toBe('Successfully retrieved the Spartan.');
    expect(body.data.id).toBe(id);


});

/*
API Testing lIbraries:

    Java: RestAssured
    C#: RestSharp
    Python: Requests
    JavaScript: Axios, Fetch API


*/
