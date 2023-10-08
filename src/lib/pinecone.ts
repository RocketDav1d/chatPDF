import { Pinecone } from '@pinecone-database/pinecone';

let pinecone: Pinecone | null = null;

export const getPineconeClient = async () => {
    if (!pinecone) {
        const pinecone = new Pinecone({
            apiKey: process.env.PINECONE_API_KEY!,
            environment: process.env.PINECONE_ENVIRONMENT!,
          });
    }
    return pinecone;
}


export async function loadS3intoPinecone (fileKey: string) {
    // 1. obtain the pdf from s3 -> download and read from pdf
}
