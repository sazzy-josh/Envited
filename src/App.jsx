import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Home from './pages/Home' 
import CreateEvent from './pages/createEvent'
import AppContextProvider from './context/stateContext'

 
 
 

function App() {
  return (
    <AppContextProvider>
     <Router>
      <Routes>
       <Route path='/' element={<Home />}>
        <Route path='create/new' element={ <CreateEvent /> }/>
       </Route>   
      </Routes>
     </Router>    
    </AppContextProvider>
  )
}

export default App
