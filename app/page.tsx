"use client"

import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WorkflowSidebar from "@/components/workflow-sidebar"
import BuildProductSection from "@/components/build-product-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background dots-pattern relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 pt-20 pb-16 px-4 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-7xl mx-auto relative w-full">
          {/* Left Sidebar - Market Research */}
          <div className="absolute left-5 top-45 translate-x-8 hidden lg:block">
            <WorkflowSidebar />
          </div>

          {/* Center Hero Section */}
          <HeroSection />

          {/* Right Sidebar - Build Product */}
          <div className="absolute right-18 top-2 translate-x-8 hidden lg:block">
            <BuildProductSection />
          </div>
        </div>
      </div>
    </main>
  )
}
