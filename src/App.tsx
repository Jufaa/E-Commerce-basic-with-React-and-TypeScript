import { useState } from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import './index.css'
import { Product } from "./data";
function App() {

  const [allProducts, setAllproducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
     <Header
      allProducts={allProducts}
      setAllproducts={setAllproducts}
      total={total}
      setTotal={setTotal}
      counter={counter}
      setCounter={setCounter}/>
     <ProductList
     
     allProducts={allProducts}
     setAllproducts={setAllproducts}
     total={total}
     setTotal={setTotal}
     counter={counter}
     setCounter={setCounter}/>

    </>
  )
}

export default App
