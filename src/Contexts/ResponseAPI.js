import { createContext, useState } from "react";


export const ResponseAPI = createContext()

function ResponseAPIProvider ({children}) {
  const [responseAPI, setResponseAPI] = useState([])

 
  return(
    <ResponseAPI.Provider value={{responseAPI, setResponseAPI}}>
      {children}
    </ResponseAPI.Provider>
  )
}

export default ResponseAPIProvider