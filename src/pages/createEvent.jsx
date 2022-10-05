import { Link} from "react-router-dom"
import { MdCancel } from 'react-icons/md'
import { BsCalendar2Date } from 'react-icons/bs'
import { motion , AnimatePresence } from "framer-motion"
import { MdOutlineLocationOn } from "react-icons/md"
import { DateRange } from 'react-date-range';
import { useGlobalContext } from "../context/stateContext";


const CreateEvent = () => {   

  const { values , handleChange , handleImage } = useGlobalContext()

  
  console.log(values)
  return (
    <AnimatePresence>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity: 0}}
      transition={{duration:0.9}}
      className='modal'>
          <div className='modal-content p-4 rounded-xl backdrop-blur-lg flex flex-col' >
              <Link to='/'>
                <span className="flex justify-end text-xl my-1"><MdCancel className="text-purple-400"/></span>
              </Link>
              <form className="flex flex-col gap-y-2">
                <input type="text" name="HostName" value={values.HostName} onChange={handleChange} className="input-field" placeholder="Host name..."/>
                <input type="text" name="Eventname" value={values.Eventname} onChange={handleChange} className="input-field" placeholder="Event name..."/>
                <span className="date-picker flex items-center gap-x-2">
                 <MdOutlineLocationOn />
                <input type="text" name="location" value={values.location} onChange={handleChange} className="outline-none w-full h-full" placeholder="Your location..."/>
                </span>
                <span className="date-picker flex items-center gap-x-2" >
                <BsCalendar2Date />
                 <p>2/04/2011 to 12/05/2012</p>
                </span>
                <input type="file" name="photoUrl"  onChange={handleImage} className="rounded-sm text-sm color" />
              </form>
               <img src={values?.photoUrl} alt="photo"  />
          </div>
      </motion.div>
  </AnimatePresence>
  )
}

export default CreateEvent