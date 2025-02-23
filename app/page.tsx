import BlogList from "@/components/blog-components/BlogList";

export default function Home() {
  return (
    <div>

      <div className="text-center max-w-3xl mx-auto my-6 mt-[4rem]">
        <h1 className="text-3xl font-medium tracking-tight sm:text-5xl">
          Master the Art of Crafting Effective Prompts
        </h1>

        <p className="mt-6 text-xl text-gray-600 leading-relaxed">
          Transform your AI interactions with expertly crafted prompts. Learn
          proven techniques to get more accurate, relevant, and creative
          responses every time.
        </p>
      </div>


      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block text-3xl">Latest Posts</h1>
          </div>
        </div>
        <BlogList featured={true}/>
      </div>


    </div>
  );
}
