import {Dashboard} from '@material-ui/icons'
import {
  Route,
  Routes,
} from 'react-router-dom'

import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}/>
    </Routes>
  )
}

export default App
