import {test, expect} from '@playwright/test';

test('Patch user API test', async ({request}) => {

    const response = await request.patch(

        'https://reqres.in/api/users/2',
        {
            headers:{
                'x-api-key': 'pub_ecea204267fc23e57bb55dd8cbb59f606b10d56fb4ee37638f96dce375acf2f9',
                'Content-Type': 'application/json'
            },
            data:{
                job:'QA Engineer'
            }
        }
    );
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    console.log(responseBody);


})