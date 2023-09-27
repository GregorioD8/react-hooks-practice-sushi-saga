import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ tabledSushi, onEatSushi, onMoreClick}) {

  const servedSushi = tabledSushi.map((s) => (
    <Sushi
    key={s.id}
    sushi={s}
    onEatSushi={onEatSushi}
    />
  ))

  
  return (
    <div className="belt">
      {servedSushi}
      <MoreButton 
      onMoreClick={onMoreClick}
      />
    </div>
  );
}

export default SushiContainer;
