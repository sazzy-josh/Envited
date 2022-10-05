import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom'
import Home from './pages/Home' 
import CreateEvent from './pages/createEvent'
import AppContextProvider from './context/stateContext'
import ViewEvent from './pages/Event'
import Modal from './components/modal'

 
 

function App() {
  return (
    <AppContextProvider>
     <Router>
      <Routes>
       <Route path='/' element={<Home />}>
        <Route path='create/new' element={ <CreateEvent /> }/>
       </Route> 
       <Route path='/events' element={<ViewEvent />} >
         <Route path='edit' element={ <Modal/> }/>
       </Route> 
      </Routes>
     </Router>    
    </AppContextProvider>
  )
}

export default App
