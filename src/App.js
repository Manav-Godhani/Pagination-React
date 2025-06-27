import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products,setProducts] = useState([]);
  const [page,setPage] = useState(1);

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
        products.length>0 && (<div className='products'>
          {products.slice(page*10-10,page * 10).map((prd)=>{
            return <span className='products__single' key={prd.id}>
              <img src={prd.thumbnail} alt={prd.title}/>
              <span>{prd.title}</span>
            </span>
          })}
        </div>
      )}

      {
        products.length>0 && <div className='pagination'>
          <span>⬅️</span>
          {
            [...Array(products.length/10)].map((_,i)=>{
              return <span>{i + 1}</span>
            })
          }
          <span>➡️</span>
        </div>
      }
    </div>
  );
}

export default App;
