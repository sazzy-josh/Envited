import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home' 
import CreateEvent from './pages/createEvent'
import ViewEvent from './pages/Event'
import Modal from './components/modal'
import { useGlobalContext } from './context/stateContext'
import Navbar from './components/Navbar'

function App() {

  const { handleSubmit } = useGlobalContext()
  return (
    <>
     <Navbar/>
      <Routes>  
          <Route path='/' element={<Home />}>
            <Route path='create/new' element={<CreateEvent /> }/>
          </Route> 
          <Route path='events' element={<ViewEvent />} >
            <Route path='edit' element={<Modal Value="Done" handleSubmit={handleSubmit}/>}/>
          </Route>
          {/* <Route path='event' element={<>Event</>} /> */}
      </Routes>   
    </>
  
  )
}

export default App
