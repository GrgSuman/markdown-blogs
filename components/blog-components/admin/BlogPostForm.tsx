"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { slugify } from "@/lib/slugify";
import JoditRichEditor from "./JodditEditor";
import { addIdsToHeadings } from "@/lib/addIdToHeadings";
import matter from "gray-matter";
import Link from "next/link";
import { deletePost, savePost } from "@/lib/posts";

const initialBlogPost = {
  title: "",
  slug: "",
  category: "",
  author: "",
  isPublished: false,
  isFeatured: false,
  isUpdated: false,
  timeToRead: "",
  keywords: "",
  metaDesc: "",
  tags: "",
  createdAt: new Date().toISOString().split("T")[0],
  updatedAt: new Date().toISOString().split("T")[0],
  thumbnailURL: "",
  content: "",
};

const initialErrors = {
  title: "",
  slug: "",
  category: "",
  author: "",
  timeToRead: "",
  createdAt: "",
  updatedAt: "",
  metaDesc: "",
  keywords: "",
  tags: "",
  thumbnailURL: "",
  content: "",
};

export function BlogPostForm({ categoriesList, data }:{categoriesList: string[], data?: any}) {
  const [blogPost, setBlogPost] = useState(data || initialBlogPost);
  const [errors, setErrors] = useState(initialErrors);
  const [categories, setCategories] = useState(categoriesList);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const validateField = (field, value) => {
    switch (field) {
      case "title":
        return !value ? "Title is required" : "";
      case "slug":
        return !value ? "Slug is required" : "";
      case "category":
        return !value ? "Category is required" : "";
      case "author":
        return !value ? "Author is required" : "";
      case "timeToRead":
        return !value ? "Time to read is required" : "";
      case "metaDesc":
        return !value ? "Meta description is required" : "";
      case "keywords":
        return !value ? "Keywords are required" : "";
      case "tags":
        return !value ? "Tags are required" : "";
      case "thumbnailURL":
        return !value ? "Thumbnail image link is required" : "";
      case "content":
        return !value ? "Content is required" : "";
      default:
        return "";
    }
  };

  const updateField = (field, value) => {
    setBlogPost((prev) => ({ ...prev, [field]: value }));
    const errorMessage = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      updateField("category", newCategory.trim());
      setNewCategory("");
      setShowNewCategoryInput(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Object.keys(blogPost).forEach((field) => {
    //   const errorMessage = validateField(field, blogPost[field]);
    //   if (errorMessage) {
    //     newErrors[field] = errorMessage;
    //     isValid = false;
    //   }
    // });

    setErrors(newErrors);
    return isValid;
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
    const content = addIdsToHeadings(blogPost.content);
    // Create front matter
    const frontMatter = matter.stringify(content, {
      title: blogPost.title,
      slug: blogPost.slug,
      category: blogPost.category,
      categorySlug: slugify(blogPost.category),
      author: blogPost.author,
      isPublished: blogPost.isPublished,
      isFeatured: blogPost.isFeatured,
      isUpdated: blogPost.isUpdated,
      keywords: blogPost.keywords,
      metaDesc: blogPost.metaDesc,
      tags: blogPost.tags,
      updatedAt: blogPost.updatedAt,
      createdAt: blogPost.createdAt,
      timeToRead: blogPost.timeToRead,
      thumbnailURL: blogPost.thumbnailURL,
    });

    const fileName = `${blogPost.slug}.md`;

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileName, frontMatter }),
    })

    const result = await res.json();

    // const result = await savePost(fileName, frontMatter);


    if (result.success) {
      window.location.href = "/admin";
    } else {
      alert(result.msg);
    }

    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
    const contentNew = addIdsToHeadings(blogPost.content);

    const { content,categorySlug, ...post } = blogPost;
    const frontMatter = matter.stringify(contentNew, {
      ...post,
      categorySlug: slugify(blogPost.category),
    });

    const fileName = `${blogPost.slug}.md`;

    // const deleteResult = await deletePost(data.slug);

    if (!deleteResult.success) {
      alert(deleteResult.msg);
      return; // Stop execution if delete fails
    }

    // const result = await savePost(fileName, frontMatter);

    if (result.success) {
      window.location.href = "/admin";
    } else {
      alert(result.msg);
    }

    }
  };

  const ErrorMessage = ({ message }) =>
    message ? <p className="text-red-500 text-sm mt-1">{message}</p> : null;

  return (
    <form
      onSubmit={data ? handleUpdate : handleCreate}
      className="max-w-7xl mx-auto py-8 px-4"
    >
      <Link href="/admin" className="text-xl my-5 block w-[fit-content]">
        ← Back
      </Link>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
          {data ? "Update" : "Create"} New Blog Post
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Title Section */}
            <div className="md:col-span-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={blogPost.title}
                onChange={(e) => {
                  updateField("title", e.target.value);
                  updateField("slug", slugify(e.target.value));
                }}
                placeholder="Enter post title"
                className={`mt-1 ${errors.title ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.title} />
            </div>

            {/* Slug Section */}
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={blogPost.slug}
                onChange={(e) => updateField("slug", e.target.value)}
                placeholder="post-url-slug"
                className={`mt-1 ${errors.slug ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.slug} />
            </div>

            {/* Category Section */}
            <div>
              <Label>Category</Label>
              <div className="flex gap-2">
                <Select
                  value={blogPost.category}
                  onValueChange={(value) => {
                    if (value === "new") {
                      setShowNewCategoryInput(true);
                    } else {
                      updateField("category", value);
                    }
                  }}
                >
                  <SelectTrigger
                    className={errors.category ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                    <SelectItem value="new">Add new category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <ErrorMessage message={errors.category} />
              {showNewCategoryInput && (
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="New category name"
                  />
                  <Button
                    type="button"
                    onClick={handleAddCategory}
                    size="icon"
                    variant="outline"
                  >
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Author Section */}
            <div>
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={blogPost.author}
                onChange={(e) => updateField("author", e.target.value)}
                placeholder="Author name"
                className={`mt-1 ${errors.author ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.author} />
            </div>

            {/* Time to Read */}
            <div>
              <Label htmlFor="timeToRead">Time to Read</Label>
              <Input
                id="timeToRead"
                value={blogPost.timeToRead}
                onChange={(e) => updateField("timeToRead", e.target.value)}
                placeholder="3 mins"
                className={`mt-1 ${errors.timeToRead ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.timeToRead} />
            </div>

            {/* Date Created */}
            <div>
              <Label htmlFor="createdAt">Created Date</Label>
              <Input
                type="date"
                id="createdAt"
                value={blogPost.createdAt}
                onChange={(e) => updateField("createdAt", e.target.value)}
                className={`mt-1 ${errors.createdAt ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.createdAt} />
            </div>

            {/* Date Updated */}
            <div>
              <Label htmlFor="updatedAt">Last Updated Date</Label>
              <Input
                type="date"
                id="updatedAt"
                value={blogPost.updatedAt}
                onChange={(e) => updateField("updatedAt", e.target.value)}
                className={`mt-1 ${errors.updatedAt ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.updatedAt} />
            </div>

            {/* Meta Description */}
            <div className="md:col-span-2">
              <Label htmlFor="metaDesc">Meta Description</Label>
              <Textarea
                id="metaDesc"
                value={blogPost.metaDesc}
                onChange={(e) => updateField("metaDesc", e.target.value)}
                placeholder="Enter meta description for SEO"
                className={`mt-1 ${
                  errors.metaDesc ? "border-red-500" : ""
                }`}
                rows={3}
              />
              <ErrorMessage message={errors.metaDesc} />
            </div>

            {/* Keywords */}
            <div className="md:col-span-2">
              <Label htmlFor="keywords">Keywords</Label>
              <Input
                id="keywords"
                value={blogPost.keywords}
                onChange={(e) => updateField("keywords", e.target.value)}
                placeholder="Enter keywords (comma-separated)"
                className={`mt-1 ${errors.keywords ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.keywords} />
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                value={blogPost.tags}
                disabled
                onChange={(e) => updateField("tags", e.target.value)}
                placeholder="Enter tags (comma-separated)"
                className={`mt-1 ${errors.tags ? "border-red-500" : ""}`}
              />
              <ErrorMessage message={errors.tags} />
            </div>

            {/* Thumbnail Image Link */}
            <div className="md:col-span-2">
              <Label htmlFor="thumbnailURL">Thumbnail Image Link</Label>
              <Input
                id="thumbnailURL"
                value={blogPost.thumbnailURL}
                onChange={(e) =>
                  updateField("thumbnailURL", e.target.value)
                }
                placeholder="Enter image URL"
                className={`mt-1 ${
                  errors.thumbnailURL ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage message={errors.thumbnailURL} />
            </div>

            {/* Toggles */}
            <div className="flex flex-wrap gap-6 md:col-span-2">
              <div className="flex items-center space-x-2">
                <Switch
                  id="isPublished"
                  checked={blogPost.isPublished}
                  onCheckedChange={(checked) =>
                    updateField("isPublished", checked)
                  }
                />
                <Label htmlFor="isPublished">Published</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isFeatured"
                  checked={blogPost.isFeatured}
                  onCheckedChange={(checked) =>
                    updateField("isFeatured", checked)
                  }
                />
                <Label htmlFor="isFeatured">Featured Post</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="isUpdated"
                  checked={blogPost.isUpdated}
                  onCheckedChange={(checked) =>
                    updateField("isUpdated", checked)
                  }
                />
                <Label htmlFor="isUpdated">Updated Post</Label>
              </div>
            </div>
          </div>

          {/* Rich Text Editor */}
          <div className="mt-6">
            <Label>Content</Label>
            <div className="mt-2">
              <JoditRichEditor
                content={blogPost.content}
                setContent={(content) => updateField("content", content)}
              />
              <ErrorMessage message={errors.content} />
            </div>
          </div>


          <div className="space-y-4">
      {!data && (
        <Button 
          type="submit" 
          variant="outline"
          className="w-full bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
        >
          Save as a Draft
        </Button>
      )}
      <Button 
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
      >
        {data ? "Update" : "Create"} Blog Post
      </Button>
    </div>

        </CardContent>
      </Card>
    </form>
  );
}

export default BlogPostForm;


