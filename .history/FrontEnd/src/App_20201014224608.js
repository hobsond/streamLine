import React, { useContext } from 'react';
import Storage_con from './utils/storage'
import './App.css';

function App() {

  const Context = useContext(Storage_con);

  return (
    <Context.Provider>
      <div className="App">

      </div>

    </Context.Provider>

  );
}

export default App;
