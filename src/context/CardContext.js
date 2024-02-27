import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CardContext = createContext()

export const  CardProvider = ({children}) => {
const [cardData, setCardData] = useState([
    {
    id: '2',
    name: "Emilija Karatashevska",
    number: '4456 4545 4564 4564',
    expiry: '16/22',
    cvc: '123',
    cardName: "visa",
    },
    {
        id: '1',
        name: "Emilija Karatashevska",
        number: '4456 4545 4564 4564',
        expiry: '16/22',
        cvc: '123',
        cardName: "mastercard",
        }
])

const [showForm, setShowForm] = useState(false);

const [cardEdit, setCardEdit] = useState({
    item: {},
    edit: false,
    
})





  //selected card for edit
  const selectedCardForEdit = (selectedCard) => {
    setCardEdit({item: selectedCard, edit: true})
 
}


//update card

const updateCard = (id, updItem) => {
        const updatedCards = cardData.map(card => {
            if (card.id === id) {
                return { ...card, ...updItem }; 
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
const addCard = (newCard) => {
    newCard.id = uuidv4();
    
        setCardData([newCard, ...cardData])
    
    }
   



//delte card
const deleteCard = (id) => {
    if(window.confirm("are you sure you want to delete this card? ")) {
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

