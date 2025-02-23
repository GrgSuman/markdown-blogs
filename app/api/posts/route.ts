import { deletePost, savePost } from "@/lib/posts";

export const dynamic = "force-static"

export async function POST(request: Request) {
  const { fileName , frontMatter} = await request.json(); 

  const result = await savePost(fileName, frontMatter);

  if (result.success) {
    return new Response(JSON.stringify({success: true, msg: "Post saved successfully"}));

  } 
  return new Response(JSON.stringify({success: false, msg: "failed to save post"}))
}

export async function PUT(request: Request) {
  const { fileName , frontMatter, slug} = await request.json(); 
    const deleteResult = await deletePost(slug);

    if (deleteResult.success) {
      const result = await savePost(fileName, frontMatter);
      return new Response(JSON.stringify(result));
    }

  return new Response(JSON.stringify({success: false, msg: "failed to update post"}))
}