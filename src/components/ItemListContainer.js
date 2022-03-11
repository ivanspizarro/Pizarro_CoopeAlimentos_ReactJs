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

const ItemListContainer = (props) => {

  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState(["jabon", "Lisoform"]);

  useEffect(() => {
    setTimeout(() => {

      setProducts(products);

      console.log(products);

      setLoading(false)

    }, 3000);

    console.log(productos)
  }



  )

  return (

    <main> Bienvenido Heroe de Trafalgar {props.name} {props.surname}

      <Counter> </Counter>

      <h2> {loading ? "Cargando, espera salame" : productos.map((a, b) => {

        return <li>{productos.nombre}</li>



      })} </h2>


    </main>)
}


export default ItemListContainer

