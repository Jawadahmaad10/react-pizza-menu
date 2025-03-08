import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


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



// Each component can return exactly one element
function App(){
    return (
    <div className="container">
    <Header/>
    <Menu/>
    <Footer/>
    </div> 
    );
}



function Header(){
  // const style = { color: "red" , fontSize: "32px" , textTransform: "uppercase"};
  const style = {};
 

  return(
    <header className="header">
    <h1 style={style} >Fast React Pizza</h1> 
    </header>
  ); 
}

function Menu(){
 
   const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;


  

 return( 
 <main className="menu">
 <h2>Our Menu</h2>

 {numPizzas > 0 ? 
 ( <ul className="pizzas">
  {/* {pizzaData.map((pizza) =>  (<Pizza name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} /> ))} */}
  
  {/* usually we pass entire object as below   and should have a key unique key*/}
  {pizzas.map((pizza) =>  (<Pizza pizzaObj = {pizza}  key={pizza.name}/> ))}
   
 </ul>) 
 : <p>We're still working on our menu . Please come back later</p>  }


 {/* <Pizza 
 name="Pizza spinaci"
 ingredients ="Tomato , mushrooms"
 photoName="pizzas/spinaci.jpg"
  />
 <Pizza 
 name="Pizza Funghi"
 ingredients ="Tomato , mozarella, spinach, and ricotta cheese"
 photoName="pizzas/funghi.jpg"
 price={12}
  />  */}
 </main>
 ); 
}


function Pizza(props){
  console.log(props);
  return (
  <li className="pizza">
    <img src={props.pizzaObj.photoName}></img>  
    <div className="">
    <h3> {props.pizzaObj.name} </h3>
    <p>{props.pizzaObj.ingredients}</p>
    <span>{props.pizzaObj.price + 3}</span>
    </div> 
 
  </li>
  );
}

function Footer(){

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour;

  // if(hour >= openHour && hour <= closeHour) alert("We're currently  Open !")
  // else alert("We're currently  Closed !")
  

  return <footer>{isOpen && (
   <div className="order">
  <p>We're open unti; {closeHour}:00. Come visit us or oder online.</p>
  <button className="btn">Order</button>
   </div>  
)}</footer>;

  // return React.createElement("footer", null , "We're currently  Open !");
}





// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App/>
 </React.StrictMode>

);



//React before 18
// React.render(<App/>);