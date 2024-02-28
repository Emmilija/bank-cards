import React from 'react';
import { CardContext } from "../context/CardContext"
import { useContext } from 'react';

function SelectedCardForEdit() {
  

    const { selectedCardForEdit} = useContext(CardContext)

  const { name, number, expiry, cvc, cardName } = selectedCardForEdit;

  return (
    <div className={`credit-card ${cardName}`}>
      <div className="card-number">{number}</div>
      <div className="card-name">{name}</div>
      <div className="card-expiry">{expiry}</div>
      <div className="card-cvc">{cvc}</div>
    </div>
  );
}

export default SelectedCardForEdit;