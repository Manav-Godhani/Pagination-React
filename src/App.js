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

  const selectPageHandler = (selecetdPage) => {
    setPage(selecetdPage);
  }

  console.log(products);
  
  return (
    <div>
      <center><h4><b>Pagination using dummy json data</b></h4></center>
      {
        products.length>0 && (<div className='products'>
          {products.slice(page*6-6,page * 6).map((prd)=>{
            return <span className='products__single' key={prd.id}>
              <img src={prd.thumbnail} alt={prd.title}/>
              <span>{prd.title}</span>
            </span>
          })}
        </div>
      )}

      {
        products.length>0 && <div className='pagination'>
          {/* <span>⬅️</span> */}
          {
            [...Array(products.length/6)].map((_,i)=>{
              return <span className={page===i+1? "PaginationSelected" : ""} onClick={()=>selectPageHandler(i + 1)} key={i}>{i+1}</span>
            })
          }
          {/* <span>➡️</span> */}
        </div>
      }
    </div>
  );
}

export default App;
