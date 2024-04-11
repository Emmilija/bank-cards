import React from 'react';
import { CardContext } from "../context/CardContext"
import { useContext } from 'react';
import cardLogoMaster from "../assets/images/mastercard-logo.svg"
import cardLogoVisa from "../assets/images/visa-logo.svg"

function SelectedCardForEdit() {
  

  const { cardEdit } = useContext(CardContext);
  const { item } = cardEdit;


    if (!item) {
      return <div>No card selected for editing</div>;
  }

  const { name, number, expiry, cvc, cardName} = item;

  const isVisa = cardName === 'visa';

  return (
    <div className={`card-container ${isVisa && "two"} `}>
      <div className="card px-4 py-4 w-full flex flex-col justify-between">
        <div className="flex flex-row">
          <div className="logo-container">
            <img src={isVisa ? cardLogoVisa : cardLogoMaster} alt="Card Logo" />
          </div>

          <div className="flex justify-between">
                <div className="info mr-4 flex flex-col justify-end items-end">
                  <span className={`mr-4 small text-4 ${isVisa ? "black" : 'color'}`}>CVC</span>
                  <p className="font-bold text-14">{cvc}</p>
                </div>
                <div className="info mr-2 flex flex-col justify-end items-end">
                  <span className={`small ${isVisa ? "black" : 'color'}`}>EXPIRES</span>
                  <p className='font-bold text-14 $ text-white'>{expiry}</p>
                </div>
              </div>
        </div>
        <div className="name flex flex-col  ">
          <p className="font-bold">{name}</p>
          <p className={`font-bold ${isVisa ?  "black" : 'color'}`}>{number}</p>
        </div>
      </div>
    </div>
  );
}

export default SelectedCardForEdit;