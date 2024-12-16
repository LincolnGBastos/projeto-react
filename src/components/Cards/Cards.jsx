import React from "react";
import { CardsStyle } from "./styles";
import MovieIcon from '../../assets/local-movies.svg'
import AwardIcon from '../../assets/award-icon.svg'

function Cards({ movieData }) {
 
  const titulo = movieData.name
  const tempo = movieData.runtimeInMinutes
  const wins = movieData.academyAwardWins
  const nominations = movieData.academyAwardNominations
  const budget = movieData.budgetInMillions
  const revenue = movieData.boxOfficeRevenueInMillions

  return (
    <>
      <CardsStyle>
        <div className="img-logo">
          <img src={MovieIcon} alt="movie img" />
        </div>
        <div className="card-content">
          <div className="wrapper-items">
            <h3>{titulo}</h3>
            <p>{tempo} min</p>
          </div>

          <div className="award">
            <img src={AwardIcon} alt="award icon" />
            <p>{wins} Wins & {nominations} Nominations</p>
          </div>

          <div className="budget">

            <div className="budget-item">
              <h1>Budget</h1>
              <p>{budget.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 0})}M</p>
            </div>

            <div className="revenue-item">
              <h1>Revenue</h1>
              <p>{revenue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 0})}M</p>
            </div>
          </div>
        </div>

      </CardsStyle>
    </>
  );
}

export default Cards;