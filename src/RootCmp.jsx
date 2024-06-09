import { Route, Router, BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.scss'

export function App() {

  return (
    <Router>
      <Route element={<HomePage />} path="/" />
    </Router>
    // <p>May all beings be happy</p>
  )
}

