import { useState, useRef, useCallback } from 'react'
import LandingPage from './components/LandingPage'
import EducationPage from './components/EducationPage'
import ExperiencePage from './components/ExperiencePage'
import ProjectsPage from './components/ProjectsPage'

type Page = 'landing' | 'education' | 'experience' | 'projects'
type Direction = 'forward' | 'back'

const FLIP_DURATION = 800

function App() {
  const [page, setPage] = useState<Page>('landing')
  const [transition, setTransition] = useState<{ direction: Direction; target: Page } | null>(null)
  const timerRef = useRef<number | null>(null)

  const navigateTo = useCallback((target: Page, direction: Direction) => {
    if (transition) return
    setTransition({ direction, target })
    timerRef.current = window.setTimeout(() => {
      setPage(target)
    }, FLIP_DURATION / 2)
  }, [transition])

  const handleFlipEnd = () => {
    setTransition(null)
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }

  const renderPage = () => {
    if (page === 'education') {
      return (
        <EducationPage
          onBack={() => navigateTo('landing', 'back')}
          onNavigateToExperience={() => navigateTo('experience', 'forward')}
        />
      )
    }
    if (page === 'experience') {
      return (
        <ExperiencePage
          onBack={() => navigateTo('landing', 'back')}
          onNavigateToProjects={() => navigateTo('projects', 'forward')}
        />
      )
    }
    if (page === 'projects') {
      return <ProjectsPage onBack={() => navigateTo('landing', 'back')} />
    }
    return (
      <LandingPage
        onNavigateToEducation={() => navigateTo('education', 'forward')}
        onCharacterClick={() => setPage('projects')}
      />
    )
  }

  const isForward = transition?.direction === 'forward'

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {renderPage()}

      {transition && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            perspective: '1800px',
            pointerEvents: 'all',
          }}
        >
          {/* Shadow on the revealed half underneath */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              ...(isForward
                ? { left: '50%', right: 0 }
                : { left: 0, width: '50%' }),
              background: 'rgba(0,0,0,0.22)',
              animation: `flip-shadow ${FLIP_DURATION}ms ease-in-out forwards`,
              pointerEvents: 'none',
            }}
          />

          {/* Book spine — vertical line at center */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: '50%',
              width: '3px',
              transform: 'translateX(-50%)',
              backgroundColor: '#1A1A1A',
              zIndex: 10,
              boxShadow: '-2px 0 6px rgba(0,0,0,0.15), 2px 0 6px rgba(0,0,0,0.15)',
            }}
          />

          {/* The flipping half-page */}
          <div
            onAnimationEnd={handleFlipEnd}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              ...(isForward
                ? { left: '50%', width: '50%' }
                : { left: 0, width: '50%' }),
              transformOrigin: isForward ? 'left center' : 'right center',
              transformStyle: 'preserve-3d',
              animation: `${isForward ? 'page-flip-forward' : 'page-flip-back'} ${FLIP_DURATION}ms cubic-bezier(0.38, 0, 0.24, 1) forwards`,
            }}
          >
            {/* FRONT face */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                backgroundColor: '#F0EBE0',
                overflow: 'hidden',
              }}
            >
              {/* Halftone dots */}
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.04) 1px, transparent 1px)',
                backgroundSize: '8px 8px',
              }} />
              {/* Spine shadow — darkens near the fold edge */}
              <div style={{
                position: 'absolute', inset: 0,
                background: isForward
                  ? 'linear-gradient(to right, rgba(0,0,0,0.1) 0%, transparent 12%)'
                  : 'linear-gradient(to left, rgba(0,0,0,0.1) 0%, transparent 12%)',
              }} />
            </div>

            {/* BACK face */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: '#E6E1D6',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(26,26,26,0.05) 1.2px, transparent 1.2px)',
                backgroundSize: '10px 10px',
              }} />
              {/* Spine shadow on back */}
              <div style={{
                position: 'absolute', inset: 0,
                background: isForward
                  ? 'linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 18%)'
                  : 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 18%)',
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
