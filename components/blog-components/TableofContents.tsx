"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";

const TableOfContents = ({ content }:{content: string}) => {
  const [headings, setHeadings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!content) return;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;

    const headingElements = tempDiv.querySelectorAll("h2, h3");
    const headingsData = Array.from(headingElements).map((heading) => {
      const text = heading.textContent.replace(/[^\w\s]/g, "");
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      heading.id = id;

      return {
        id,
        text,
        level: parseInt(heading.tagName[1]),
      };
    });

    setHeadings(headingsData);

    const contentDiv = document.querySelector(".tiptap");
    if (contentDiv) {
      const contentHeadings = contentDiv.querySelectorAll("h2, h3");
      contentHeadings.forEach((heading, index) => {
        heading.id = headingsData[index].id;
      });
    }
  }, [content]);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full"
      >
        <h2 className="text-xl font-semibold">Table of Contents</h2>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      
      {isOpen && (
        <nav className="mt-4 space-y-1">
          {headings.map((heading, index) => (
            <Link
              key={index}
              href={`${pathname}#${heading.id}`}
              className={`
                 text-blue-800 
                block py-1.5 px-2 text-md transition-colors
                hover:bg-slate-100 dark:hover:bg-slate-800 rounded
              `}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              {heading.text}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default TableOfContents;