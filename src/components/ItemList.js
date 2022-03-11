import Counter from "./Counter";
import { useState } from "react";
import { useEffect } from "react";



let productos = [
    {
    
      id: 1,
    
      nombre: "Jamon",
    
    precio: 100,
    },
    
    {
    
      id: 2,
    
      nombre: "QUeso",
    
    precio: 100,
    },
    
    {
    
      id: 1,
    
      nombre: "Salame",
    
    precio: 100,
    } 
  
  
  
  
  
  ]


const ItemList = () => {

    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState(["jabon", "Lisoform"]);
  
    useEffect ( ()=> {
  setTimeout(() => {
  
    setProducts(products);
  
    console.log(products);
  
    setLoading (false)
    
  }, 3000);
  
  console.log (productos)
    }
  
  
  
    )

 

  return (

    <div className="ListaItems">

<div className="item">
    <h3> {loading ? "Cargando, espera salame" : productos.map ((id,nombre) => {

return <li>{productos.id}</li>



      } ) } </h3>
     <Counter> </Counter>

     </div>

     <div className="item">
     <h3> {loading ? "Cargando, espera salame" : productos.map ((id,nombre) => {

return <li>{productos.id}</li>



      } ) } </h3>
     <Counter> </Counter>

     </div>

     <div className="item">
    <h3> {loading ? "Cargando, espera salame" : productos.map ((id,nombre) => {

return <li>{productos.id}</li>



      } ) } </h3>
     <Counter> </Counter>

     </div>
     </div>
  )
}

export default ItemList;