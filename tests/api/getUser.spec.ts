import { test, expect } from "@playwright/test";

test("Get user API test", async ({ request }) => {

    const response = await request.get(

        'https://jsonplaceholder.typicode.com/users/1'

    );

    await expect(response).toBeOK();

    const responseBody = await response.json();

    console.log(responseBody);

    console.log(responseBody.name);

    await expect(responseBody.name).toBe("Leanne Graham");

    console.log(responseBody.id);

    await expect(responseBody.id).toBe(1);

    console.log(responseBody.email);

    await expect(responseBody.email).toBe("Sincere@april.biz")
});