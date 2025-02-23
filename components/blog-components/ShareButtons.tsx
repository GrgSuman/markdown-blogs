'use client'
import { Facebook, Twitter, Linkedin } from "lucide-react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={shareOnTwitter}
        className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Share on Twitter</span>
      </button>
      <button
        onClick={shareOnFacebook}
        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
      >
        <Facebook className="h-5 w-5" />
        <span className="sr-only">Share on Facebook</span>
      </button>
      <button
        onClick={shareOnLinkedIn}
        className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">Share on LinkedIn</span>
      </button>
    </div>
  );
}
