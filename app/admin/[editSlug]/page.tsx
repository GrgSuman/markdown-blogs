import { getAllCategories, getPostData } from '@/lib/posts'
import BlogPostForm from '@/components/blog-components/admin/BlogPostForm';
import { redirect } from 'next/navigation';
import React from 'react'

// Tell Next.js this is a dynamic route


export const generateStaticParams = () => {
  return [
    { editSlug: "new" },]
}

const page = async ({params}:{params:Promise<{editSlug:string}>}) => {
    const {editSlug} = await params
    const data = await getPostData(editSlug);
    const categories = await getAllCategories();
    if(!data) {
        redirect("/admin")
    }

    
  return (
    <div>
        <BlogPostForm categoriesList={categories} data={data}/>
    </div>
  )
}

export default page