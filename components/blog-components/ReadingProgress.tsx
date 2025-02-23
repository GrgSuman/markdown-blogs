"use client"

import { useEffect, useState } from "react"

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const percentage = (currentProgress / scrollHeight) * 100
      setProgress(percentage)
    }

    window.addEventListener("scroll", updateProgress)
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
      <div className="h-full bg-[#1e72bd] transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  )
}

