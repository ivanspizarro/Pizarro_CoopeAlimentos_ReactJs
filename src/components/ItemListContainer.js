
const ItemListContainer = (props) => {
  
  console.log (props)
  
    return (
     
    <main> Bienvenido Heroe de Trafalgar {props.name} {props.surname} <p> Dicen que tengo {props.edad} </p> </main>
  )
};

export default ItemListContainer