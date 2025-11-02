"use client"

export default function WorkflowSidebar() {

  return (
    <div className="relative flex flex-col items-center gap-1 w-48">
      {/* Market Research Circle - smaller and transparent */}
      <div className="relative w-32 h-32">
        <div 
          className="absolute inset-0 rounded-full flex items-center justify-center border-2 border-yellow-200 shadow-lg"
          style={{ backgroundColor: 'rgba(254, 243, 199, 0.5)' }}
        >
          <span className="text-xs font-semibold text-center px-3" style={{ color: '#797977' }}>
            Market<br />research
          </span>
        </div>
        
        {/* AI Arrow - diagonal, tip inside circle, base outside - mirrored from build product */}
        <div className="absolute top-1/2 left-1/2 animate-lightning">
          {/* Arrow SVG - mirrored */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 40 40"
            style={{ transform: 'translate(-50%, -50%) scaleX(-1)' }}
          >
            <path 
              d="M 8 8 L 32 20 L 20 22 L 18 32 Z"
              fill="#d97059"
            />
          </svg>

          {/* AI Label - moves with arrow */}
          <div className="absolute top-3 right-3">
            <div 
              className="px-2 py-0.5 rounded-md shadow-lg" 
              style={{ backgroundColor: 'rgba(217, 112, 89, 0.9)' }}
            >
              <span className="text-[10px] font-semibold text-white">AI</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes lightning {
          0% {
            transform: translate(0, 0);
          }
         50% {  
           transform: translate(-60px, 60px); /* down-left along a straight anti-diagonal */
        }
         100% {
            transform: translate(0, 0);
          }
        }
        .animate-lightning {
          animation: lightning 6s ease-in-out infinite;
        }
      `}</style>

      {/* Dotted connecting line with square dots */}
      <div className="w-px h-6 my-1 relative flex items-center justify-center">
        <svg 
          className="absolute pointer-events-none" 
          width="3" 
          height="24" 
          viewBox="0 0 3 24"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <rect
              key={i}
              x="0.5"
              y={i * 6 + 1}
              width="2"
              height="2"
              fill="#d0d0d0"
              rx="0"
              style={{ opacity: 0.6 }}
            />
          ))}
        </svg>
      </div>

      {/* Sources Box - smaller and transparent */}
      <div shrink-0
        className="w-40 rounded-lg p-2.5 border border-gray-300/50 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(243, 244, 246, 0.5)' }}
      >
        <div className="text-xs font-medium text-gray-700 mb-2.5">Sources</div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.012 4.87-3.882 0-7.012-2.176-7.012-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
            </div>
            <div className="flex-1 h-1 bg-gray-300/60 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="flex-1 h-1 bg-gray-300/60 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-500 rounded flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
              </svg>
            </div>
            <div className="flex-1 h-1 bg-gray-300/60 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
