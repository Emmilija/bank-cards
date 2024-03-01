import { createContext, useState, useEffect } from "react";

export const CardContext = createContext()

export const  CardProvider = ({children}) => {
const [cardData, setCardData] = useState([])

const [showForm, setShowForm] = useState(false);

const [cardEdit, setCardEdit] = useState({
    item: {},
    edit: false,
    
})

useEffect(() => {
    fetchCard()
}, [])



//Fetch cards
const fetchCard = async () => {
    const response = await fetch(`/card?_sort=id`)
    const data = await response.json()

  setCardData(data)
}

  //selected card for edit
  const selectedCardForEdit = (selectedCard) => {
    setCardEdit({item: selectedCard, edit: true})
 
}


//update card

const updateCard = async (id, updItem) => {
    const response = await fetch(`/card/${id}`,{
        method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updItem)
        
    } )
    const data = await response.json()
        const updatedCards = cardData.map(card => {
            if (card.id === id) {
                return { ...card, ...data }; 
            }
            return card;
        });
    
     
        setCardData(updatedCards);
    
     
        setCardEdit({ item: {}, edit: false });
    };
    


 
const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };



//add card
const addCard = async(newCard) => {
const response = await fetch('/card', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCard),
})
const data = await response.json()
        setCardData([data, ...cardData])
    
    }
   



//delte card
const deleteCard = async (id) => {
    if(window.confirm("are you sure you want to delete this card? ")) {
await fetch(`/card/${id}`, {method: 'DELETE'})

        setCardData(cardData.filter((item) => item.id !== id))
}



}
    return <CardContext.Provider value={{
        cardData,
        showForm,
        cardEdit,
        openForm,
        closeForm,
        addCard,
        deleteCard,
        selectedCardForEdit,
        updateCard,
        
    }}>
        {children}
    </CardContext.Provider>
}

