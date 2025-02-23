import { savePost } from "@/lib/posts";
import fs from "fs";
import path from "path";


const postsDirectory = path.join(process.cwd(), 'posts');

export const dynamic = "force-static"

export async function POST(request: Request) {
    const { fileName , frontMatter} = await request.json();  
    const filePath = path.join(postsDirectory, fileName)
    console.log(frontMatter)
    try {
      // Check if the 'posts' directory exists, create it if it doesn't
      if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true })
      }
      // Write the file
      await fs.promises.writeFile(filePath, frontMatter, 'utf-8')
    //   return { 
    //     success: true,
    //     msg: 'Post saved successfully'
    //   }
    } catch (error) {
        console.log(error)
    //   return { 
    //     success: false, msg: error instanceof Error ? error.message : String(error) 
    //   }
    }
    return new Response('Hello, Next.js!')
}