import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from "react"
import { Link} from "react-router-dom"
import { MdCancel, MdCelebration } from 'react-icons/md'
import { BsCalendar2Date, BsPersonCircle } from 'react-icons/bs'
import { motion , AnimatePresence } from "framer-motion"
import { MdOutlineLocationOn } from "react-icons/md"
import { DateRange } from 'react-date-range';
import { useGlobalContext } from "../context/stateContext";
import Avatar from "../assets/avatar.png"
import { format } from 'date-fns'


const CreateEvent = () => {   
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [ isDateOpen , setIsDateOpen ]  = useState(false)
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
                <span className="date-picker flex items-center gap-x-2">
                  <BsPersonCircle className="text-slate-400"/>
                <input type="text" name="HostName" value={values.HostName} onChange={handleChange} className="input-field" placeholder="Host name..."/>
                </span>
               
                <span className="date-picker flex items-center gap-x-2">
                  <MdCelebration className="text-slate-400"/>
                <input type="text" name="Eventname" value={values.Eventname} onChange={handleChange} className="input-field" placeholder="Event name..."/>
                </span>

                <span className="date-picker flex items-center gap-x-2">
                 <MdOutlineLocationOn />
                <input type="text" name="location" value={values.location} onChange={handleChange} className="input-field" placeholder="Your location..."/>
                </span>

                <div className='flex flex-col relative h-[5vh]'>
                  <span className="date-picker flex items-center gap-x-2" onMouseEnter={() => setIsDateOpen(prev => !prev)} >
                  <BsCalendar2Date />
                  <p>{`${format(state[0].startDate ,"dd/MM/yyyy")} to ${format(state[0].endDate ,"dd/MM/yyyy")}`}</p>
                  </span>
                  <motion.div
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   exit={{opacity: 0}}
                   transition={{duration:2}}
                   onMouseLeave={() => setIsDateOpen(prev => !prev)}>
                  {isDateOpen && <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className="date"
                    />}
                  </motion.div>
                </div>

                <div className="flex items-center gap-x-1">
                  <label htmlFor="photoUrl"  >
                  <div className="flex items-center gap-x-2 cursor-pointer">
                  <img src={ !values.photoUrl ? Avatar : values.photoUrl } alt="event-image" className="rounded-full w-[100px] h-[100px] cursor-pointer object-contain"/>
                  <p className="font-light">Upload Image</p>
                  </div>
                  <input type="file" name="photoUrl" id="photoUrl" onChange={handleImage} className="rounded-sm text-sm color hidden" />
                  </label>
                </div>

                <input type="submit" className='border rounded-lg flex items-center justify-center p-1 font-semibold  text-[20px] text-white btn-gradient shadow-lg ' value="Next"/> 
              </form>
             
          </div>
      </motion.div>
  </AnimatePresence>
  )
}

export default CreateEvent