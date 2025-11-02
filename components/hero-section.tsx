"use client"

import SearchBox from "./search-box"

export default function HeroSection() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      {/* AI cofounder Tag */}
      <div className="mb-4 px-3 py-2 inline-flex items-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-full shadow-md">
        <h1 className="text-[10px] lg:text-[12px] font-medium text-white leading-none">AI cofounder</h1>
      </div>

      {/* Main Heading */}
      <h2 className="max-w-xs lg:max-w-2xl mb-2 lg:mb-4 text-2xl lg:text-5xl font-bold text-foreground text-center">
        Make something people actually want
      </h2>

      {/* Subheading */}
      <p className="max-w-2xl mb-6 lg:mb-12 text-lg lg:text-xl text-foreground/70">
        Research and plan your product with AI
      </p>

      {/* Search Box */}
      <div className="max-w-3xl w-full">
        <SearchBox />
      </div>
    </div>
  )
}
