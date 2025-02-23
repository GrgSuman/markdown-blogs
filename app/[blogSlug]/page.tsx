import Image from "next/image";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { formatDate } from "@/lib/formatDate";
import ReadingProgress from "@/components/blog-components/ReadingProgress";
import TableOfContents from "@/components/blog-components/TableofContents";
import ShareButtons from "@/components/blog-components/ShareButtons";


// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getSortedPostsData();
 
  return posts.map((post) => ({
    blogSlug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: Promise<{ blogSlug: string }> }) {
  const { blogSlug } = await params;
  const post = await getPostData(blogSlug);
  if (!post) {
    return <div>Post not found</div>;
  }

  return ( 
   <article className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <ReadingProgress />

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-8 lg:py-12">
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          <a href="/" className="hover:underline">Home</a> / <a href={`/category/${post?.categorySlug}`} className="hover:underline">{post.category}</a> / <span className="font-semibold">{post.title}</span>
        </nav>

        <section className="space-y-4 mt-6 mb-8">
          <h1 className="text-4xl font-medium tracking-tight lg:text-5xl leading-tight">{post.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">📅 {post.isUpdated? `${formatDate(post.updatedAt)} (updated)` : formatDate(post.createdAt)}  {}    🕑 {post.timeToRead} read</p>
        </section>

      {
        post.thumbnailURL && <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg mb-8">
        <Image src={post.thumbnailURL || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      }
       
        <TableOfContents content={post.content} />

        <section className="prose prose-lg dark:prose-invert max-w-none leading-relaxed lg:leading-loose mt-10 mx-auto mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </section>

        <div className="border-t pt-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* <div>
              <h3 className="text-sm font-semibold uppercase mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.split(", ").map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div> */}
            <div>
              <h3 className="text-sm font-semibold uppercase mb-2">Share this article</h3>
              <ShareButtons url={`https://yourblog.com/blog/${post.slug}`} title={post.title} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
