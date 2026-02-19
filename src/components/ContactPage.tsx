interface Props {
  onBack: () => void
  onNavigateToPrevious: () => void
}

const CONTACTS = [
  {
    label: 'EMAIL',
    value: 'faizan.n.shaikh404@gmail.com',
    href: 'mailto:faizan.n.shaikh404@gmail.com',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4623B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13L2 4" />
      </svg>
    ),
  },
  {
    label: 'PHONE',
    value: '+1 (631) 782-5782',
    href: 'tel:+16317825782',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4623B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: 'LINKEDIN',
    value: 'faizanshaikh0303',
    href: 'https://www.linkedin.com/in/faizanshaikh0303/',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#D4623B">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'RESUME',
    value: 'Download Resume',
    href: 'https://drive.google.com/file/d/1vYF89xaNIOzs325zhXrEQysjhB1qriVY/view?usp=sharing',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4623B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
]

export default function ContactPage({ onBack, onNavigateToPrevious }: Props) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: '#F0EBE0' }}
    >
      {/* ── TOP NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between">
        {/* ← PROJECTS (previous page) */}
        <button
          onClick={onNavigateToPrevious}
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span className="flex items-start" style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '20px', paddingLeft: '12px', paddingRight: '0', gap: '8px' }}>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M16 9H2M2 9L9 2M2 9L9 16" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
            <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>P</span>
          </span>
          <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1, paddingTop: '7px', paddingRight: '20px' }}>ROJECTS</span>
        </button>

        {/* Center home icon */}
        <button
          onClick={onBack}
          className="transition-opacity hover:opacity-80 active:opacity-60"
          style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', lineHeight: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5" />
            <path d="M19 13v6a1 1 0 01-1 1h-4v-5H10v5H6a1 1 0 01-1-1v-6" />
          </svg>
        </button>

        {/* Invisible placeholder to balance the 3-column layout */}
        <div style={{ visibility: 'hidden' }}>
          <span className="flex items-start" style={{ paddingTop: '7px', paddingBottom: '20px', paddingLeft: '12px', paddingRight: '12px' }}>
            <span style={{ fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>PLACEHOLDER</span>
          </span>
        </div>
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex items-center justify-center" style={{ paddingTop: '44px', position: 'relative' }}>

        {/* Speed-line background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          background: 'repeating-conic-gradient(from 0deg at 50% 50%, #E4DFD4 0deg 1.2deg, #F0EBE0 1.2deg 8deg)',
        }} />

        {/* Halftone top-left */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '30%', height: '35%',
          backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.12) 1.1px, transparent 1.1px)',
          backgroundSize: '8px 8px',
          maskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 0%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Halftone bottom-right */}
        <div style={{
          position: 'absolute', bottom: 0, right: 0, width: '25%', height: '25%',
          backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.1) 1.1px, transparent 1.1px)',
          backgroundSize: '8px 8px',
          maskImage: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.7) 0%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.7) 0%, transparent 60%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Ghost text */}
        <div style={{
          position: 'absolute', bottom: '2%', left: '50%', transform: 'translateX(-50%)',
          fontFamily: "'Anton', sans-serif", fontSize: 'clamp(48px, 8vw, 120px)',
          color: 'rgba(26,26,26,0.04)', letterSpacing: '0.1em',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0,
        }}>
          CONTACT
        </div>

        {/* Main card area */}
        <div style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: '700px' }}>

          {/* Title — manga impact style */}
          <div style={{
            textAlign: 'center',
            marginBottom: 'clamp(20px, 3vw, 40px)',
            animation: 'manga-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both',
          }}>
            <h1 style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(32px, 5vw, 64px)',
              color: '#1A1A1A',
              letterSpacing: '0.08em',
              lineHeight: 1,
              margin: 0,
            }}>
              GET IN <span style={{ color: '#D4623B' }}>TOUCH</span>
            </h1>
            <p style={{
              fontFamily: "'Comic Neue', cursive",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(12px, 1.2vw, 18px)',
              color: 'rgba(26,26,26,0.5)',
              marginTop: '8px',
            }}>
              The next arc starts with a message...
            </p>
          </div>

          {/* Contact panels — manga panel grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(6px, 1vw, 12px)',
            border: '3px solid #1A1A1A',
            padding: '3px',
            backgroundColor: '#1A1A1A',
          }}>
            {CONTACTS.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FAF6EE',
                  padding: 'clamp(16px, 2.5vw, 32px) clamp(10px, 1.5vw, 20px)',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  animation: `${i < 2 ? 'drop-slam' : 'rise-slam'} 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.5 + i * 0.15}s both`,
                }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#F0EBE0' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#FAF6EE' }}
              >
                {/* Panel number */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  backgroundColor: 'rgba(26,26,26,0.82)',
                  borderLeft: '2px solid #D4623B',
                  borderBottom: '2px solid #D4623B',
                  padding: '2px 6px',
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 'clamp(7px, 0.65vw, 10px)',
                  color: '#F0EBE0',
                  letterSpacing: '0.1em',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div style={{ marginBottom: '12px' }}>
                  {c.icon}
                </div>

                {/* Label */}
                <div style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: 'clamp(11px, 1.1vw, 16px)',
                  color: '#1A1A1A',
                  letterSpacing: '0.15em',
                  marginBottom: '4px',
                }}>
                  {c.label}
                </div>

                {/* Value */}
                <div style={{
                  fontFamily: "'Comic Neue', cursive",
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(10px, 0.9vw, 14px)',
                  color: '#D4623B',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                }}>
                  {c.value}
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Thought bubble — bottom right, trail points toward top-left (panels) */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(24px, 5vw, 60px)',
          right: 'clamp(24px, 5vw, 60px)',
          zIndex: 2,
          animation: 'bubble-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both',
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              backgroundColor: '#FAF6EE',
              border: '3px solid #1A1A1A',
              borderRadius: '50%',
              padding: 'clamp(14px, 2vw, 24px) clamp(28px, 4vw, 52px)',
              boxShadow: '4px 4px 0px #1A1A1A',
              textAlign: 'center',
            }}>
              <p style={{
                fontFamily: "'Comic Neue', cursive",
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(13px, 1.2vw, 20px)',
                color: '#1A1A1A',
                margin: 0,
                lineHeight: 1.4,
              }}>
                Let's write the next chapter <span style={{ color: '#D4623B' }}>together!</span>
              </p>
            </div>
            {/* Thought trail — pointing toward top-left */}
            <div style={{ position: 'absolute', top: '-14px', left: '20px' }}>
              <div style={{ position: 'absolute', width: 14, height: 14, borderRadius: '50%', backgroundColor: '#FAF6EE', border: '3px solid #1A1A1A', top: 0, left: 0 }} />
              <div style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FAF6EE', border: '3px solid #1A1A1A', top: -14, left: -12 }} />
              <div style={{ position: 'absolute', width: 6, height: 6, borderRadius: '50%', backgroundColor: '#FAF6EE', border: '3px solid #1A1A1A', top: -26, left: -22 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
