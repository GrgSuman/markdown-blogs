import { getSortedPostsData } from '@/lib/posts'
import BlogListingTable from '@/components/blog-components/admin/BlogListingTable'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async() => {
    let postsData = await getSortedPostsData()
  return (
    <div className='max-w-7xl mx-auto mt-10'>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
            <Link
            href="/admin/new"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            <PlusIcon className="mr-2 h-4 w-4" /> Create New Post
            </Link>
        </div>
        <BlogListingTable posts={postsData}/>
    </div>
  )
}

export default page