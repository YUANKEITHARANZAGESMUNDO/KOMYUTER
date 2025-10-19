export function Bracelet3D({ code }: { code: string }) {
  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {/* 3D Bracelet */}
      <div className="relative">
        {/* Bracelet Band */}
        <div className="relative w-40 h-32">
          {/* Main bracelet circle */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
              boxShadow: `
                inset -8px -8px 16px rgba(0, 0, 0, 0.3),
                inset 8px 8px 16px rgba(255, 255, 255, 0.1),
                0 8px 24px rgba(59, 130, 246, 0.4),
                0 4px 12px rgba(0, 0, 0, 0.2)
              `,
              transform: 'rotateX(60deg) rotateZ(-20deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Inner band details */}
            <div 
              className="absolute inset-2 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.4)'
              }}
            />
            
            {/* Bracelet texture lines */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-0.5 bg-white/10"
                  style={{
                    top: `${12.5 * (i + 1)}%`,
                    left: '10%',
                    right: '10%',
                  }}
                />
              ))}
            </div>
          </div>

          {/* RFID Chip Center */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-10 rounded-lg z-10"
            style={{
              background: 'linear-gradient(135deg, #f3f4f6 0%, #d1d5db 100%)',
              boxShadow: `
                0 2px 8px rgba(0, 0, 0, 0.3),
                inset 0 1px 2px rgba(255, 255, 255, 0.8),
                inset 0 -1px 2px rgba(0, 0, 0, 0.2)
              `,
              transform: 'rotateX(60deg) rotateZ(-20deg) translateZ(8px)',
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Circuit pattern on chip */}
            <div className="absolute inset-1 flex items-center justify-center">
              <svg className="w-12 h-6" viewBox="0 0 48 24">
                {/* Circuit lines */}
                <path
                  d="M12 12 L36 12 M24 4 L24 20 M16 8 L32 8 M16 16 L32 16"
                  stroke="#9ca3af"
                  strokeWidth="0.5"
                  fill="none"
                />
                {/* Chip contacts */}
                <circle cx="12" cy="12" r="1.5" fill="#6b7280" />
                <circle cx="36" cy="12" r="1.5" fill="#6b7280" />
                <circle cx="24" cy="8" r="1.5" fill="#6b7280" />
                <circle cx="24" cy="16" r="1.5" fill="#6b7280" />
              </svg>
            </div>
            
            {/* NFC symbol */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px]">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13v6l5.25 3.15.75-1.23-4.5-2.67V7H11z"/>
              </svg>
            </div>
          </div>

          {/* Clasp/Lock mechanism */}
          <div 
            className="absolute top-0 right-4 w-4 h-6 rounded"
            style={{
              background: 'linear-gradient(90deg, #94a3b8 0%, #64748b 100%)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              transform: 'rotateX(60deg) rotateZ(-20deg) translateZ(4px)',
            }}
          >
            <div className="absolute inset-0.5 bg-slate-700 rounded-sm" />
          </div>

          {/* Light reflections */}
          <div 
            className="absolute top-4 left-8 w-12 h-8 rounded-full opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)',
              transform: 'rotateX(60deg) rotateZ(-20deg)',
              filter: 'blur(4px)'
            }}
          />
        </div>

        {/* Shadow */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-36 h-12 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.4) 0%, transparent 70%)',
            filter: 'blur(8px)'
          }}
        />
      </div>

      {/* Code Display */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-md">
        <p className="text-xs text-gray-600 mb-0.5">Bracelet Code</p>
        <p className="text-gray-800 text-center">{code}</p>
      </div>
    </div>
  );
}
