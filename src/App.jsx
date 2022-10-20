import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home' 
import CreateEvent from './pages/createEvent'
import ViewEvent from './pages/Event'
import Modal from './components/modal'
import { useGlobalContext } from './context/stateContext'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { handleSubmit } = useGlobalContext()
  return (
    <>
     <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
     />
     <Navbar/>
      <Routes>  
          <Route path='/' element={<Home />}>
            <Route path='create/new' element={<CreateEvent /> }/>
          </Route> 
          <Route path='events' element={<>Events</>} />
          <Route path='events/:id' element={<ViewEvent />} >
            <Route path='edit/:id' element={<Modal Value="Done" handleSubmit={handleSubmit}/>}/>
          </Route>
      </Routes>   
    </>
  
  )
}

export default App
