import React, { useState } from "react";
import { DivTitle } from "./styles";
import Cards from "../Cards/Cards";


function TitleDiv({ busca, setBusca }) {

  

  return (
    <>
      <DivTitle>
        <h1>Lord of the Rings Movies</h1>
        <div className="content">
          <div>
            <p>Ave. movie runtime: xxx min</p>
            <p>Ave. movie budget: $XXM</p>
          </div>
          <input type="text" placeholder='Filter movies by name' value = {busca} onChange={(Event) => setBusca (Event.target.value)}/>
        </div>
      </DivTitle>

    </>
  )
}

export default TitleDiv;