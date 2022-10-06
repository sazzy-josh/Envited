import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { MdOutlineKeyboardArrowRight, MdOutlineModeEdit } from 'react-icons/md';
import { GoCalendar, GoLocation } from "react-icons/go"
import { Outlet, useNavigate} from 'react-router-dom'
import { useGlobalContext } from '../context/stateContext';
import { format } from 'date-fns';

const ViewEvent = () => {
   const navigate = useNavigate()
   const handleEdit = () => {
    navigate("edit")
   }

  const { values , state } = useGlobalContext()

  return (
    <>
    <Outlet />
     <div className="hidden px-[240px] py-[180px] lg:flex  w-full h-screen bg-slate-100">
      <div className='w-1/2 '>

       <div className='flex items-center justify-between -mt-[20px]'>
        <p className='font-bold text-[48px] text-[#240D57] items-center leading-[55px]'>{values.Eventname}</p>
        <MdOutlineModeEdit onClick={handleEdit}  className="text-2xl cursor-pointer opacity-60"/>
       </div>

       <span className="text-left mt-3 text-md font-normal text-[#828282] flex gap-x-1">Hosted by <p className='font-bold'>{values.HostName}</p> </span>
      
       <div className='flex justify-between mt-[50px]'>
         <span className="flex gap-x-4">
           <span className='rounded-lg border-style'>
            <GoCalendar className='text-[#8456EC]' />
           </span>
           <span className='flex flex-col gap-y-[2px]'>
              <span className='text-[#240D57] font-bold text-[18px]'>
              <span className='flex gap-x-1'>
              <p>{`${format(state[0].startDate,"dd/MM/yyyy")}`}</p>
              <p>{values.startTime}</p>
              </span>
              </span>
            <span className='flex gap-x-2 text-[#4F4F4F] text-[18px]'>
               <p>to</p>
               <p className='font-bold'>{`${format(state[0].endDate,"dd/MM/yyyy")} ` + `${values.endTime}` } </p>
              </span>
            </span>
         </span>
         <span className='flex items-center'>
         <MdOutlineKeyboardArrowRight className='text-slate-500 text-2xl' />
         </span>
       </div>

       <div className='flex justify-between mt-[50px]'>
         <span className="flex gap-x-4">
           <span className='rounded-lg border-style'>
            <GoLocation className='text-[#8456EC]' />
           </span>
           <span className='flex flex-col gap-y-[2px]'>
              <span className='text-[#240D57] font-bold text-[18px]'>
              <span className='flex'>
              <p>Street name</p>
              </span>
              </span>
            <span className='flex gap-x-2 text-[#4F4F4F] text-[18px]'>
            <p>{values.location}</p>
              </span>
            </span>
         </span>
         <span className='flex items-center'>
         <MdOutlineKeyboardArrowRight className='text-slate-500 text-2xl' />
         </span>
       </div>
      </div>


      <div className='w-1/2 flex justify-center items-center'>
       <img src={values.photoUrl} alt="event-image" className='w-[400px] h-[400px] object-contain'/>
      </div>

     </div>   
    </>
  )
}

export default ViewEvent