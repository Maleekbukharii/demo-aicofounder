"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="fixed top-0 left-0 w-full text-foreground z-50 transition-all duration-300 bg-transparent">
        <div className="max-w-[96rem] w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center text-sm">
          {/* Logo */}
          <Link 
            href="/" 
            aria-label="aicofounder.com home"
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="aicofounder.com logo"
              width={120}
              height={40}
              className="h-5 lg:h-7 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex justify-end items-center gap-4">
            <Link 
              href="/pricing" 
              className="hidden lg:block hover:text-accent transition duration-200 ease-in-out"
            >
              Pricing
            </Link>
            <Link 
              href="/our-story" 
              className="hidden lg:block hover:text-accent transition duration-200 ease-in-out"
            >
              Our story
            </Link>

            <div className="ml-2 flex items-center gap-2">
              <Link 
                href="/signin"
                className="hidden px-4 py-1.5 lg:py-2 lg:flex items-center gap-2 font-medium bg-white hover:bg-gray-50 border border-border rounded-md transition duration-200 ease-in-out"
              >
                Sign in
              </Link>
              <Link 
                href="/signup"
                className="px-4 py-1.5 lg:py-2 flex items-center gap-2 font-medium text-white bg-accent hover:bg-accent/90 rounded-md transition duration-200 ease-in-out"
              >
                Get started
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden text-foreground hover:text-foreground/80 transition duration-200"
                aria-label="Toggle menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="28" 
                  height="28" 
                  fill="currentColor" 
                  viewBox="0 0 32 32" 
                  style={{ transform: 'scaleX(-1)' }}
                >
                  <path d="M26 16a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h20a1 1 0 0 1 1 1ZM5 9h18a1 1 0 1 0 0-2H5a1 1 0 0 0 0 2Zm17 14H5a1 1 0 0 0 0 2h17a1 1 0 0 0 0-2Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background lg:hidden z-[100] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-[100dvh]">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-[15px] py-[18px] border-b border-border">
            <Link 
              href="/" 
              aria-label="aicofounder.com home"
              onClick={() => setIsMenuOpen(false)}
            >
              <Image
                src="/logo.png"
                alt="aicofounder.com logo"
                width={100}
                height={20}
                className="h-5 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-foreground/80 transition duration-200"
              aria-label="Close menu"
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 512 512" 
                height="28" 
                width="28" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-col justify-between flex-1 p-6">
            <div className="space-y-4">
              <Link 
                href="/pricing"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-foreground hover:text-accent transition duration-200 ease-in-out"
              >
                Pricing
              </Link>
              <Link 
                href="/our-story"
                onClick={() => setIsMenuOpen(false)}
                className="block text-lg font-medium text-foreground hover:text-accent transition duration-200 ease-in-out"
              >
                Our story
              </Link>
            </div>

            <div className="space-y-4 mt-auto">
              <Link 
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-3 text-center font-medium text-white bg-accent hover:bg-accent/90 rounded-md transition duration-200 ease-in-out"
              >
                Get started
              </Link>
              <Link href="/signin"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full px-4 py-3 text-center font-medium text-foreground border border-border rounded-md transition duration-200 ease-in-out !bg-[#F2F1EC] hover:!bg-[#ECE9E2]"
                >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
