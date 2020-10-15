import React, { useContext } from 'react';
import Context,{storage} from './utils/storage'


import './App.css';

function App() {
const storage = useContext(Context)

  return (
    <div className="App">
      <Context.Provider value={storage}>
        
      </Context.Provider>


      
    </div>


      



  );
}

export default App;
