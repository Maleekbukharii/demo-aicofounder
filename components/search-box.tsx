"use client"

import { useState, useEffect, useRef } from "react"

export default function SearchBox() {
  const [privacyMode, setPrivacyMode] = useState(false)
  const [query, setQuery] = useState("")
  const [displayText, setDisplayText] = useState("")
  const [promptIndex, setPromptIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const prompts = [
    "build a meal plannin",
    "launch a book club management tool",
    "build an AI tutor for kids",
    "create a fitness tracking app",
  ]

  useEffect(() => {
    const currentPrompt = prompts[promptIndex]
    const fullText = `I want to ${currentPrompt}`
    const typingSpeed = 50
    const pauseTime = 2000

    let timer: NodeJS.Timeout

    if (!isDeleting && displayText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1))
      }, typingSpeed)
    } else if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && displayText.length > "I want to ".length) {
      timer = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1))
      }, typingSpeed)
    } else if (isDeleting && displayText.length === "I want to ".length) {
      setIsDeleting(false)
      setPromptIndex((prev) => (prev + 1) % prompts.length)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, promptIndex, prompts])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const isDisabled = !query.trim()

  return (
    <div className="max-w-3xl mx-auto p-6">
      <form 
        onSubmit={handleSubmit}
        className="relative mb-4 p-3 border rounded-3xl shadow-md transition-all duration-200 ease-in-out border-gray-300 hover:border-gray-400"
        style={{ backgroundColor: "#FAFAF7" }}
      >
        <textarea
          ref={textareaRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={displayText || "I want to build a meal planning"}
          className="w-full pr-12 rounded-md px-2 py-2 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none resize-none overflow-y-auto"
          style={{ minHeight: '110px', maxHeight: '192px', backgroundColor: 'transparent' }}
          autoFocus
        />
        <button
          type="submit"
          className={`absolute bottom-3 right-3 w-[34px] h-[34px] flex items-center justify-center text-white rounded-[12px] transition-all duration-200 ease-in-out ${
            isDisabled 
              ? 'bg-orange-300 cursor-default' 
              : 'bg-orange-500 hover:bg-orange-600 cursor-pointer'
          }`}
          aria-label="Send message"
          disabled={isDisabled}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 384 512"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </form>

      {/* Bottom Controls */}
      <div className="flex justify-between items-center">
        {/* Brainstorm Ideas Button */}
        <button
          type="button"
          className="flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 bg-gradient-to-b from-white to-gray-100 hover:bg-gray-100 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-full shadow-sm transition-all duration-200 ease-in-out z-10"
          aria-label="Brainstorm ideas"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 256 256"
            className="w-3.5 h-3.5 lg:w-4 lg:h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
          </svg>
          <span className="text-xs lg:text-sm font-medium">Brainstorm ideas</span>
        </button>

        {/* Privacy Mode Toggle */}
        <div className="relative inline-block">
          <div className="flex items-center gap-1.5 lg:gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gray-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M244,104H219.21L175.82,44.24a20,20,0,0,0-31.61-.94L131.39,58.16c-.1.11-.2.23-.29.35a4,4,0,0,1-6.2,0c-.09-.12-.19-.24-.29-.35L111.79,43.3a20,20,0,0,0-31.61.94L36.79,104H12a12,12,0,0,0,0,24H244a12,12,0,0,0,0-24ZM96.62,62.45l9.69,11.24a28,28,0,0,0,43.38,0l9.69-11.24L189.55,104H66.45ZM180,140a40.07,40.07,0,0,0-38.16,28H114.16a40,40,0,1,0,0,24h27.68A40,40,0,1,0,180,140ZM76,196a16,16,0,1,1,16-16A16,16,0,0,1,76,196Zm104,0a16,16,0,1,1,16-16A16,16,0,0,1,180,196Z"></path>
            </svg>
            <span className="mr-0.5 lg:mr-1 text-xs lg:text-sm font-medium text-gray-700">Privacy mode</span>
            <button
              type="button"
              onClick={() => setPrivacyMode(!privacyMode)}
              className={`relative inline-flex h-5 w-9 lg:h-6 lg:w-11 items-center rounded-lg transition-colors duration-200 ease-in-out focus:outline-none ${
                privacyMode ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label="Toggle privacy mode"
              aria-pressed={privacyMode}
            >
              <span className="sr-only">Enable privacy mode</span>
              <span
                className={`inline-block h-3.5 w-3.5 lg:h-4 lg:w-4 transform rounded-md bg-white shadow-sm transition-transform duration-200 ease-in-out ${
                  privacyMode ? "translate-x-4 lg:translate-x-5" : "translate-x-0.5 lg:translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}