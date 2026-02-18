import { useState } from 'react'
import characterImg from '../assets/character.png'

interface Props {
  onNavigateToEducation: () => void
}

export default function LandingPage({ onNavigateToEducation }: Props) {
  const [dropping, setDropping] = useState(false)   // mid-drop animation
  const [dropped, setDropped] = useState(false)     // resting at bottom, bouncing
  const [flyingRight, setFlyingRight] = useState(false)

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

      {/* ── FAIZAN — top-edge flush with viewport top ── */}
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
          }}
        >
          FAIZAN
        </span>
      </div>

      {/* ── SHAIKH — bottom-edge flush with viewport bottom ── */}
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
          }}
        >
          SHAIKH
        </span>
      </div>

      {/* ── CHARACTER ──
          Horizontally: A is 5th letter, N is 6th letter in FAIZAN.
          Center between them ≈ 70% of viewport width.
          Vertically: character image has ~32% whitespace at top above the head.
          top: -25vh + height: 120vh → head appears at (-25 + 0.32×120) ≈ 13vh
          which lands inside the FAIZAN text area. Feet land at (-25+120) = 95vh
          near the bottom of SHAIKH. Overflow is clipped by parent overflow-hidden. */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: '-40vh',
          height: '135vh',
          left: '59%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}
      >
        <img
          src={characterImg}
          alt="Faizan Shaikh manga character"
          style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
        />
      </div>

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

      {/* ── PORTFOLIO button ──
          Wrapper: holds vertical offset (translateY 0 → 36vh when dropped/flying).
          Button: runs gforce-drop → stays bouncing at bottom → gforce-right on click. */}
      <div
        className="absolute z-20"
        style={{
          left: 'clamp(28px, 32vw, 240px)',
          top: '48%',
          /* When dropped/flying, wrapper is shifted down 36vh to match where
             the gforce-drop animation landed, so removing the animation class
             causes no visual snap. */
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
          }}
          onMouseEnter={() => { if (!dropping && !dropped && !flyingRight) setDropping(true) }}
          onClick={() => { if (!flyingRight) { setDropping(false); setDropped(false); setFlyingRight(true) } }}
          onAnimationEnd={(e) => {
            if (e.animationName === 'gforce-drop') {
              // Button reached bottom — lock wrapper in place and start bouncing
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
