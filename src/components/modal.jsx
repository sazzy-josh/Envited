import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom"
import { MdCancel, MdCelebration } from 'react-icons/md'
import { BsCalendar2Date, BsPersonCircle } from 'react-icons/bs'
import { HiOutlineCloudUpload } from 'react-icons/hi'
import { motion , AnimatePresence } from "framer-motion"
import { MdOutlineLocationOn } from "react-icons/md"
import { DateRange } from 'react-date-range';
import Avatar from "../assets/Birthday cake.png"
import { format } from 'date-fns'
import { useGlobalContext } from '../context/stateContext';
import { useState } from 'react';


const Modal = ({ handleSubmit , Value}) => {
   const navigate = useNavigate()
      
   //Function to go back one step back..
    const goBack = () => {
        navigate(-1)
    }

  const [ isDateOpen , setIsDateOpen ]  = useState(false)
  const { values , handleChange , handleImage , state, setState } = useGlobalContext()

  return (
    <AnimatePresence>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity: 0}}
      transition={{duration:0.9}}
      className='modal'>
          <div className='modal-content p-4 rounded-xl backdrop-blur-lg flex flex-col' >

             <span className="flex justify-end text-xl my-1 cursor-pointer" onClick={goBack}><MdCancel className="text-purple-400"/></span>
             

              <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
                <span className="date-picker flex items-center gap-x-2">
                  <BsPersonCircle className="text-slate-400"/>
                <input type="text" name="HostName" value={values.HostName}  autoFocus onChange={handleChange} className="input-field " placeholder="Host name..."/>
                </span>
               
                <span className="date-picker flex items-center gap-x-2">
                  <MdCelebration className="text-slate-400"/>
                <input type="text" name="Eventname" value={values.Eventname} onChange={handleChange} className="input-field" placeholder="Event name..."/>
                </span>

                <span className="date-picker flex items-center gap-x-2">
                 <MdOutlineLocationOn />
                <input type="text" name="location" value={values.location} onChange={handleChange} className="input-field" placeholder="Your location..."/>
                </span>

                <div className='date-picker justify-between flex'>
                  <span >
                    <p> Start:</p>
                    <input type="time" name="startTime" onChange={handleChange} required></input>
                  </span>

                  <span>
                    <p>End:</p>
                    <input type="time" name="endTime" onChange={handleChange} required></input>
                  </span>
                </div>

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
                    minDate ={new Date()}
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                    className="date"
                    />}
                  </motion.div>
                </div>

                <div className="flex items-center gap-x-1">
                  <label htmlFor="photoUrl">
                  <div className="flex items-center gap-x-2">   
                  <img src={ !values.photoUrl ? Avatar : values.photoUrl } alt="event-image" className="rounded-full w-[100px] h-[100px] cursor-pointer object-contain"/>
                  <p className="font-light flex gap-x-1 items-center cursor-pointer ">Upload Image <HiOutlineCloudUpload/></p>
                
                  </div>
                  <input type="file" name="photoUrl" id="photoUrl" onChange={handleImage} className="rounded-sm text-sm color hidden" />
                  </label>
                  </div>
                <>
                {values.HostName && values.location && values.photoUrl && values.Eventname !== "" ? (<input type="submit" className='border rounded-lg flex items-center justify-center p-1 font-semibold  text-[20px] text-white btn-gradient shadow-lg cursor-pointer' value="Next"/>) : ( <input type="submit" disabled className='border rounded-lg flex items-center justify-center p-1 font-semibold  text-[20px] text-white btn-gradient shadow-lg cursor-not-allowed' value={Value} />)}
                </>
              </form>
             
          </div>
      </motion.div>
  </AnimatePresence>
  )
}

export default Modal