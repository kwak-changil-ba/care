import { createClient } from 'microcms-js-sdk';

const client = createClient(
    {
        serviceDomain: process.env.Url,
        apiKey: process.env.API_KEY,
    });

export { client}