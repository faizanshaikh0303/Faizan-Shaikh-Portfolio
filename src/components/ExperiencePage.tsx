import { useState } from 'react'
import exp1 from '../assets/experience1.webp'
import exp2 from '../assets/experience2.webp'
import exp3 from '../assets/experience3.webp'
import exp4 from '../assets/experience4.webp'
import exp1_ from '../assets/experience1_.webp'
import exp2_ from '../assets/experience2_.webp'
import exp3_ from '../assets/experience3_.webp'
import exp4_ from '../assets/experience4_.webp'

interface Experience {
  id: number
  image: string
  altImage: string
  company: string
  period: string
  team: string
  bullets: string[]
  tech?: string
}

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    image: exp1,
    altImage: exp1_,
    company: 'Delta Airlines',
    period: 'Nov 2021 – Aug 2024 · Atlanta, GA',
    team: 'Software Developer',
    bullets: [
      'Worked across two high-impact teams — Loyalty (Frontend & API) and Revenue (Backend Microservices) — over 3 years, shipping production features used by millions of travelers daily.',
      'Navigated large, complex codebases; participated in on-call rotations; drove continuous improvement through code reviews, post-incident analysis, and stakeholder communication.',
      'Increased shipping velocity by 25% and reduced MTTR by 30% through observability, testing, and process improvements.',
    ],
    tech: 'Java · Spring Boot · Quarkus · React · TypeScript · GraphQL · REST · AWS · MySQL · PostgreSQL · GitLab CI · Jenkins · OAuth2 · JWT',
  },
  {
    id: 2,
    image: exp2,
    altImage: exp2_,
    company: 'Delta Airlines',
    period: 'Nov 2021 – Aug 2024',
    team: 'Loyalty Team — Frontend & API Development',
    bullets: [
      'Designed and developed frontend features using React/TypeScript consuming RESTful APIs and GraphQL; built backend APIs using Java/Spring Boot supporting customer-facing loyalty applications.',
      'Collaborated with product management, design, and analytics teams to deliver features across multiple phases; participated in ideation, refined requirements, and articulated technical constraints for product decisions.',
      'Built and maintained monitoring metrics using CloudWatch and Dynatrace; participated in on-call rotation supporting production availability.',
    ],
    tech: 'React · TypeScript · GraphQL · REST · Java · Spring Boot · CloudWatch · Dynatrace',
  },
  {
    id: 3,
    image: exp3,
    altImage: exp3_,
    company: 'Delta Airlines',
    period: 'Nov 2021 – Aug 2024',
    team: 'Revenue Team — Backend Microservices & Infrastructure',
    bullets: [
      'Shipped 10+ production microservices in Java/Spring Boot across Loyalty and Revenue platforms — 5M+ daily transactions at sub-200ms p99 latency and 99.9%+ uptime; owned 5+ consumer-facing features (Gift/Buy/Transfer Miles, Status Tracker, voucher credits) end-to-end serving millions of SkyMiles users.',
      'Owned payment and refund processing APIs on the Revenue team — maintained fault-tolerant SOAP and REST integrations with OOP design patterns ensuring correctness and durability of every financial transaction.',
      'Led Spring Boot → Quarkus migration across 5+ microservices — rearchitected SOAP-to-REST contracts, adopted event-driven patterns (SQS, Lambda, API Gateway, DynamoDB), and onboarded services to AWS CDK, improving deployment velocity by 40%.',
      'Engineered CI/CD pipelines (Jenkins, GitLab, CodePipeline) with staged promotion and enforced TDD (JUnit, integration, regression) — cut manual QA effort by 50% and maintained high code coverage.',
      'Applied OAuth2, JWT, SonarQube, and VeraCode security practices — reduced vulnerability surface by 35% and passed all security audits for migrated Loyalty APIs.',
      'Built SumoLogic/Dynatrace observability dashboards with SLO/SLA tracking; acted as DRI on-call, drove MTTR down 30%; mentored 5 engineers on system design and API patterns.',
    ],
    tech: 'Java · Spring Boot · Quarkus · React · TypeScript · REST · SOAP · AWS (SQS, Lambda, API Gateway, DynamoDB, CDK) · PostgreSQL · Jenkins · GitLab CI · CodePipeline · OAuth2 · JWT · SonarQube · VeraCode · SumoLogic · Dynatrace',
  },
  {
    id: 4,
    image: exp4,
    altImage: exp4_,
    company: 'Infrabeat Technologies',
    period: 'June 2025 – Aug 2025',
    team: 'Software Engineer Intern — Cloud & Observability',
    bullets: [
      'Built Python automation tools for AWS infrastructure; automated CI/CD workflows using AWS CodePipeline reducing manual deployment steps by 60%.',
      'Developed monitoring dashboards with CloudWatch for real-time observability across cloud services.',
    ],
    tech: 'Python · AWS Lambda · API Gateway · EC2 · S3 · CloudWatch · CodePipeline',
  },
]

interface Props { onBack: () => void; onNavigateToPrevious: () => void; onNavigateToProjects: () => void }

export default function ExperiencePage({ onBack, onNavigateToPrevious, onNavigateToProjects }: Props) {
  const [selected, setSelected] = useState<Experience | null>(null)

  const handleBack = () => { setSelected(null); onBack() }
  const handlePanelClick = (exp: Experience) =>
    setSelected(prev => prev?.id === exp.id ? null : exp)

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: '#F0EBE0', fontFamily: "'Anton', sans-serif" }}
    >
      {/* ── TOP NAV ── */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between">
        {/* ← EDUCATION (previous page) */}
        <button
          onClick={() => { setSelected(null); onNavigateToPrevious() }}
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span className="flex items-start" style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '20px', paddingLeft: '12px', paddingRight: '0', gap: '8px' }}>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M16 9H2M2 9L9 2M2 9L9 16" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
            <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>E</span>
          </span>
          <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1, paddingTop: '7px', paddingRight: '20px' }}>DUCATION</span>
        </button>

        {/* Center home icon */}
        <button
          onClick={handleBack}
          className="transition-opacity hover:opacity-80 active:opacity-60"
          style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', lineHeight: 0 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5" />
            <path d="M19 13v6a1 1 0 01-1 1h-4v-5H10v5H6a1 1 0 01-1-1v-6" />
          </svg>
        </button>

        {/* PROJECTS → */}
        <button
          onClick={onNavigateToProjects}
          className="flex items-start transition-opacity hover:opacity-80 active:opacity-60"
        >
          <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1, paddingTop: '7px', paddingLeft: '20px', paddingRight: '0' }}>
            PROJECT
          </span>
          <span className="flex items-start gap-1" style={{ backgroundColor: '#D4623B', paddingTop: '7px', paddingBottom: '20px', paddingLeft: '3px', paddingRight: '12px' }}>
            <span style={{ color: '#1A1A1A', fontFamily: "'Anton', sans-serif", fontSize: '1.125rem', letterSpacing: '0.12em', lineHeight: 1 }}>S</span>
            <svg width="15" height="15" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
              <path d="M2 9H16M16 9L9 2M16 9L9 16" stroke="white" strokeWidth="2.5" strokeLinecap="square" />
            </svg>
          </span>
        </button>
      </nav>

      {/* ── MAIN SPLIT ── */}
      <div className="flex w-full h-full" style={{ paddingTop: '44px' }}>

        {/* ══════════════════════════════════════════════════════════════
            LEFT — comic panel grid with manga decorations
            ══════════════════════════════════════════════════════════════ */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center"
          style={{ padding: '8px 6px 8px 10px', position: 'relative' }}>

          {/* Speed-line background */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
            background: 'repeating-conic-gradient(from 0deg at 50% 50%, #E4DFD4 0deg 1.2deg, #F0EBE0 1.2deg 8deg)',
          }} />

          {/* Ghost "EXPERIENCE" text behind the grid */}
          <div style={{
            position: 'absolute', bottom: '1%', left: '50%', transform: 'translateX(-50%)',
            fontFamily: "'Anton', sans-serif", fontSize: 'clamp(38px, 6.5vw, 88px)',
            color: 'rgba(26,26,26,0.04)', letterSpacing: '0.1em',
            userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0,
          }}>
            EXPERIENCE
          </div>

          {/* Halftone dots — top-left corner fade */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '30%', height: '35%',
            backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.12) 1.1px, transparent 1.1px)',
            backgroundSize: '8px 8px',
            maskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 0%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.8) 0%, transparent 65%)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Halftone dots — bottom-right corner fade */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0, width: '25%', height: '25%',
            backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.1) 1.1px, transparent 1.1px)',
            backgroundSize: '8px 8px',
            maskImage: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.7) 0%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.7) 0%, transparent 60%)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Left spine label */}
          <div style={{
            position: 'absolute', left: '-2px', top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            fontFamily: "'Anton', sans-serif", fontSize: 'clamp(6px, 0.6vw, 9px)',
            letterSpacing: '0.35em', color: 'rgba(26,26,26,0.25)',
            userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 0,
          }}>
            FAIZAN SHAIKH · WORK HISTORY · ARC 02
          </div>

          {/* Comic grid — z-index 1 sits above background */}
          <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', display: 'flex', animation: 'manga-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.65s both' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '13fr 10fr 13fr',
              width: '100%',
              flex: 1,
              gap: '3px',
              border: '3px solid #1A1A1A',
              minHeight: 0,
            }}>

              {/* Panel 1 — landscape */}
              <button
                onClick={() => handlePanelClick(EXPERIENCES[0])}
                style={{ gridColumn: '1 / 3', padding: 0, border: 'none', position: 'relative', overflow: 'hidden', background: 'repeating-conic-gradient(from 0deg at 50% 50%, #141414 0deg 0.8deg, #383838 0.8deg 5deg)', animation: 'drop-slam 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.7s both' }}
                className="cursor-pointer"
              >
                <img src={selected?.id === 1 ? exp1_ : exp1} alt="Delta Airlines overview" className="w-full h-full"
                  style={{ objectFit: 'contain', display: 'block', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <PanelOverlay active={selected?.id === 1} />
                <PanelNumber n="01" />
                <PanelCaption label="DELTA AIRLINES" sub="SOFTWARE DEVELOPER · 3 YRS" />
              </button>

              {/* Panel 2 — portrait left */}
              <button
                onClick={() => handlePanelClick(EXPERIENCES[1])}
                style={{ padding: 0, border: 'none', position: 'relative', overflow: 'hidden', background: 'repeating-conic-gradient(from 0deg at 50% 50%, #141414 0deg 0.8deg, #383838 0.8deg 5deg)', animation: 'slam-from-left 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.9s both' }}
                className="cursor-pointer"
              >
                <img src={selected?.id === 2 ? exp2_ : exp2} alt="Loyalty Team" className="w-full h-full"
                  style={{ objectFit: 'contain', display: 'block', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <PanelOverlay active={selected?.id === 2} />
                <PanelNumber n="02" />
                <PanelCaption label="LOYALTY TEAM" sub="FRONTEND & API" />
              </button>

              {/* Panel 3 — portrait right */}
              <button
                onClick={() => handlePanelClick(EXPERIENCES[2])}
                style={{ padding: 0, border: 'none', position: 'relative', overflow: 'hidden', background: 'repeating-conic-gradient(from 0deg at 50% 50%, #141414 0deg 0.8deg, #383838 0.8deg 5deg)', animation: 'slam-from-right 0.55s cubic-bezier(0.22, 1, 0.36, 1) 1.0s both' }}
                className="cursor-pointer"
              >
                <img src={selected?.id === 3 ? exp3_ : exp3} alt="Revenue Team" className="w-full h-full"
                  style={{ objectFit: 'contain', display: 'block', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <PanelOverlay active={selected?.id === 3} />
                <PanelNumber n="03" />
                <PanelCaption label="REVENUE TEAM" sub="BACKEND MICROSERVICES" />
              </button>

              {/* Panel 4 — landscape */}
              <button
                onClick={() => handlePanelClick(EXPERIENCES[3])}
                style={{ gridColumn: '1 / 3', padding: 0, border: 'none', position: 'relative', overflow: 'hidden', background: 'repeating-conic-gradient(from 0deg at 50% 50%, #141414 0deg 0.8deg, #383838 0.8deg 5deg)', animation: 'rise-slam 0.55s cubic-bezier(0.22, 1, 0.36, 1) 1.1s both' }}
                className="cursor-pointer"
              >
                <img src={selected?.id === 4 ? exp4_ : exp4} alt="Infrabeat Technologies" className="w-full h-full"
                  style={{ objectFit: 'contain', display: 'block', transition: 'transform 0.2s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <PanelOverlay active={selected?.id === 4} />
                <PanelNumber n="04" />
                <PanelCaption label="INFRABEAT TECHNOLOGIES" sub="SWE INTERN · CLOUD" />
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            RIGHT — thought bubble with manga decorations
            ══════════════════════════════════════════════════════════════ */}
        <div className="w-1/2 h-full flex items-center justify-center"
          style={{ padding: '8px 10px 8px 6px', position: 'relative' }}>

          {/* Screentone halftone background */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.08) 1.2px, transparent 1.2px)',
            backgroundSize: '9px 9px',
          }} />

          {/* Diagonal hatching — bottom-right corner */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0, width: '28%', height: '28%',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(26,26,26,0.07) 0px, rgba(26,26,26,0.07) 1px, transparent 1px, transparent 8px)',
            maskImage: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.8) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at bottom right, rgba(0,0,0,0.8) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Diagonal hatching — top-left corner */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '20%', height: '20%',
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(26,26,26,0.07) 0px, rgba(26,26,26,0.07) 1px, transparent 1px, transparent 8px)',
            maskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.7) 0%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at top left, rgba(0,0,0,0.7) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Arc label — top-right badge */}
          <div style={{
            position: 'absolute', top: '6%', right: '4%',
            backgroundColor: '#1A1A1A', color: '#F0EBE0',
            fontFamily: "'Anton', sans-serif", fontSize: 'clamp(7px, 0.65vw, 9px)',
            letterSpacing: '0.22em', padding: '4px 10px',
            transform: 'rotate(2deg)',
            boxShadow: '2px 2px 0 #D4623B',
            pointerEvents: 'none',
            animation: 'manga-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both',
          }}>
            ✦ ARC 02 ✦
          </div>

          {/* Large faded mood text */}
          <div style={{
            position: 'absolute',
            bottom: '4%', right: '3%',
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(28px, 4.5vw, 62px)',
            color: selected ? 'rgba(212,98,59,0.1)' : 'rgba(26,26,26,0.06)',
            letterSpacing: '0.06em',
            transform: 'rotate(-8deg)',
            pointerEvents: 'none', userSelect: 'none',
            transition: 'color 0.4s',
          }}>
            {selected ? 'STORY!!' : '...'}
          </div>

          {/* Floating sparkles */}
          <RightSpark top="10%" left="5%"  size={20} delay={0} />
          <RightSpark top="20%" right="6%" size={13} delay={0.15} />
          <RightSpark top="35%" left="8%" size={10} delay={0.3} />
          <RightSpark bottom="28%" right="5%" size={16} delay={0.1} />
          <RightSpark bottom="14%" left="6%" size={12} delay={0.25} />
          <RightSpark bottom="20%" right="16%" size={8}  delay={0.4} />

          {/* Starburst "!!" when a panel is selected */}
          {selected && (
            <div style={{
              position: 'absolute', top: '5%', left: '5%',
              width: 58, height: 58,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              backgroundColor: '#D4623B',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2,
              animation: 'none',
            }}>
              <span style={{ fontFamily: "'Anton', sans-serif", fontSize: '11px', color: '#FFF', letterSpacing: '0.02em' }}>!!</span>
            </div>
          )}

          {/* The thought bubble — z-index on top of decorations */}
          <div style={{ position: 'relative', zIndex: 3, width: '100%', display: 'flex', justifyContent: 'center', animation: 'bubble-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.95s both' }}>
            {selected ? <ThoughtBubble experience={selected} /> : <EmptyBubble />}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Orange inset ring on selected panel ── */
function PanelOverlay({ active }: { active: boolean }) {
  if (!active) return null
  return <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 0 4px #D4623B' }} />
}

/* ── Panel number badge — top-right corner ── */
function PanelNumber({ n }: { n: string }) {
  return (
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
      pointerEvents: 'none',
      zIndex: 5,
    }}>
      {n}
    </div>
  )
}

/* ── Panel caption — bottom-left company label ── */
function PanelCaption({ label, sub }: { label: string; sub: string }) {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0,
      backgroundColor: 'rgba(26,26,26,0.80)',
      borderTop: '2px solid #D4623B',
      borderRight: '2px solid #D4623B',
      padding: '3px 8px 3px 6px',
      pointerEvents: 'none', zIndex: 5,
    }}>
      <span style={{ display: 'block', fontFamily: "'Anton', sans-serif", fontSize: 'clamp(6px, 0.62vw, 9px)', color: '#FFFFFF', letterSpacing: '0.15em', lineHeight: 1.2 }}>
        {label}
      </span>
      <span style={{ display: 'block', fontFamily: "'Anton', sans-serif", fontSize: 'clamp(5px, 0.52vw, 8px)', color: '#D4623B', letterSpacing: '0.1em', lineHeight: 1.1 }}>
        {sub}
      </span>
    </div>
  )
}

/* ── Floating sparkle for the right side ── */
function RightSpark({ size, delay, ...pos }: { size: number; delay: number; top?: string; bottom?: string; left?: string; right?: string }) {
  return (
    <span style={{
      position: 'absolute',
      fontSize: `${size}px`,
      color: '#D4623B',
      opacity: 0.55,
      userSelect: 'none', pointerEvents: 'none',
      lineHeight: 1,
      animationDelay: `${delay}s`,
      ...pos,
    }}>
      ✦
    </span>
  )
}

/* ── Shared thought bubble ── */
function BubbleWithTrail({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', width: '88%' }}>
      <div style={{
        backgroundColor: '#FAF6EE',
        border: '3px solid #1A1A1A',
        borderRadius: '32px',
        padding: 'clamp(14px, 1.8vw, 26px)',
        maxHeight: '74vh',
        overflowY: 'auto',
        boxShadow: '4px 4px 0px #1A1A1A',
      }}>
        {children}
      </div>
      <div style={{ position: 'absolute', bottom: '-14px', left: '28px' }}>
        <div style={{ position: 'absolute', width: 18, height: 18, borderRadius: '50%', backgroundColor: '#FAF6EE', border: '3px solid #1A1A1A', top: 0, left: 0 }} />
        <div style={{ position: 'absolute', width: 13, height: 13, borderRadius: '50%', backgroundColor: '#FAF6EE', border: '3px solid #1A1A1A', top: 16, left: -16 }} />
        <div style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FAF6EE', border: '3px solid #1A1A1A', top: 30, left: -32 }} />
      </div>
    </div>
  )
}

function EmptyBubble() {
  return (
    <BubbleWithTrail>
      <p style={{ fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(14px, 1.4vw, 22px)', color: '#1A1A1A', letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.5 }}>
        CLICK A PANEL
        <br />
        <span style={{ color: '#D4623B' }}>TO READ THE STORY</span>
      </p>
    </BubbleWithTrail>
  )
}

function ThoughtBubble({ experience }: { experience: Experience }) {
  return (
    <BubbleWithTrail>
      <p style={{ fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(13px, 1.4vw, 20px)', color: '#D4623B', letterSpacing: '0.12em', lineHeight: 1.1 }}>
        {experience.company.toUpperCase()}
      </p>
      <p style={{ fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontSize: 'clamp(9px, 0.82vw, 12px)', color: '#777', letterSpacing: '0.1em', lineHeight: 1.2, marginTop: '2px' }}>
        {experience.period}
      </p>
      <p style={{ fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(10px, 0.95vw, 14px)', color: '#1A1A1A', letterSpacing: '0.08em', lineHeight: 1.3, marginTop: '4px', borderBottom: '2px solid #D4623B', paddingBottom: '8px', marginBottom: '10px' }}>
        {experience.team.toUpperCase()}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {experience.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '8px', alignItems: 'flex-start' }}>
            <span style={{ color: '#D4623B', fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(10px, 1vw, 14px)', lineHeight: 1.4, flexShrink: 0 }}>▸</span>
            <span style={{ fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontSize: 'clamp(9px, 0.85vw, 13px)', color: '#1A1A1A', lineHeight: 1.55 }}>{b}</span>
          </li>
        ))}
      </ul>
      {experience.tech && (
        <p style={{ fontFamily: "'Comic Neue', cursive", fontStyle: 'italic', fontWeight: 700, fontSize: 'clamp(8px, 0.72vw, 11px)', color: '#666', letterSpacing: '0.08em', lineHeight: 1.6, marginTop: '10px', paddingTop: '8px', borderTop: '2px solid #1A1A1A' }}>
          {experience.tech}
        </p>
      )}
    </BubbleWithTrail>
  )
}
