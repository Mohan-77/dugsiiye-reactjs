import { useState } from "react";

function Practice() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setPrice] = useState("");


  const handleAddProducts = () => {
    if(productName.trim() !== '' && productPrice.trim()!==''){
        const newProduct = {
            id: Date.now(),
            name: productName,
            price: parseFloat(productPrice), 
            quantity: 1,
        }
          setProducts([...products, newProduct]);
          setProductName("")
          setPrice("")
          
    }
  }

  const removeProduct = (id)=> {
     const updateProducts = products.filter(product => product.id !== id)
    setProducts(updateProducts)
  }

  // const increaseQuantity = (id) => {
  //   const updateProducts = products.map((product) => 
  //     product.id === id ? {... product, quantity: product.quantity + 1} : product
  //   )
  //   console.log(updateProducts)
  //   setProducts(updateProducts)
  
  // }

  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h3>Simple Shopping Cart</h3>
      <div>
        <p>Add a Product</p>
        <input
          type="text"
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product name"
        />

        <input
          type="number"
          min="0"
          step="0.01"
          value={productPrice}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        />
        <button onClick={handleAddProducts}>Add to Cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in cart</h3>
          <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                    <div>
                        Quantity:
                        <button>-</button> 1
                        {/* <button onClick={() => increaseQuantity(product.id)}>+</button> */}
                        <button onClick={() => increaseQuantity(product.id)}>+</button>
                    </div>
                    <button onClick={() => removeProduct(product.id)}>Remove</button>
                </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>This cart is empty</p>
      )}
    </div>
  );
}
export default Practice;
