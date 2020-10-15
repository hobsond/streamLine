import React, { useContext } from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import Context, { storage } from './utils/storage'
import Fb from './utils/firebase'


const {auth} = {...Fb}

function App() {
const storage = useContext(Context)

  return (
    <div className="App">
      <Context.Provider value={{storage,Firebase:{...{...Fb}}} }>
        
      </Context.Provider>


      
    </div>


      



  );
}

export default App;
