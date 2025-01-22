
import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { useEffect } from "react";
import { db } from "./data/db";



function App() {

  

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])// carrito esta en esta componente


  function addToCart(item){
    const itemExists = cart.findIndex(guitar=> guitar.id ===item.id)
    if(itemExists>=0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].quantity++
      setCart(updatedCart)
    } else {
      item.quantity = 1
      setCart([...cart, item])
    }
  }
  
  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map( item => {
      if(item.id ===id && item.quantity < MAX_ITEMS) {
        return{
          ...item,
          quantity: item.quantity +1
        }
      }
      return item
    })
    setCart(updatedCart)
  }



  // state
 //const[auth, setAuth] = useState(false);

 // const[total, setTotal] = useState(0);// o useState ([]) un arreglo vacio, es su valor inicial.
  

 //const [variableAutentificado, setVariableAutentificado] = useState(true);

 //useEffect(()=>{
 // console.log("esperando , que a los 3 segundos cambio a true")
// },[variableAutentificado])

// setTimeout(()=>{
//  setVariableAutentificado(false)
// },3000);


  return (
    <>

    <Header
      cart={cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      
    
      />
    

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">

          {data.map((guitar)=>( // crea un nuevo arreglo de data y muestra en pantalla los 12 objetos
            <Guitar 
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}

            />

          ))}
          
          
            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
