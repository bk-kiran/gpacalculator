import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import GradeCalculator from './components/GradeCalculator'
import GPACalculator from './components/GPACalculator'
import './App.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h1>📊 Academic Calculators</h1>
          <p>Simple, fast, and accurate calculators for your college needs</p>
        </div>

        <div className="calculators-grid">
          <Link to="/grade-calculator" className="calculator-card">
            <div className="calculator-icon">📈</div>
            <h2>Grade Calculator</h2>
            <p>Calculate your overall course percentage based on component grades and weightages</p>
            <div className="card-arrow">→</div>
          </Link>

          <Link to="/gpa-calculator" className="calculator-card">
            <div className="calculator-icon">🎓</div>
            <h2>GPA Calculator</h2>
            <p>Track your GPA across multiple semesters and calculate your cumulative GPA with course grades and credits</p>
            <div className="card-arrow">→</div>
          </Link>
        </div>

        <div className="home-footer">
          <p>bk-kiran</p>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const location = useLocation()

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          📊 Academic Calculators
        </Link>
        <div className="nav-links">
          <Link 
            to="/grade-calculator" 
            className={location.pathname === '/grade-calculator' ? 'active' : ''}
          >
            Grade Calculator
          </Link>
          <Link 
            to="/gpa-calculator" 
            className={location.pathname === '/gpa-calculator' ? 'active' : ''}
          >
            GPA Calculator
          </Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade-calculator" element={<GradeCalculator />} />
          <Route path="/gpa-calculator" element={<GPACalculator />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
