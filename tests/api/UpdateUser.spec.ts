import { test, expect } from "@playwright/test";

test("Update user API test", async ({ request }) => {


    const response = await request.put(
        'https://reqres.in/api/users/2',
        {
            headers: {
                'x-api-key': 'pub_ecea204267fc23e57bb55dd8cbb59f606b10d56fb4ee37638f96dce375acf2f9',
                'Content-Type': 'application/json'
            },

            data: {
                name: 'Parth',
                job: 'QA Engineer'
            }
        }
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe('Parth');
    expect(responseBody.job).toBe('QA Engineer');

})

