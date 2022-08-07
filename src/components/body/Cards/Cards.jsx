import React from 'react';
import Card from './Card/Card';
import "./Cards.css";
import { CardsData } from './Data';

const Cards = () => {
  return (
    <div className='cards'>
    {CardsData.map((card,index)=> {
        return(
            <div className='parentContainer' key={index}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
            </div>
        )
    })}
    </div>
  )
}

export default Cards