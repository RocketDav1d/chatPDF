// /api/create-chat
import { NextResponse } from "next/server"
import { loadS3intoPinecone } from "@/lib/pinecone";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json()
        const {file_key, filename} = body
        await loadS3intoPinecone(file_key)
        return NextResponse.json({"message": "success"})
    }
    catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }
} 