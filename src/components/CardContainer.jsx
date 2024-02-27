import { CardContext } from "../context/CardContext"
import CardData from "../data/CardData"
import CardList from "./CardList"
import {useContext } from "react"
import CardForm from "./CardForm"


export default function CardContainer() {
    const {cardData, showForm, openForm} = useContext(CardContext)

      

    if(!cardData || CardData.length === 0) {
        return <p>No data</p>
    }
    console.log(cardData)

    return (
    <div className={` ${showForm ? 'absolute inset-0 w-full h-full' : ''}`}>
      <div className="flex flex-col justify-between items-center h-auto container" >


          <div className="">
              {cardData.map((item) => (
                  <CardList key={item.id}  item={item} />
              ))}
          </div>

         
    {showForm && (
              <div className="open-form absolute inset-0 w-full h-full ">
                <CardForm cardData={cardData}/>
                </div>
            )}



{!showForm && (
        <div className="center-btn m-4">
          <button className="btn" onClick={() => openForm()}>
            Add new card
          </button>
        </div>
      )}
          
      </div>
      </div>
  );
  
}


