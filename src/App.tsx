import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { WorkPage } from './pages/WorkPage'
import { LeadershipPage } from './pages/LeadershipPage'
import { ConsultingPage } from './pages/ConsultingPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/capabilities" element={<CapabilitiesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
