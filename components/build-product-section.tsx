"use client"

export default function BuildProductSection() {
  return (
    <>
      <div className="relative flex flex-col items-center gap-1 right-6">
        {/* Build Product Circle - smaller */}
        <div className="relative w-32 h-32">
          {/* Large green circle - transparent */}
          <div 
            className="absolute inset-0 rounded-full flex items-center justify-center border-2 border-green-100 shadow-lg"
            style={{ backgroundColor: 'rgba(217, 234, 215, 0.5)' }}
          >
            <span className="text-xs font-semibold text-center px-3" style={{ color: '#797977' }}>
              Build<br />product
            </span>
          </div>

          {/* Animated arrow and "You" box container */}
          <div className="absolute top-1/2 left-1/2 animate-lightning">
            {/* Arrow SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 40 40"
              className="-translate-x-1/2 -translate-y-1/2"
            >
              <path 
                d="M 8 8 L 32 20 L 20 22 L 18 32 Z"
                fill="#797977"
              />
            </svg>

            {/* "You" label - moves with arrow */}
            <div className="absolute top-3 left-3">
              <div 
                className="px-2 py-0.5 rounded-md shadow-lg" 
                style={{ backgroundColor: 'rgba(121, 121, 119, 0.9)' }}
              >
                <span className="text-[10px] font-semibold text-white">You</span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Plan Box - smaller and transparent */}
        <div 
          className="w-40 rounded-lg p-2.5 border border-gray-300/50 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
        >
          <div
            className="flex items-center bg-transparent justify-between w-full py-1.5 px-2 rounded-lg transition mb-1.5"
            style={{ color: 'rgb(121, 121, 119,0.5)' }}
          >
            <span className="text-xs font-medium text-gray-700">Development plan</span>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              className="w-3 h-3"
              style={{ color: 'rgb(121, 121, 119,0.5)' }}
            >
              <path 
                d="M6 9l6 6 6-6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-gray-200/60 rounded-full overflow-hidden">
            <div 
              className="h-full w-1/4 rounded-full" 
              style={{ backgroundColor: '#CF9887' }} 
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes lightning {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(35px, 0);
          }
          75% {
            transform: translate(20px, 20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .animate-lightning {
          animation: lightning 6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
