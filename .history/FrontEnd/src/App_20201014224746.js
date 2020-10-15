import React, { useContext } from 'react';
import Storage_con from './utils/storage'
import './App.css';

function App() {

  const Context = useContext(Storage_con);

  return (
    <div className="App">
      <Context.Provider>
        
      </Context.Provider>

    </div>


  );
}

export default App;
