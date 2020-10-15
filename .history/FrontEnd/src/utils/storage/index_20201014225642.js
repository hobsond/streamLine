import React, { createContext,useContext } from 'react'
import storage from './storage'
const Context = createContext()
const Data = () => {
    let X = useContext(Context)
    return (
        < X.Provider value = { storage } />

    )
    
}



export default  Data



