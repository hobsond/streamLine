import React, { createContext,useContext } from 'react'
import storage from './storage'
const Context = createContext(storage)

export {storage }

export default Context



