import { createContext , useContext , useState } from "react";


export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [ values , setValues ] = useState([{
        Eventname: "",
        HostName: "",
        location: "",
        photoUrl: ""
    },
    ])

    const handleChange = (e) => {
        const {name ,value} = e.target
        setValues({...values , [name]: value })
    }

    function handleImage(e) {
        const { name , files } = e.target
        // console.log(URL.createObjectURL(e.target.files));
        setValues({...values , [name]: URL.createObjectURL(files[0])});
     }
 
  return (
    <AppContext.Provider value={{values , handleChange , handleImage}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppContextProvider