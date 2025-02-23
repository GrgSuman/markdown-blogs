import { CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  date: string;
  href: string;
  thumbnailLink: string;
  readingTime: string;
}

export default function BlogCard({
  title,
  date,
  href,
  thumbnailLink,
  readingTime ,
}: BlogCardProps) {
  return (
    <article className="group border-b border-gray-200 pb-6 my-3 mb-6 last:border-0">
      <Link
        href={'/' + href}
        className="block no-underline"
      >
        <div className="flex gap-4">
          {/* Small side image */}
          {
            thumbnailLink &&  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded">
            <Image
              src={thumbnailLink}
              alt={title}
              width={100}
              height={100}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          }

          
          {/* Content */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl text-gray-900 transition-colors group-hover:text-blue-600">
              {title}
            </h2>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <time>
                  {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-1">
                🕑 <span>{readingTime}</span>
              </div>
            </div>
            
            <span className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}