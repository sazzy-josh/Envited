import { Link} from "react-router-dom"
import { MdCancel } from 'react-icons/md'
import { motion , AnimatePresence } from "framer-motion"

const CreateEvent = () => {

    
  return (
    <AnimatePresence>

    <motion.div
     initial={{opacity:0}}
     animate={{opacity:1}}
     exit={{opacity: 0}}
     transition={{duration:0.8 }}
     className='modal'>
        <div className='modal-content p-4 rounded-lg backdrop-blur-lg flex flex-col' >
            <Link to='/'>
             <span className="flex justify-end text-lg"><MdCancel className="text-purple-400"/></span>
            </Link>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem doloremque eius voluptas quae tempora vel ratione, minus enim aliquam dolorem distinctio incidunt nostrum, deserunt qui! Distinctio ad quasi quae adipisci illum facilis culpa, rem saepe, sit unde voluptatum esse aliquam tempora velit nobis quaerat rerum nihil molestiae harum aut temporibus aperiam voluptatibus consequatur. Nostrum officia facilis praesentium ipsum animi eos in mollitia natus, optio odit eligendi porro, quisquam, beatae perferendis temporibus a eaque voluptatibus? Delectus doloribus reprehenderit nobis in? Modi, sed corporis quam vitae esse aliquid enim ipsam voluptatem, id blanditiis excepturi aut rerum, itaque consequatur! At consequatur harum iure?
        </div>
    </motion.div>
  </AnimatePresence>
  )
}

export default CreateEvent