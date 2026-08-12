import { APIRequestContext } from "@playwright/test";

export class UserApi {

    constructor(private request: APIRequestContext) {

    }

    async createUser(name: string, job: string) {

        const response = await this.request.post(
            "https://reqres.in/api/users",
            {
                headers: {
                    'x-api-key': 'pub_ecea204267fc23e57bb55dd8cbb59f606b10d56fb4ee37638f96dce375acf2f9',
                    'Content-Type': 'application/json'
                },

                data: {
                    name: name,
                    job: job
                }
            }
        );

        return response;
    }
}