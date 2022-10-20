import { createContext , useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore"; 
import { colRef } from "../firebase.config";
import {  toast } from 'react-toastify';


export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [ values , setValues ] = useState([{
        Eventname: "", //*handles input for eventname 
        HostName: "",  //*handles input for hostname
        startTime: "", //*hanldes input for start Time
        endTime : "",  //*handles input for end Time
        location: "", //*handles input for location
        photoUrl: "" , //*handles input for photoUrl
      }
    ])

    const [state, setState] = useState([
     {
       startDate: new Date(),
       endDate: new Date(),
       key: 'selection'
     }
   ]); 

    const navigate = useNavigate()

    //*handles onchange event for all inputs
    const handleChange = (e) => {
        const { name , value } = e.target   
        setValues({ ...values , [name]: value })  
    }

    //*handles event for file upload and creates a Url for the browser to display image 
    function handleImage(e) {
        const { name , files } = e.target
        //> console.log(URL.createObjectURL(e.target.files));
        setValues({...values , [name]: URL.createObjectURL(files[0])});
     }

     //*handles submit button after event has been edited
     const handleSubmit = async(e) => {
       e.preventDefault()
       await addDoc(colRef , {...values})
       toast.success("added successfully")
       navigate(-1)
     }
 
  return (
    <AppContext.Provider value={{values , state, handleChange , handleImage , handleSubmit, setState}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppContextProvider