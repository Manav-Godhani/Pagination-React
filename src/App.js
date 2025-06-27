import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products,setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();

    if(data && data.products){
      setProducts(data.products);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  console.log(products);
  
  return (
    <div>
      {
        products.length>0 && <div className='products'>
          {products.map((prd)=>{
            return <span className='products__single' key={prd.id}>
              <img src={prd.thumbnail} alt={prd.title}/>
              <span>{prd.title}</span>
            </span>
          })}
        </div>
      }
    </div>
  );
}

export default App;
