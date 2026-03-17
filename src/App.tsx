import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { CapabilitiesPage } from './pages/CapabilitiesPage'
import { WorkPage } from './pages/WorkPage'
import { LeadershipPage } from './pages/LeadershipPage'
import { ConsultingPage } from './pages/ConsultingPage'
import { ContactPage } from './pages/ContactPage'
import mixpanel from "mixpanel-browser";


function App() {

  //Import Mixpanel SDK

  // Create an instance of the Mixpanel object, your token is already added to this snippet
  mixpanel.init('1d6317279e4ea4a5153ddce48b5e5e18', {
    autocapture: true,
    record_sessions_percent: 0,
  })

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
