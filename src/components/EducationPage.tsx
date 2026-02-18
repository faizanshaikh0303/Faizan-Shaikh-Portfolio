import { useState } from 'react'
import edu1 from '../assets/edu1.webp'
import edu2 from '../assets/edu2.webp'

const EDUCATION = [
  {
    id: 1 as const,
    image: edu1,
    label: 'KSU',
    school: 'Kennesaw State University',
    degree: 'Master of Science',
    field: 'Computer Science',
    period: 'Aug 2024 – May 2026',
    gpa: '4.0 / 4.0',
    courses: [
      'Artificial Intelligence',
      'Machine Learning',
      'Natural Language Processing',
      'Deep Learning',
      'Information Retrieval',
      'Computer Vision',
      'AI and Robotics',
    ],
  },
  {
    id: 2 as const,
    image: edu2,
    label: 'SBU',
    school: 'Stony Brook University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    period: 'Aug 2017 – May 2021',
    gpa: '3.6 / 4.0',
    courses: [
      'Software Engineering',
      'Object Oriented Programming',
      'Data Structures & Algorithms',
      'Databases',
      'Networking',
      'Low Level Programming (C)',
    ],
  },
]

type Entry = typeof EDUCATION[0]

interface Props {
  onBack: () => void
  onNavigateToExperience: () => void
}

export default function EducationPage({ onBack, onNavigateToExperience }: Props) {
  const [selected, setSelected] = useState<1 | 2 | null>(null)
  const toggle = (id: 1 | 2) => setSelected(prev => (prev === id ? null : id))

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: '#F0EBE0', fontFamily: "'Anton', sans-serif" }}
    >
      {/* ── TOP NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between">
        {/* ← HOME (back to landing) */}
        <button
          onClick={() => { setSelected(null); onBack() }}
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span className="flex items-start" style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '20px', paddingLeft: '12px', paddingRight: '0', gap: '8px' }}>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M16 9H2M2 9L9 2M2 9L9 16" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
            <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>H</span>
          </span>
          <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1, paddingTop: '7px', paddingRight: '20px' }}>OME</span>
        </button>

        {/* Center home icon */}
        <button
          onClick={() => { setSelected(null); onBack() }}
          className="transition-opacity hover:opacity-80 active:opacity-60"
          style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', lineHeight: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5" />
            <path d="M19 13v6a1 1 0 01-1 1h-4v-5H10v5H6a1 1 0 01-1-1v-6" />
          </svg>
        </button>

        <button
          onClick={() => { setSelected(null); onNavigateToExperience() }}
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1, paddingTop: '7px', paddingLeft: '20px', paddingRight: '0' }}>EXPERIENC</span>
          <span className="flex items-start" style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '20px', paddingLeft: '3px', paddingRight: '12px', gap: '6px' }}>
            <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>E</span>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M2 9H16M16 9L9 2M16 9L9 16" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </span>
        </button>
      </nav>

      {/* ── TWO MANGA PANELS ── */}
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', paddingTop: '44px', gap: '4px' }}>
        {/* Panel 1 — KSU — slams in from left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', animation: 'slam-from-left 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both' }}>
          <MangaPanel entry={EDUCATION[0]} active={selected === 1} onToggle={() => toggle(1)} flip={false} />
        </div>
        {/* Panel 2 — Stony Brook — slams in from right */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', animation: 'slam-from-right 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.85s both' }}>
          <MangaPanel entry={EDUCATION[1]} active={selected === 2} onToggle={() => toggle(2)} flip={true} />
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────────────────────
   MangaPanel — one full-width strip with large image + deco side
   ───────────────────────────────────────────────────────────────────────────── */
function MangaPanel({ entry, active, onToggle, flip }: {
  entry: Entry; active: boolean; onToggle: () => void; flip: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const imgSide  = flip ? 'right' : 'left'
  const decoSide = flip ? 'left'  : 'right'

  return (
    <div
      style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        /* misalign rows in opposite directions */
        transform: flip ? 'translateX(2vw)' : 'translateX(-2vw)',
        borderTop: flip ? '3px solid #1A1A1A' : 'none',
      }}
    >
      {/* ── Speed-line background radiating from image side ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `repeating-conic-gradient(from 0deg at ${flip ? '68%' : '32%'} 50%, #E6E1D6 0deg 1.2deg, #F0EBE0 1.2deg 7.5deg)`,
      }} />

      {/* ── Halftone dots corner (opposite side from image) ── */}
      <div style={{
        position: 'absolute',
        [decoSide]: 0, bottom: 0,
        width: '38%', height: '55%',
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.13) 1.2px, transparent 1.2px)',
        backgroundSize: '10px 10px',
        maskImage: `linear-gradient(to ${imgSide}, transparent 0%, rgba(0,0,0,0.9) 70%)`,
        WebkitMaskImage: `linear-gradient(to ${imgSide}, transparent 0%, rgba(0,0,0,0.9) 70%)`,
      }} />

      {/* ── LARGE IMAGE (55% width, near full height) ── */}
      <div style={{
        position: 'absolute',
        [imgSide]: '3%',
        top: '6%', bottom: '6%',
        width: '57%',
        border: '3px solid #1A1A1A',
        boxShadow: flip ? '-6px 6px 0 #D4623B' : '6px 6px 0 #D4623B',
        overflow: 'hidden',
        zIndex: 2,
        animation: `${flip ? 'slam-from-right' : 'slam-from-left'} 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.8s both`,
      }}>
        <img
          src={entry.image}
          alt={entry.school}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        {active && <ChalkOverlay key={entry.id} entry={entry} />}
      </div>

      {/* ── DECO SIDE ── */}
      <div style={{
        position: 'absolute',
        [decoSide]: 0,
        top: 0, bottom: 0,
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4% 5%',
        zIndex: 3,
      }}>

        {/* Ghost panel number */}
        <span style={{
          position: 'absolute',
          top: '4%',
          [flip ? 'left' : 'right']: '6%',
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(70px, 11vw, 140px)',
          color: 'rgba(26,26,26,0.06)',
          lineHeight: 1,
          userSelect: 'none',
          letterSpacing: '-0.04em',
        }}>
          {entry.id === 1 ? '01' : '02'}
        </span>

        {/* Floating stars */}
        <Spark style={{ top: '12%', [flip ? 'right' : 'left']: '8%' }} size={22} />
        <Spark style={{ top: '28%', [flip ? 'left' : 'right']: '12%' }} size={14} />
        <Spark style={{ bottom: '18%', [flip ? 'right' : 'left']: '18%' }} size={18} />
        <Spark style={{ bottom: '32%', [flip ? 'left' : 'right']: '5%' }} size={10} />

        {/* Degree badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#1A1A1A',
          color: '#F0EBE0',
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(7px, 0.68vw, 10px)',
          letterSpacing: '0.22em',
          padding: '4px 10px',
          marginBottom: '8px',
          alignSelf: 'flex-start',
          transform: `rotate(${flip ? '1.5deg' : '-1.5deg'})`,
          animation: 'manga-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.0s both',
        }}>
          ✦ {entry.degree.toUpperCase()} ✦
        </div>

        {/* Main nameplate button */}
        <button
          onClick={onToggle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(12px, 1.3vw, 18px)',
            letterSpacing: '0.12em',
            lineHeight: 1.15,
            animation: `${flip ? 'slam-from-left' : 'slam-from-right'} 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.1s both`,
            backgroundColor: active
              ? (hovered ? '#BF5230' : '#D4623B')
              : (hovered ? '#3A3A3A' : '#1A1A1A'),
            color: '#FFFFFF',
            border: `3px solid ${hovered ? '#D4623B' : '#1A1A1A'}`,
            boxShadow: hovered
              ? `${flip ? '-7px' : '7px'} 7px 0 #D4623B`
              : active
                ? `${flip ? '-4px' : '4px'} 4px 0 rgba(0,0,0,0.35)`
                : `${flip ? '-4px' : '4px'} 4px 0 #D4623B`,
            padding: '10px 16px',
            cursor: 'pointer',
            textAlign: 'left',
            transform: `rotate(${flip ? '2deg' : '-2deg'}) scale(${hovered ? 1.05 : 1})`,
            transition: 'background-color 0.15s, box-shadow 0.15s, transform 0.15s, border-color 0.15s',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {entry.school.toUpperCase()}
          <br />
          <span style={{
            display: 'block',
            fontFamily: 'sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(7px, 0.65vw, 10px)',
            letterSpacing: '0.12em',
            opacity: 0.75,
            marginTop: '3px',
          }}>
            {active ? '▸ CLICK TO CLOSE' : '▸ REVEAL COURSES'}
          </span>
        </button>

        {/* GPA badge */}
        <div style={{
          display: 'inline-flex',
          alignSelf: 'flex-end',
          marginTop: '10px',
          transform: `rotate(${flip ? '-2deg' : '2deg'})`,
          border: '2.5px solid #1A1A1A',
          backgroundColor: '#F0EBE0',
          padding: '4px 10px',
          boxShadow: '2px 2px 0 #1A1A1A',
          gap: '4px',
          alignItems: 'baseline',
          animation: 'manga-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both',
        }}>
          <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(7px, 0.65vw, 10px)', color: '#D4623B', letterSpacing: '0.15em' }}>GPA</span>
          <span style={{ fontFamily: "'Anton', sans-serif", fontSize: 'clamp(12px, 1.4vw, 20px)', color: '#1A1A1A', letterSpacing: '0.05em' }}>{entry.gpa}</span>
        </div>

        {/* Period text */}
        <p style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(10px, 0.95vw, 14px)',
          color: '#1A1A1A',
          opacity: 0.6,
          letterSpacing: '0.12em',
          marginTop: '6px',
          alignSelf: 'flex-start',
        }}>
          {entry.period}
        </p>
      </div>

      {/* ── Corner action burst (near nameplate) ── */}
      <ActionBurst
        style={{
          position: 'absolute',
          [decoSide]: flip ? '34%' : '34%',
          top: '8%',
          zIndex: 4,
          animation: 'manga-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.15s both',
        }}
        active={active}
      />
    </div>
  )
}

/* ── Star / sparkle decoration ── */
function Spark({ style, size }: { style: React.CSSProperties; size: number }) {
  return (
    <span style={{
      position: 'absolute',
      fontSize: `${size}px`,
      color: '#D4623B',
      userSelect: 'none',
      pointerEvents: 'none',
      lineHeight: 1,
      ...style,
    }}>
      ✦
    </span>
  )
}

/* ── Manga action burst (click indicator) ── */
function ActionBurst({ style, active }: { style: React.CSSProperties; active: boolean }) {
  const tips = 8
  const r1 = 18, r2 = 26
  const points = Array.from({ length: tips * 2 }, (_, i) => {
    const angle = (i * Math.PI) / tips - Math.PI / 2
    const r = i % 2 === 0 ? r2 : r1
    return `${50 + r * Math.cos(angle)}% ${50 + r * Math.sin(angle)}%`
  }).join(', ')

  return (
    <div style={{
      width: 72, height: 72,
      clipPath: `polygon(${points})`,
      backgroundColor: active ? '#D4623B' : '#1A1A1A',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'background-color 0.15s',
      ...style,
    }}>
      <span style={{
        fontFamily: "'Anton', sans-serif",
        fontSize: '13px',
        color: '#FFFFFF',
        letterSpacing: '0.05em',
        textAlign: 'center',
        lineHeight: 1.1,
        userSelect: 'none',
      }}>
        {active ? 'ON!' : 'TAP!'}
      </span>
    </div>
  )
}

/* ── Chalk writing overlay on the image ── */
function ChalkOverlay({ entry }: { entry: Entry }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'rgba(15, 40, 20, 0.82)',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(10px, 1.4vw, 18px) clamp(12px, 1.8vw, 22px)',
    }}>
      <p className="chalk-write" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 700, fontSize: 'clamp(13px, 1.4vw, 20px)', color: '#F5F5E0', animationDelay: '0s', lineHeight: 1.2 }}>
        {entry.degree} — {entry.field}
      </p>
      <p className="chalk-write" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600, fontSize: 'clamp(11px, 1.1vw, 16px)', color: '#D4C8A0', animationDelay: '0.06s', marginTop: '2px', lineHeight: 1.2 }}>
        {entry.school}
      </p>
      <p className="chalk-write" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 400, fontSize: 'clamp(9px, 0.9vw, 13px)', color: '#B0A880', animationDelay: '0.12s', marginTop: '1px' }}>
        {entry.period}&nbsp;&nbsp;·&nbsp;&nbsp;GPA: {entry.gpa}
      </p>
      <div className="chalk-write" style={{ borderTop: '1.5px solid rgba(245,245,200,0.35)', margin: 'clamp(5px, 0.8vh, 10px) 0', animationDelay: '0.18s' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px' }}>
        {entry.courses.map((course, i) => (
          <span
            key={course}
            className="chalk-write"
            style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600, fontSize: 'clamp(9px, 0.9vw, 13px)', color: '#F0ECD4', animationDelay: `${0.22 + i * 0.09}s`, whiteSpace: 'nowrap' }}
          >
            ✦ {course}
          </span>
        ))}
      </div>
    </div>
  )
}
