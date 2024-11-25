import { useState } from 'react'
import { pizzas } from './data/pizzas';
import './App.css'

function App() {

  const [productos, setProductos]= useState(["Producto 1", "Producto 2", "Producto 3", "Producto 4"]);
  const [pizas, setPizas] = useState(pizzas);
  const [productoNuevo, setProductoNuevo] = useState("");

  const agregarProducto=(e)=>{
    e.preventDefault();
    if(!productoNuevo.trim()){
      alert('debe agregar algun producto')
      return
    }
    setProductos([...productos, productoNuevo]);
    setProductoNuevo("");
  }

  return (
    <>
    <form onSubmit={agregarProducto}>
    <input type="text" name="productoNuevo" onChange={(e)=>setProductoNuevo(e.target.value)} value={productoNuevo} />
    <button type="submit">Agregar Producto</button>
    </form>
    <ul>
      {productos.map((prodcuto, key)=>{
        return <li key={key}>{prodcuto}</li>
      })}
    </ul>
      
      
      
      <div style={{display:'grid'}}>
        {pizas.map((pizza, key)=>{
          return(
            <div style={{display:'flex', flexDirection:'column'}} key={key} >
              <h3> {pizza.name}</h3>
              <img src={pizza.img} alt="" />
              <p>{pizza.desc}</p>
              <ul>
                {pizza.ingredients.map((ingredient, key)=>{
                  return <li key={key}>{ingredient}</li>
                })}
              </ul>
              <p>Precio: ${pizza.price}</p>

            </div>
          ) 
        })}
      </div>
    </>
  )
}

export default App
