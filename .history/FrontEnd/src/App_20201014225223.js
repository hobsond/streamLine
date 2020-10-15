import React, { useContext } from 'react';
import Storage_con from './utils/storage'
import './App.css';

function App() {
const Store = useContext(Storage_con)

console.log(Store)


  return (
    <div className="App">
      
    </div>

      



  );
}

export default App;
