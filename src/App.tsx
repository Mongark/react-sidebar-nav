import {
  Route,
  Routes,
} from 'react-router-dom'

import './App.css'
import Books from './Pages/Books/Books'
import Dashboard from './Pages/Dashboard/Dashboard'
import SideNav from './Components/SideNav/SideNav'

function App() {

  return (
    <div className='App'>
      <SideNav />

      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/books" element={<Books />}/>
      </Routes>
    </div>
  )
}

export default App
