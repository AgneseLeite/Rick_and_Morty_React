import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage';
import CharacterCards from './components/CharacterCards';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import IndividualCard from './components/IndividualCard';
// import Routes from './routes';



function App() {

  return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to='/HomePage'>Home</Link>
                        </li>
                        <li>
                            <Link to='/CharacterCards'>Characters</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/CharacterCards' element={<CharacterCards />} />
                    <Route path='/CharacterCards/:id' element={<IndividualCard />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/HomePage' element={<HomePage />} />
                </Routes>
            </div>
        </Router>
  )
}

export default App
