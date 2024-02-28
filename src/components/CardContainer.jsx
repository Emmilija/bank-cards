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
    <div className={showForm ? "open-form" : ''}>

<header className="mb-8 h-16 px-8 py-8 flex flex-col justify-start items-start">
     
     <h1 className="text-primary  font-black text-30">Your Cards</h1>
     <p className="text-gray-dark text-14">
       Add, edit or delete your cards any time
     </p>
   </header>

      <div className="flex flex-col justify-between items-center h-auto container" >

      {showForm && (
              <div className="absolute inset-0 w-full h-full ">
                <CardForm cardData={cardData}/>
                </div>
            )}


{!showForm && (
          <div className="flex flex-col justify-between ">
              {cardData.map((item) => (
                  <CardList key={item.id}  item={item} />
              ))}
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


