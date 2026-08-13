import { test, expect } from "@playwright/test";
import { UserApi } from "../../API/UserApi";

test("Create user API test", async ({ request }) => {

    const userApi = new UserApi(request);

    const response = await userApi.createUser(
        "Parth",
        "QA Engineer"
    );

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe("Parth");

});






















// import { test, expect } from '@playwright/test';

// test('Create user API test', async ({ request }) => {

// const response = await request.post(
//     'https://reqres.in/api/users',
//     {
//         headers: {
//             'x-api-key': 'pub_ecea204267fc23e57bb55dd8cbb59f606b10d56fb4ee37638f96dce375acf2f9',
//             'Content-Type': 'application/json'
//         },

//         data: {
//             name: 'Parth',
//             job: 'QA Engineer'
//         }
//     }
// );

// expect(response.status()).toBe(201);

// const responseBody = await response.json();

// expect(responseBody.name).toBe('Parth');
// expect(responseBody.job).toBe('QA Engineer');

// console.log(responseBody);
// })