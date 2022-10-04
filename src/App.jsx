import './App.css'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Home from './pages/Home'
import CreateEvent from './pages/createEvent'




function App() {
  
  return (
    <Router>
     <Routes>
      <Route path='/' element={<Home />}>
        <Route path='create/new' element={ <CreateEvent /> }/>
      </Route>   
     </Routes>
    </Router>    
  )
}

export default App
