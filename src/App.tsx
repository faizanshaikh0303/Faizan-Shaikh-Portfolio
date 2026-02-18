import { useState } from 'react'
import LandingPage from './components/LandingPage'
import EducationPage from './components/EducationPage'
import ExperiencePage from './components/ExperiencePage'
import ProjectsPage from './components/ProjectsPage'

type Page = 'landing' | 'education' | 'experience' | 'projects'

function App() {
  const [page, setPage] = useState<Page>('landing')

  if (page === 'education') {
    return (
      <EducationPage
        onBack={() => setPage('landing')}
        onNavigateToExperience={() => setPage('experience')}
      />
    )
  }
  if (page === 'experience') {
    return (
      <ExperiencePage
        onBack={() => setPage('landing')}
        onNavigateToProjects={() => setPage('projects')}
      />
    )
  }
  if (page === 'projects') {
    return <ProjectsPage onBack={() => setPage('landing')} />
  }
  return <LandingPage onNavigateToEducation={() => setPage('education')} />
}

export default App
