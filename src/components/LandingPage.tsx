import { useState } from 'react'
import characterImg from '../assets/character.png'

interface Props {
  onNavigateToEducation: () => void
  onCharacterClick: () => void
}

/*  STARTUP TIMING (seconds)
    0.0 → 0.6   FAIZAN slides down
    0.0 → 0.6   SHAIKH slides up        (parallel)
    0.7 → 1.2   Character pops in
    1.3 → 1.7   "CLICK ME!" pops in
    1.8 → 2.4   PORTFOLIO drops in       */

export default function LandingPage({ onNavigateToEducation, onCharacterClick }: Props) {
  const [dropping, setDropping] = useState(false)   // mid-drop animation
  const [dropped, setDropped] = useState(false)     // resting at bottom, bouncing
  const [flyingRight, setFlyingRight] = useState(false)
  const [charHover, setCharHover] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#F0EBE0', fontFamily: "'Anton', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between">

        {/* HOME — single orange box [↖ + H], then [OME] outside, all stuck to TOP */}
        <button
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {/* single orange box: arrow + H share the same container — no seam */}
          <span
            className="flex items-start"
            style={{
              backgroundColor: '#D4623B',
              paddingTop: '7px',
              paddingBottom: '20px',
              paddingLeft: '12px',
              paddingRight: '0',
              gap: '8px',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path
                d="M16 16L2 2M2 2V14M2 2H14"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="square"
              />
            </svg>
            <span
              style={{
                color: '#1A1A1A',
                fontFamily: "'Anton', sans-serif",
                fontSize: '1.125rem',
                letterSpacing: '0.12em',
                lineHeight: 1,
              }}
            >
              H
            </span>
          </span>

          {/* OME outside — paddingTop matches box's paddingTop so tops align */}
          <span
            style={{
              color: '#1A1A1A',
              fontFamily: "'Anton', sans-serif",
              fontSize: '1.125rem',
              letterSpacing: '0.12em',
              lineHeight: 1,
              paddingTop: '7px',
              paddingRight: '20px',
            }}
          >
            OME
          </span>
        </button>

        {/* RESUME — "RESUM" outside, "E + arrow" in orange box, zero gap, stuck to bottom */}
        <button
          className="flex items-end transition-opacity hover:opacity-80 active:opacity-60"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {/* RESUM outside — pr-0 so it butts up against the box (letter-spacing on M provides the natural inter-letter gap) */}
          <span
            style={{
              color: '#1A1A1A',
              fontFamily: "'Anton', sans-serif",
              fontSize: '1.125rem',
              letterSpacing: '0.12em',
              lineHeight: 1,
              paddingBottom: '6px',
              paddingLeft: '20px',
              paddingRight: '0',
            }}
          >
            RESUM
          </span>
          {/* orange box: E + arrow, letters at the bottom */}
          <span
            className="flex items-end gap-1"
            style={{
              backgroundColor: '#D4623B',
              paddingTop: '20px',
              paddingBottom: '6px',
              paddingLeft: '3px',
              paddingRight: '14px',
            }}
          >
            <span
              style={{
                color: '#1A1A1A',
                fontFamily: "'Anton', sans-serif",
                fontSize: '1.125rem',
                letterSpacing: '0.12em',
                lineHeight: 1,
              }}
            >
              E
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 18 18"
              fill="none"
              style={{ marginBottom: '1px', flexShrink: 0 }}
            >
              <path
                d="M2 2L16 16M16 16V4M16 16H4"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="square"
              />
            </svg>
          </span>
        </button>
      </nav>

      {/* ── FAIZAN — slides down from off-screen ── */}
      <div
        className="absolute inset-x-0 flex justify-center items-start select-none pointer-events-none"
        style={{ top: 0, zIndex: 1 }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(72px, 16.5vw, 275px)',
            color: '#1A1A1A',
            lineHeight: 0.88,
            letterSpacing: '-0.01em',
            animation: 'slide-down-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          FAIZAN
        </span>
      </div>

      {/* ── SHAIKH — slides up from off-screen ── */}
      <div
        className="absolute inset-x-0 flex justify-center items-end select-none pointer-events-none"
        style={{ bottom: -1, zIndex: 1 }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(72px, 16.5vw, 275px)',
            color: '#D4623B',
            lineHeight: 0.8,
            letterSpacing: '-0.01em',
            animation: 'slide-up-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          SHAIKH
        </span>
      </div>

      {/* ── CHARACTER (clickable) — pops in after text ── */}
      <div
        className="absolute select-none"
        style={{
          top: '-40vh',
          height: '135vh',
          left: '59%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          animation: 'pop-in 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) 0.7s both',
        }}
        onMouseEnter={() => setCharHover(true)}
        onMouseLeave={() => setCharHover(false)}
        onClick={() => setShowAbout(true)}
      >
        {/* Manga speed-lines burst behind character on hover */}
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '300vmax',
            height: '300vmax',
            transform: 'translate(-50%, -50%)',
            opacity: charHover ? 0.45 : 0,
            transition: 'opacity 0.3s',
            pointerEvents: 'none',
            background: `repeating-conic-gradient(
              from 0deg,
              transparent 0deg 8deg,
              #D4623B 8deg 9deg
            )`,
            maskImage: 'radial-gradient(circle, transparent 12%, black 20%, transparent 50%)',
            WebkitMaskImage: 'radial-gradient(circle, transparent 12%, black 20%, transparent 50%)',
          }}
        />

        <img
          src={characterImg}
          alt="Faizan Shaikh manga character"
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            position: 'relative',
            transition: 'transform 0.3s ease, filter 0.3s ease',
            transform: charHover ? 'scale(1.04)' : 'scale(1)',
            filter: charHover ? 'drop-shadow(0 0 18px rgba(212,98,59,0.45))' : 'none',
          }}
        />
      </div>

      {/* ── "CLICK ME!" manga callout — pops in after character ── */}
      <div
        className="absolute select-none pointer-events-none"
        style={{
          top: '22%',
          left: '72%',
          zIndex: 11,
          animation: 'pop-in-callout 0.4s cubic-bezier(0.34, 1.4, 0.64, 1) 1.3s both',
        }}
      >
        {/* Inner wrapper for the bob */}
        <div style={{ animation: 'callout-bob 1.8s ease-in-out 1.7s infinite' }}>
          <div style={{
            position: 'relative',
            backgroundColor: '#1A1A1A',
            color: '#EDE8DF',
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(10px, 1.1vw, 16px)',
            letterSpacing: '0.18em',
            padding: '8px 16px',
            transform: 'rotate(3deg)',
            boxShadow: '3px 3px 0 #D4623B',
            whiteSpace: 'nowrap',
          }}>
            CLICK ME!
            {/* Arrow pointing left toward character */}
            <svg
              width="28"
              height="16"
              viewBox="0 0 28 16"
              fill="none"
              style={{
                position: 'absolute',
                left: '-24px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <path d="M28 8H4M4 8L12 1M4 8L12 15" stroke="#D4623B" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── HANDWRITTEN "ABOUT ME" ── */}
      {showAbout && (() => {
        const lines = [
          { text: 'About Me', heading: true },
          { text: 'Full-stack engineer with an ownership' },
          { text: 'mentality who loves transforming complex' },
          { text: 'business problems into scalable technical' },
          { text: 'solutions. Deep fascination with AI' },
          { text: 'integration and building systems that' },
          { text: 'handle massive scale. Energized by' },
          { text: 'fast-paced environments where I can ship' },
          { text: 'features that directly impact millions' },
          { text: 'of users daily.' },
        ]
        const lineDur = 0.6   // seconds per line
        const lineGap = 0.15  // overlap between lines
        return (
          <div
            className="select-none pointer-events-none"
            style={{
              position: 'absolute',
              top: '26%',
              left: '71%',
              zIndex: 12,
              maxWidth: 'clamp(200px, 18vw, 300px)',
            }}
          >
            {lines.map((line, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: line.heading
                    ? 'clamp(22px, 2vw, 36px)'
                    : 'clamp(12px, 1vw, 17px)',
                  fontWeight: line.heading ? 700 : 400,
                  color: line.heading ? '#D4623B' : '#1A1A1A',
                  lineHeight: line.heading ? 1.6 : 1.45,
                  whiteSpace: 'nowrap',
                  animation: `handwrite ${lineDur}s cubic-bezier(0.25, 0, 0.4, 1) ${i * (lineDur - lineGap)}s both`,
                }}
              >
                {line.text}
              </div>
            ))}
          </div>
        )
      })()}

      {/* ── WELCOME TEXT — exact centre of screen ── */}
      <div
        className="absolute pointer-events-none select-none z-20"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-70%, -50%)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        <p
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(10px, 1.1vw, 16px)',
            color: '#1A1A1A',
            letterSpacing: '0.18em',
            lineHeight: 1.3,
            textTransform: 'uppercase',
          }}
        >
          Welcome to
        </p>
        <p
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(14px, 1.6vw, 24px)',
            color: '#D4623B',
            letterSpacing: '0.14em',
            lineHeight: 1.1,
            textTransform: 'uppercase',
          }}
        >
          My Manga
        </p>
      </div>

      {/* ── PORTFOLIO button — drops from top with g-force after everything else ── */}
      <div
        className="absolute z-20"
        style={{
          left: 'clamp(28px, 32vw, 240px)',
          top: '48%',
          transform: (dropped || flyingRight) ? 'translateY(36vh)' : 'translateY(0)',
        }}
      >
        <button
          className={`px-6 py-3 tracking-widest cursor-pointer${
            flyingRight ? ' gforce-right'
            : dropping  ? ' gforce-drop'
            : dropped   ? ' bounce-idle'
            : ''
          }`}
          style={{
            backgroundColor: '#D4623B',
            color: '#1A1A1A',
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(11px, 1.1vw, 15px)',
            letterSpacing: '0.15em',
            animation: (!dropping && !dropped && !flyingRight)
              ? 'gforce-enter 0.7s cubic-bezier(0.22, 1, 0.36, 1) 1.8s both'
              : undefined,
          }}
          onMouseEnter={() => { if (!dropping && !dropped && !flyingRight) setDropping(true) }}
          onClick={() => { if (!flyingRight) { setDropping(false); setDropped(false); setFlyingRight(true) } }}
          onAnimationEnd={(e) => {
            if (e.animationName === 'gforce-drop') {
              setDropping(false)
              setDropped(true)
            } else if (e.animationName === 'gforce-right') {
              onNavigateToEducation()
            }
          }}
        >
          PORTFOLIO -&gt;
        </button>
      </div>
    </div>
  )
}
