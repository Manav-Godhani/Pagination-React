import { useEffect } from 'react';
import './App.css';

function App() {

  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    
  }

  useEffect(()=>{
    fetchData();
  },[]);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
