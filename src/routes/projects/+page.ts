import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_STUDIO_ID } from '$env/static/public';
import {
    projectsStore,
    sectionContentStore
} from '$lib/stores/studioStores.js';




const client = createClient({
    projectId: PUBLIC_SANITY_STUDIO_ID,
    dataset: 'production',
    apiVersion: '2023-11-07',
    useCdn: true
});



export async function load({ params }) {
    const projectImages = await client.fetch(`*[_type == "projects"][1]{
  _id,
  title,
  description[],
  "imageUrls": images[].asset->url,
    "imageDescription":images[].description}`);

    if (projectImages) {
        projectsStore.set(projectImages);
        return {
            projectImages: projectImages,
        };
    }
    return {
        status: 500,
        body: new Error('Internal Server Error')
    };
}
