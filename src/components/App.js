import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const budget = 100

function App() {
  const [sushi, setSushi] = useState([])
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(5)
  const [money, setMoney] = useState(budget)

  useEffect(() => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => setSushi(data))
  }, [])

  
  function handleMoreClick() {
    
    setMin(min + 4)
    setMax(max + 4)
   
  }
  const tabledSushi = sushi.filter((s) => s.id > min && s.id < max)


  function handleEatSushi(eatenSushi) {
   if(eatenSushi.price <= money) {
   setSushi(sushi.map(s => s === eatenSushi ? {...s, eaten: true} : s))
   setMoney(money - eatenSushi.price)
   
    }

  }

  return (
    <div className="app">
      <SushiContainer 
      tabledSushi={tabledSushi}
      onMoreClick={handleMoreClick}
      onEatSushi={handleEatSushi}
      />
      <Table 
      money={money}
      plates={sushi.filter((s) => s.eaten)}
      
      />
    </div>
  );
}

export default App;
