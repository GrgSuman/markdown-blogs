import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory where posts are stored
const postsDirectory = path.join(process.cwd(), 'posts');


// Get sorted post data with all metadata
export async function getSortedPostsData() {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []; // Return empty array if no posts directory
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName: string) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return matterResult.data as { 
      id: string;
      updatedAt: string; 
      isUpdated: boolean;
      createdAt: string;
      timeToRead: string;
      metaDesc: string;
      title: string;
      isFeatured: string;
      isPublished: string;
      category: string;
      categorySlug: string;
      slug: string;
      tags: string;
      thumbnailURL: string;
     }
  });

  return allPostsData.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}


// Get specific post data (metdata + content)
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  
  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const content = matterResult.content
  return { ...(matterResult.data as { 
    updatedAt: string; 
    isUpdated: boolean;
    createdAt: string;
    metaDesc: string;
    timeToRead: string;
    title: string;
    category: string;
    isFeatured: string;
    isPublished: string;
    categorySlug: string;
    slug: string;
    tags: string;
    thumbnailURL: string;
   })
   ,id, content}
}

// Get all unique categories from posts
export async function getAllCategories(): Promise<string[]> {
  const posts = await getSortedPostsData();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories);
}

//get all posts from a category
export async function getPostsByCategory(categorySlug: string) {
  const posts = await getSortedPostsData();
  return posts.filter((post) => post.categorySlug === categorySlug);
}

// Save post to file
export const savePost = async (fileName: string, data: string): Promise<{ success: boolean; msg?: string }> => {
  const filePath = path.join(postsDirectory, fileName)
  try {
    // Check if the 'posts' directory exists, create it if it doesn't
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true })
    }
    // Write the file
    await fs.promises.writeFile(filePath, data, 'utf-8')
    return { 
      success: true,
      msg: 'Post saved successfully'
    }
  } catch (error) {
    return { 
      success: false, msg: error instanceof Error ? error.message : String(error) 
    }
  }
  }

  export const deletePost = async (slug: string): Promise<{ success: boolean; msg?: string }> => {
    const filePath = path.join(postsDirectory, `${slug}.md`);
  
    try {
      if (fs.existsSync(filePath)) {
        await fs.promises.unlink(filePath);
        return { success: true, msg: "Post deleted successfully" };
      } else {
        return { success: false, msg: "Post not found" };
      }
    } catch (error) {
      return { 
        success: false, 
        msg: error instanceof Error ? error.message : String(error),
      };
    }
  };
  