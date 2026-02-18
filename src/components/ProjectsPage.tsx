import { useState } from 'react'
import proj0 from '../assets/project0.webp'
import proj1 from '../assets/project1.webp'
import proj2 from '../assets/project2.webp'
import proj3 from '../assets/project3.webp'
import proj4 from '../assets/project4.webp'
import proj5 from '../assets/project5.webp'
import proj6 from '../assets/project6.webp'
import proj7 from '../assets/project7.webp'
import proj8 from '../assets/project8.webp'

interface Props { onBack: () => void; onNavigateToContact: () => void }

type Dir = 'left' | 'right' | 'top' | 'bottom'

interface PanelDef {
  img: string
  dir: Dir
  delay: number
  pos: { left: string; top: string; width: string; height: string }
  clip: string
  objPos?: string
  zIndex: number
  link?: string
  github?: string
  tag?: 'live' | 'github'
  tagPos?: React.CSSProperties
  title?: string
  desc?: string
  /** Where the bubble appears relative to the grid container (CSS %) */
  bubblePos?: { left: string; top: string }
  /** Direction the tail points toward the panel */
  tailDir?: 'bottom' | 'top' | 'left' | 'right'
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
    title: 'Faizan Shaikh',
    desc: 'Graduating May 2026 — hungry to build software that matters. Looking for SWE roles where I can ship fast and learn faster!',
    bubblePos: { left: '70%', top: '12%' },
    tailDir: 'right',
  },

  // ── 1 ─ MOVEWISE — top-left ───────────────────────────────────────────
  {
    img: proj1, zIndex: 2, dir: 'top', delay: 0.7,
    pos: { left: '1%', top: '4%', width: '39%', height: '38%' },
    clip: 'polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)',
    objPos: 'center 25%',
    link: 'https://movewise-web.vercel.app/',
    github: 'https://github.com/faizanshaikh0303/MoveWise-Web',
    tag: 'live',
    tagPos: { top: '8%', right: '6%', left: 'auto', bottom: 'auto', transform: 'none' },
    title: 'MoveWise',
    desc: 'AI-powered relocation assistant that finds everything you need to know in your neighborhood.',
    bubblePos: { left: '20%', top: '32%' },
    tailDir: 'top',
  },

  // ── 2 ─ SHEF COMPANION — top-right ────────────────────────────────────
  {
    img: proj2, zIndex: 2, dir: 'top', delay: 1,
    pos: { left: '41%', top: '4%', width: '38.5%', height: '38%' },
    clip: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%)',
    objPos: 'center 40%',
    link: 'https://chromewebstore.google.com/detail/fpcndiakmbfigpognfibnhmbhejokein?utm_source=item-share-cb',
    github: 'https://github.com/faizanshaikh0303/Shef-Cart-Companion',
    tag: 'live',
    tagPos: { top: '8%', left: '6%', right: 'auto', bottom: 'auto', transform: 'none' },
    title: 'Shef Companion',
    desc: 'Chrome extension that describes all dishes in Shef\'s cart with AI-generated facts and pairings.',
    bubblePos: { left: '42%', top: '32%' },
    tailDir: 'top',
  },

  // ── 3 ─ LOI PARSER — tall left column ─────────────────────────────────
  {
    img: proj5, zIndex: 2, dir: 'left', delay: 1.2,
    pos: { left: '1%', top: '40%', width: '20.4%', height: '59%' },
    clip: 'polygon(0% 8%, 100% 0%, 93% 100%, 0% 100%)',
    link: 'https://github.com/faizanshaikh0303/LOI-Parser',
    tag: 'github',
    title: 'LOI Parser',
    desc: 'AI-powered tool to extract deal terms from call transcripts and generate professional Letters of Intent for both lease and purchase transactions.',
    bubblePos: { left: '5%', top: '20%' },
    tailDir: 'bottom',
  },

  // ── 4 ─ MULTI-TURN RAG — large center ─────────────────────────────────
  {
    img: proj3, zIndex: 1, dir: 'right', delay: 1.7,
    pos: { left: '22%', top: '34%', width: '57.5%', height: '28%' },
    clip: 'polygon(32% 2%, 100% 32%, 100% 100%, 0% 100%, 1% 19%)',
    objPos: 'center 15%',
    link: 'https://github.com/faizanshaikh0303/Improving-Passage-Retrieval-in-Multi-turn-RAG',
    tag: 'github',
    title: 'Multi-Turn RAG',
    desc: 'Improving passage retrieval in multi-turn conversational search.',
    bubblePos: { left: '35%', top: '26%' },
    tailDir: 'bottom',
  },

  // ── 5 ─ INQUIZITIVE — bottom-left small ───────────────────────────────
  {
    img: proj7, zIndex: 1, dir: 'bottom', delay: 2.1,
    pos: { left: '21%', top: '64%', width: '13%', height: '32%' },
    clip: 'polygon(4% 4%, 100% 0%, 100% 100%, 0% 100%)',
    link: 'https://github.com/faizanshaikh0303/inquizitive',
    tag: 'github',
    title: 'InQuizitive',
    desc: 'A Full Stack Quiz platform, to take or make your own quizzes.',
    bubblePos: { left: '18%', top: '50%' },
    tailDir: 'bottom',
  },

  // ── 6 ─ VIRTUAL PIANO — bottom small ──────────────────────────────────
  {
    img: proj8, zIndex: 1, dir: 'bottom', delay: 2.2,
    pos: { left: '34.6%', top: '64%', width: '12%', height: '32%' },
    clip: 'polygon(0% 0%, 100% 4%, 100% 100%, 0% 100%)',
    link: 'https://github.com/faizanshaikh0303/Piano',
    tag: 'github',
    title: 'Virtual Piano',
    desc: 'Virtual Piano that tracks your fingers through WebCam.',
    bubblePos: { left: '40%', top: '48%' },
    tailDir: 'bottom',
  },

  // ── 7 ─ EMOTION DETECTOR — bottom small ───────────────────────────────
  {
    img: proj6, zIndex: 1, dir: 'bottom', delay: 2.3,
    pos: { left: '47.2%', top: '64%', width: '12%', height: '32%' },
    clip: 'polygon(0% 4%, 100% 0%, 100% 100%, 0% 100%)',
    link: 'https://github.com/faizanshaikh0303/Emotion-Detection',
    tag: 'github',
    title: 'Emotion Detector',
    desc: 'Multi-label Emotion Detection on Text using Natural Language Processing.',
    bubblePos: { left: '47%', top: '48%' },
    tailDir: 'bottom',
  },

  // ── 8 ─ CONTEXT ROT MONITOR — bottom right ───────────────────────────
  {
    img: proj4, zIndex: 1, dir: 'right', delay: 1.8,
    pos: { left: '59.8%', top: '64%', width: '19.6%', height: '36.5%' },
    clip: 'polygon(0% 4%, 100% 0%, 100% 100%, 0% 97%)',
    objPos: '25% center',
    link: 'https://github.com/faizanshaikh0303/Context-Rot-Monitor',
    tag: 'github',
    title: 'Context Rot Monitor',
    desc: 'An agentic system that detects and prevents "context rot" in multi-turn RAG conversations using semantic drift detection and LLM-powered supervision.',
    bubblePos: { left: '60%', top: '48%' },
    tailDir: 'bottom',
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

function ProjectPanel({ def, onClick }: { def: PanelDef; onClick: () => void }) {
  return (
    <div
      className="group"
      onClick={def.title ? onClick : undefined}
      style={{
        position: 'absolute',
        ...def.pos,
        zIndex: def.zIndex,
        clipPath: def.clip,
        overflow: 'hidden',
        cursor: def.title ? 'pointer' : 'default',
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

      {/* Tag badge */}
      {def.tag && (
        <div
          className="opacity-0 group-hover:opacity-100"
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            ...def.tagPos,
            zIndex: 5,
            pointerEvents: 'none',
            transition: 'opacity 0.2s',
            backgroundColor: def.tag === 'live' ? '#D4623B' : '#1A1A1A',
            color: '#EDE8DF',
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(8px, 0.7vw, 12px)',
            letterSpacing: '0.15em',
            padding: '3px 10px',
            whiteSpace: 'nowrap',
          }}
        >
          {def.tag === 'live' ? 'LIVE' : 'GITHUB'}
        </div>
      )}

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
          strokeWidth="7"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  )
}

/** Manga speech bubble tail — slim curved pointer */
function BubbleTail({ dir }: { dir: 'top' | 'bottom' | 'left' | 'right' }) {
  const s = 2

  const base: React.CSSProperties = {
    position: 'absolute',
    overflow: 'visible',
    lineHeight: 0,
    zIndex: -1,
  }

  // Very slim tail — narrow base, curved to a sharp point
  // White rect masks the base so no stroke bleeds into the bubble
  if (dir === 'bottom') {
    const w = 12, h = 22
    Object.assign(base, { bottom: -h * 0.25, left: '28%', width: w, height: h })
    return (
      <svg style={base} viewBox={`0 0 ${w} ${h}`} fill="none">
        <path d={`M1,0 Q-1,${h * 0.7} ${w * 0.4},${h} Q${w * 0.6},${h * 0.6} ${w - 1},0`} fill="#fff" stroke="#1A1A1A" strokeWidth={s} strokeLinejoin="round" />
      </svg>
    )
  }
  if (dir === 'top') {
    const w = 12, h = 22
    Object.assign(base, { top: -h * 0.25, left: '32%', width: w, height: h })
    return (
      <svg style={base} viewBox={`0 0 ${w} ${h}`} fill="none">
        <path d={`M1,${h} Q-1,${h * 0.3} ${w * 0.5},0 Q${w * 0.6},${h * 0.4} ${w - 1},${h}`} fill="#fff" stroke="#1A1A1A" strokeWidth={s} strokeLinejoin="round" />
      </svg>
    )
  }
  if (dir === 'left') {
    const w = 22, h = 12
    Object.assign(base, { left: -w * 0.25, top: '38%', width: w, height: h })
    return (
      <svg style={base} viewBox={`0 0 ${w} ${h}`} fill="none">
        <path d={`M${w},1 Q${w * 0.3},-1 0,${h * 0.4} Q${w * 0.4},${h * 0.6} ${w},${h - 1}`} fill="#fff" stroke="#1A1A1A" strokeWidth={s} strokeLinejoin="round" />
      </svg>
    )
  }
  // right
  const w = 22, h = 12
  Object.assign(base, { right: -w * 0.25, top: '38%', width: w, height: h })
  return (
    <svg style={base} viewBox={`0 0 ${w} ${h}`} fill="none">
      <path d={`M0,1 Q${w * 0.7},-1 ${w},${h * 0.5} Q${w * 0.6},${h * 0.6} 0,${h - 1}`} fill="#fff" stroke="#1A1A1A" strokeWidth={s} strokeLinejoin="round" />
    </svg>
  )
}

function SpeechBubble({ def, onClose }: { def: PanelDef; onClose: () => void }) {
  if (!def.bubblePos || !def.title) return null

  return (
    <>
      {/* Backdrop to close on click outside */}
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, zIndex: 9 }}
      />

      {/* Bubble */}
      <div
        style={{
          position: 'absolute',
          left: def.bubblePos.left,
          top: def.bubblePos.top,
          zIndex: 10,
          animation: 'bubble-pop 0.35s ease-out both',
        }}
      >
        <div style={{
          position: 'relative',
          backgroundColor: '#fff',
          color: '#1A1A1A',
          padding: '18px 32px 16px',
          borderRadius: '50%',
          minWidth: '240px',
          maxWidth: '300px',
          border: '2px solid #1A1A1A',
          textAlign: 'center' as const,
        }}>
          {/* Title */}
          <div style={{
            fontFamily: "'Comic Neue', cursive",
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: 'clamp(15px, 1.3vw, 22px)',
            marginBottom: '4px',
            color: '#1A1A1A',
          }}>
            {def.title}
          </div>

          {/* Description */}
          <div style={{
            fontFamily: "'Comic Neue', cursive",
            fontStyle: 'italic',
            fontSize: 'clamp(12px, 0.95vw, 16px)',
            lineHeight: 1.3,
            color: 'rgba(26,26,26,0.7)',
            marginBottom: '10px',
          }}>
            {def.desc}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {def.link && (
              <a
                href={def.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: def.tag === 'live' ? '#D4623B' : '#333',
                  color: '#EDE8DF',
                  fontFamily: "'Comic Neue', cursive",
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(9px, 0.75vw, 13px)',
                  padding: '4px 12px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {def.tag === 'live' ? (
                  <>
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor">
                      <circle cx="8" cy="8" r="4" />
                      <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    LIVE
                  </>
                ) : (
                  <>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    GITHUB
                  </>
                )}
              </a>
            )}
            {def.github && (
              <a
                href={def.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: '#333',
                  color: '#EDE8DF',
                  fontFamily: "'Comic Neue', cursive",
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(9px, 0.75vw, 13px)',
                  padding: '4px 12px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'opacity 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                GITHUB
              </a>
            )}
          </div>

          {/* Tail */}
          <BubbleTail dir={def.tailDir ?? 'bottom'} />
        </div>
      </div>
    </>
  )
}

export default function ProjectsPage({ onBack, onNavigateToContact }: Props) {
  const [activePanel, setActivePanel] = useState<number | null>(null)

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
        <button
          onClick={onNavigateToContact}
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1, paddingTop: '7px', paddingLeft: '20px', paddingRight: '0' }}>
            CONTAC
          </span>
          <span className="flex items-start gap-1" style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '20px', paddingLeft: '3px', paddingRight: '12px' }}>
            <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>T</span>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M2 9H16M16 9L9 2M16 9L9 16" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </span>
        </button>
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
          <ProjectPanel
            key={i}
            def={def}
            onClick={() => setActivePanel(activePanel === i ? null : i)}
          />
        ))}

        {/* Speech bubble */}
        {activePanel !== null && PANELS[activePanel].title && (
          <SpeechBubble
            def={PANELS[activePanel]}
            onClose={() => setActivePanel(null)}
          />
        )}
      </div>
    </div>
  )
}
