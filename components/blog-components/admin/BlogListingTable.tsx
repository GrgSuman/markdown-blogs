import type React from "react"
import Link from "next/link"
import { PlusIcon } from "lucide-react"
import { formatDate } from "@/lib/formatDate"

const BlogListingTable: React.FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div>
      <p className="text-lg text-gray-600 mb-3">Total posts: {posts?.length}</p>

      {posts?.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-10 text-center bg-gray-50 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-32 h-32 text-gray-400">
            <rect x="50" y="40" width="100" height="120" rx="10" ry="10" fill="#f3f4f6" />
            <path d="M50 50h100M50 65h100M50 80h100" stroke="#d1d5db" strokeWidth="3" />
            <circle cx="100" cy="130" r="8" fill="#9ca3af" />
            <circle cx="120" cy="130" r="8" fill="#9ca3af" />
            <path d="M95 145q10 10 20 0" stroke="#9ca3af" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
          <h2 className="text-xl font-semibold text-gray-700 mt-4">No Posts Found</h2>
          <p className="text-gray-500 mt-2">
            It looks like there are no posts available. Create a new post to get started.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className=" divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Featured
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Published
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Updated
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map((post, index) => (
                <tr key={post.id + post.slug} className="text-sm">
                  <td className="px-6 py-4">{post.title}</td>
                  <td className="px-6 py-4">{post.category}</td>
                  <td className="px-6 py-4">
                    {post.isFeatured && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap" >
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        post.isPublished ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {post.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formatDate(post.createdAt)}
                  </td>
                  <td className="px-6 py-4 ">{post.isUpdated ? formatDate(post.updatedAt) : "N/A"}</td>
                  <td className="px-6 py-4  text-sm font-medium whitespace-nowrap">
                    <Link
                      href={`/admin/${post.slug}`}
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-3 py-1 rounded-md mr-2"
                    >
                      Edit
                    </Link>
                    <button className="bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded-md">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default BlogListingTable

