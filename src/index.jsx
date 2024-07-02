import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App (){
  return (
    <>
    <Header/>
    <Menu/>
    </>
  )
}
function Header (){
  return (
    <h1> Fast React Pizza C.O </h1>
  )
}
function Menu (){
  let pizzas = [];

  return (
    <main className='menu'>
      <h2> Our Menu</h2>
      { pizzas.length> 0? (
        <>
          <p>Authentic Italian cuisine. {pizzas.length} creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        <ul className='pizzas'>
          {pizzas.map((pizza) => 
          (
            <Pizza pizza = {pizza} key={pizza.name}/>
          ))}
          
        </ul>
          
        
        </>
      ): (
        <p> Still working on it</p>

      )}

    </main>
  )
}
function Pizza({pizza}){

  return (
    <li className='pizza'>
          <img src={pizza.photoName} alt='pizza'/>
          <div>
          <h3> {pizza.name} </h3>
          <p> {pizza.ingredients} </p>
          <span>{pizza.price}</span>
          </div>
        </li>
  )
}
ReactDom.createRoot(document.getElementById('root')).render(<App/>);

