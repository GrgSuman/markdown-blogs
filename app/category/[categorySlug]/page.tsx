import { getAllCategories, getPostsByCategory } from '@/actions/posts';
import BlogList from '@/components/blog-components/BlogList';
import { slugify } from '@/lib/slugify';
import React from 'react'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await getAllCategories();
 
  return posts.map((post) => ({
    categorySlug: slugify(post),
  }))
}

const page =async ({params}:{params:Promise<{categorySlug:string}>}) => {
    const {categorySlug} = await params
    const posts = await getPostsByCategory(categorySlug);

    if(posts.length === 0) {
      return (
        <>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="inline-block text-3xl lg:text-4xl">No posts found</h1>
              <p className="text-xl text-muted-foreground">No posts found for this category.</p>
            </div>
          </div>
        </div>
        </>
      )
    }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-3xl lg:text-4xl">{posts[0].category.toUpperCase()}</h1>
          {/* <p className="text-xl text-muted-foreground">
            This section includes end-to-end guides for developing Next.js 13 apps.
          </p> */}
        </div>
      </div>
      <BlogList category={categorySlug} />
      </div>
  )
}

export default page