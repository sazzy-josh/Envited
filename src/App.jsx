import {Routes , Route, useNavigate  } from 'react-router-dom'
import Home from './pages/Home' 
import CreateEvent from './pages/createEvent'
import ViewEvent from './pages/Event'
import Modal from './components/modal'
import { useGlobalContext } from './context/stateContext'

function App() {

  const { handleSubmit } = useGlobalContext()
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='create/new' element={ <CreateEvent /> }/>
        </Route> 
        <Route path='/events' element={<ViewEvent />} >
          <Route path='edit' element={ <Modal Value="Done" handleSubmit={handleSubmit}/>}/>
        </Route> 
    </Routes>   
    </>
  
  )
}

export default App
