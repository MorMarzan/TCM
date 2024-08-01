import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage'
import { LanguageProvider } from './contexts/LanguageContext'
import { UserMsg } from './cmps/UserMsg'

export function App() {

  return (
    <Router>
      <LanguageProvider>
        <section className="main-layout full app">
          <AppHeader />

          <main className="main-layout full app">
            <Routes>
              <Route element={<HomePage />} path="/" />
            </Routes>
          </main>

          <AppFooter />
          <UserMsg />
        </section>
      </LanguageProvider>
    </Router>
  )
}

