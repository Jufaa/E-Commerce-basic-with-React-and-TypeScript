import { data } from "../data"
import { Product } from "../data";

type ProductListProps = {
  allProducts: Product[],
  setAllproducts: React.Dispatch<React.SetStateAction<Product[]>>,
  counter: number,
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  total: number,
  setTotal: React.Dispatch<React.SetStateAction<number>>
};


const ProductList = ({allProducts, setAllproducts, counter, setCounter, setTotal, total} : ProductListProps) => {


const addProduct = (producto: Product) => {
  if(allProducts.find(item => item.id === producto.id)){
    const products = allProducts.map(item => 
        item.id === producto.id 
        ? {...item, quantity: item.quantity + 1} 
        : item
      );
      setTotal(total + producto.price * producto.quantity)
      setCounter(counter + producto.quantity)
        return setAllproducts([...products])
  }
  setTotal(total + producto.price * producto.quantity)
  setCounter(counter + producto.quantity)
  setAllproducts([...allProducts, producto])
}
  return (
    
    <>
    
    <div className='container-items'>
        {

        data.map(producto => (
            <div key={producto.id} className='item'>
                <figure>

                <img src={producto.img} alt={producto.nameProduct} />
                </figure>
                <div className="info-product">
                <h2>{producto.nameProduct}</h2>
                <p className="price">{producto.price}</p>
                <button onClick={() => addProduct(producto)} className="btn-add-cart">Añadir al carrito</button>
            </div>
            </div>
        ))
}   
    </div>
    </>
  )
}

export default ProductList