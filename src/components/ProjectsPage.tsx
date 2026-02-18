import proj0 from '../assets/project0.png'
import proj1 from '../assets/project1.png'
import proj2 from '../assets/project2.png'
import proj3 from '../assets/project3.png'
import proj4 from '../assets/project4.png'
import proj5 from '../assets/project5.png'
import proj6 from '../assets/project6.png'
import proj7 from '../assets/project7.png'
import proj8 from '../assets/project8.png'

interface Props { onBack: () => void }

type Dir = 'left' | 'right' | 'top' | 'bottom'

interface PanelDef {
  img: string
  dir: Dir
  delay: number
  pos: { left: string; top: string; width: string; height: string }
  clip: string
  objPos?: string
  zIndex: number
}

/*  LAYOUT — explicit ~0.6% horizontal / ~1% vertical gaps everywhere
    so the screentone background shows between all panels.

    ┌──────────────────────┬─────────────────────────┬──────────┐
    │      MoveWise        │    Shef Companion        │          │
    ├────────┬─────────────┴─────────────────────────┤  CHAR    │
    │        │              RAG                       │  (right  │
    │  LOI   ├───────────┬──────────┬────────────────┤   strip) │
    │        │  InQuiz   │  Piano   │  City │  CtxRot│          │
    └────────┴───────────┴──────────┴───────┴────────┴──────────┘

    Horizontal gaps: 0.6%  between adjacent columns
    Vertical gaps:   1.0%  between adjacent rows
    Character strip: 20% on the right (gap 0.6% from content)
*/
const PANELS: PanelDef[] = [

  // ── 0 ─ CHARACTER — full-height RIGHT strip ────────────────────────────
  {
    img: proj0, zIndex: 5, dir: 'right', delay: 0,
    pos: { left: '80%', top: '0%', width: '20%', height: '100%' },
    clip: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
    objPos: 'center top',
  },

  // ── 1 ─ MOVEWISE — top-left (z=2 so it overlays RAG extension) ─────────
  {
    img: proj1, zIndex: 2, dir: 'top', delay: 0.7,
    pos: { left: '1%', top: '4%', width: '39%', height: '38%' },
    clip: 'polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)',
    objPos: 'center 30%',
  },

  // ── 2 ─ SHEF COMPANION — top-right (z=2 so it overlays RAG extension) ──
  {
    img: proj2, zIndex: 2, dir: 'top', delay: 1,
    pos: { left: '41%', top: '4%', width: '38.5%', height: '38%' },
    clip: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%)',
  },

  // ── 3 ─ LOI PARSER — tall left column (1% gap below top row) ───────────
  {
    img: proj5, zIndex: 2, dir: 'left', delay: 1.2,
    pos: { left: '1%', top: '40%', width: '20.4%', height: '59%' },
    clip: 'polygon(0% 8%, 100% 0%, 93% 100%, 0% 100%)',
  },

  // ── 4 ─ MULTI-TURN RAG — large center (0.6% gap from LOI, 1% from top) ─
  {
    img: proj3, zIndex: 1, dir: 'right', delay: 1.7,
    pos: { left: '22%', top: '34%', width: '57.5%', height: '28%' },
    clip: 'polygon(32% 2%, 100% 32%, 100% 100%, 0% 100%, 1% 19%)',
    objPos: 'center 15%',
  },

  // ── 5 ─ INQUIZITIVE — bottom-left small (1% gap below RAG) ────────────
  {
    img: proj7, zIndex: 1, dir: 'bottom', delay: 2.1,
    pos: { left: '21%', top: '64%', width: '13%', height: '32%' },
    clip: 'polygon(4% 4%, 100% 0%, 100% 100%, 0% 100%)',
  },

  // ── 6 ─ VIRTUAL PIANO — bottom small (0.6% gap from InQuiz) ───────────
  {
    img: proj8, zIndex: 1, dir: 'bottom', delay: 2.2,
    pos: { left: '34.6%', top: '64%', width: '12%', height: '32%' },
    clip: 'polygon(0% 0%, 100% 4%, 100% 100%, 0% 100%)',
  },

  // ── 7 ─ EMOTION DETECTOR — bottom small (0.6% gap from Piano) ──────────
  {
    img: proj6, zIndex: 1, dir: 'bottom', delay: 2.3,
    pos: { left: '47.2%', top: '64%', width: '12%', height: '32%' },
    clip: 'polygon(0% 4%, 100% 0%, 100% 100%, 0% 100%)',
  },

  // ── 8 ─ CONTEXT ROT MONITOR — bottom right (0.6% gap from City) ────────
  {
    img: proj4, zIndex: 1, dir: 'right', delay: 1.8,
    pos: { left: '59.8%', top: '64%', width: '19.6%', height: '36.5%' },
    clip: 'polygon(0% 4%, 100% 0%, 100% 100%, 0% 97%)',
    objPos: '25% center',
  },
]

const ANIM: Record<Dir, string> = {
  left:   'panel-from-left',
  right:  'panel-from-right',
  top:    'panel-from-top',
  bottom: 'panel-from-bottom',
}

/** Convert CSS clip-path polygon to SVG points string */
function clipToSvgPoints(clip: string): string {
  return clip
    .replace(/polygon\(/, '')
    .replace(/\)$/, '')
    .split(',')
    .map(pair => pair.trim().replace(/%/g, '').split(/\s+/).join(','))
    .join(' ')
}

function ProjectPanel({ def }: { def: PanelDef }) {
  return (
    <div
      className="group"
      style={{
        position: 'absolute',
        ...def.pos,
        zIndex: def.zIndex,
        clipPath: def.clip,
        overflow: 'hidden',
        cursor: 'pointer',
        animation: `${ANIM[def.dir]} 0.85s cubic-bezier(0.34, 1.15, 0.64, 1) ${def.delay}s both`,
      }}
    >
      <img
        src={def.img}
        alt=""
        style={{
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: def.objPos ?? 'center center',
          display: 'block',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {/* border that follows the tilted clip-path */}
      <svg
        className="opacity-0 group-hover:opacity-100"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          zIndex: 4, pointerEvents: 'none',
          transition: 'opacity 0.2s',
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon
          points={clipToSvgPoints(def.clip)}
          fill="none"
          stroke="#D4623B"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

export default function ProjectsPage({ onBack }: Props) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: '#F0EBE0', fontFamily: "'Anton', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between">
        <button
          onClick={onBack}
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
        <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.18em', color: '#1A1A1A', paddingTop: '7px', paddingRight: '24px' }}>
          PROJECTS
        </span>
      </nav>

      {/* ── MANGA PANEL GRID ── */}
      <div
        style={{
          position: 'absolute',
          top: '44px', left: 0, right: 0, bottom: 0,
          overflow: 'hidden',
          /* Manga screentone: warm cream + halftone dot grid + edge vignette */
          backgroundColor: '#ffffff',
          backgroundImage: [
            'radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.07) 100%)',
            'radial-gradient(circle, rgba(35,18,0,0.07) 1.2px, transparent 1.2px)',
          ].join(', '),
          backgroundSize: '100% 100%, 7px 7px',
        }}
      >
        {/* Ghost watermark */}
        <div style={{
          position: 'absolute', bottom: '1%', left: '50%', transform: 'translateX(-50%)',
          fontFamily: "'Anton', sans-serif", fontSize: 'clamp(38px, 6.5vw, 88px)',
          color: 'rgba(26,26,26,0.04)', letterSpacing: '0.1em',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0,
        }}>
          PROJECTS
        </div>

        {/* Spine label */}
        <div style={{
          position: 'absolute', right: '-2px', top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          fontFamily: "'Anton', sans-serif", fontSize: 'clamp(6px, 0.6vw, 9px)',
          letterSpacing: '0.35em', color: 'rgba(26,26,26,0.18)',
          userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0,
        }}>
          FAIZAN SHAIKH · PROJECT SHOWCASE · ARC 03
        </div>

        {/* ARC 03 badge */}
        <div style={{
          position: 'absolute', top: '6%', right: '22%', zIndex: 6,
          backgroundColor: '#1A1A1A', color: '#EDE8DF',
          fontFamily: "'Anton', sans-serif", fontSize: 'clamp(7px, 0.65vw, 9px)',
          letterSpacing: '0.22em', padding: '4px 10px',
          transform: 'rotate(-2deg)',
          boxShadow: '2px 2px 0 #D4623B',
          pointerEvents: 'none',
        }}>
          ✦ ARC 03 ✦
        </div>

        {PANELS.map((def, i) => (
          <ProjectPanel key={i} def={def} />
        ))}
      </div>
    </div>
  )
}
