import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate} from "react-router-dom"
import Modal from '../components/modal';
import { useGlobalContext } from '../context/stateContext';


const CreateEvent = () => {   
 
  const { handleSubmit } = useGlobalContext()
  const navigate = useNavigate()

  // const handleSubmit = () => { 
  //  navigate('/events')
  // }

  return (
    <>
      <Modal handleSubmit={handleSubmit} Value="Next" />
    </>
  )
}

export default CreateEvent