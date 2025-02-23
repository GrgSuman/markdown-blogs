import { getAllCategories } from '@/lib/posts';
import BlogPostForm from '@/components/blog-components/admin/BlogPostForm'
import React from 'react'

const page = async() => {
    const categories = await getAllCategories();
    
  return (
    <div>
        <BlogPostForm categoriesList={categories}/>
    </div>
  )
}

export default page