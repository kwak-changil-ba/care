import { createClient } from 'microcms-js-sdk';

export const client = createClient(
    {
        serviceDomain: process.env.Url,
        apiKey: process.env.API_KEY,
    });