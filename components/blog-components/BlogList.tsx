import React from "react";
import BlogCard from "./Card";
import { getPostsByCategory, getSortedPostsData } from "@/lib/posts";

const BlogList = async ({
  category = "",
  featured = false,
}: {
  category?: string;
  featured?: boolean;
}) => {
  let postsData = await getSortedPostsData()
  postsData = postsData.filter((x) => x?.isPublished);

  if (category !== "") {
    let postsByCategory = await getPostsByCategory(category)
    postsByCategory = postsByCategory.filter((x) => x?.isPublished);

    if (postsByCategory) {
      postsData = postsByCategory;
    }
  }

  if (featured) {
    postsData = postsData.filter((x) => x?.isFeatured);
  }

  return (
    <>
      {postsData?.length === 0 ? (
        <section className="my-8 px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70vh] text-center">
            <h2 className="text-[2rem] font-bold mb-4">Posts coming soon 🎉</h2>
          </div>
        </section>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 mt-8">
          {postsData.map((data) => (
            <BlogCard
              key={data.id}
              title={data.title}
              date={data?.createdAt}
              thumbnailLink={data?.thumbnailURL}
              href={data.slug}
              readingTime={data?.timeToRead}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogList;
