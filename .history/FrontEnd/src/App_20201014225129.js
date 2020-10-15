import React, { useContext } from 'react';
import Storage_con from './utils/storage'
import './App.css';

function App() {
const Store = useContext(Storage_con)



  return (
    <Store.Provider>
      <div className="App">
      </div>

    </Store.Provider>
      



  );
}

export default App;
