import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { HomePage } from './pages/HomePage'

export function App() {

  return (
    <Router>
      <section className="main-layout full app">
        <AppHeader />

        <main className="main-layout full app">
          <Routes>
            <Route element={<HomePage />} path="/" />
          </Routes>
        </main>

        <AppFooter />
      </section>
    </Router>
  )
}

