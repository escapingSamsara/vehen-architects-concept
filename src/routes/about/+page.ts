import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_STUDIO_ID } from '$env/static/public';
import {
    sectionContentStore
} from '$lib/stores/studioStores.js';




const client = createClient({
    projectId: PUBLIC_SANITY_STUDIO_ID,
    dataset: 'production',
    apiVersion: '2023-11-07',
    useCdn: true
});



export async function load({ params }) {
    const sectionContent = await client.fetch(`*[_type == "sectionContent"]{
   _id,
  header,
     description,
  "bodyText": body[].children[].text
}`);

    if (sectionContent) {
        sectionContentStore.set(sectionContent);
        return {
            sectionContent: sectionContent,
        };
    }
    return {
        status: 500,
        body: new Error('Internal Server Error')
    };
}
