import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { MdOutlineModeEdit } from 'react-icons/md';
import { Outlet} from 'react-router-dom'


const ViewEvent = () => {
  return (
    <>
    <Outlet />
     <div>
     <MdOutlineModeEdit/>
     </div>   
    </>
  )
}

export default ViewEvent