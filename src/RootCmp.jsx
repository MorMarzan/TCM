import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage'
import { useTranslation } from 'react-i18next'

export function App() {
  const { t } = useTranslation()


  return (
    <Router>
      <section className="main-layout full app">
        <AppHeader t={t} />

        <main className="main-layout full app">
          <Routes>
            <Route element={<HomePage t={t} />} path="/" />
          </Routes>
        </main>

        <AppFooter t={t} />
      </section>
    </Router>
  )
}

