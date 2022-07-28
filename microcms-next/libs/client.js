import { createClient } from 'microcms-js-sdk';

const client = createClient(
    {
        serviceDomain: process.env.NEXT_PUBLIC_Url,
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
    });

export { client }