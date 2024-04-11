import { createContext, useState, useEffect } from "react";

export const CardContext = createContext()

export const  CardProvider = ({children}) => {
const [cardData, setCardData] = useState([])

const [showForm, setShowForm] = useState(false);


//is taking the item with everything inside and put edit mode in true when clicked
const [cardEdit, setCardEdit] = useState({
    item: {},
    edit: false,
    
})

useEffect(() => {
    fetchCard()
 
}, [])



//Fetch cards
const fetchCard = async () => {
    try {
        const response = await fetch(`/card?_sort=id`)
        const data = await response.json();
        setCardData(data);
    }
    
     catch (error) {
        console.log('Error fetching card data:', error);
    }
};

  //selected card for edit
//   const selectedCardForEdit = (selectedCard) => {
//     setCardEdit({item: selectedCard, edit: true})
 
// }


//update card

const updateCard = async (id, updItem) => {
    try {
        const response = await fetch(`/card/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        });

        if (!response.ok) {
            throw new Error('Failed to update card. Server returned status: ' + response.status);
        }

        const selectedCard = await response.json();
const updateCard = cardData.map((card) => card.id === selectedCard.id ? selectedCard : card)

        // Update the cardData state
        setCardData(updateCard);
        setCardEdit() 
            } catch (error) {
                console.error('Error updating card:', error);
              
            }
       
    } 



 
const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };



//add new card
const addCard = async(newCard) => {
    try {
        const response = await fetch('/card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCard),
        })
        const data = await response.json()
                setCardData([data, ...cardData])
            
    }catch (error) {
        console.error('Error adding user', error)
    }

    }
   



//delete card
const deleteCard = async (id) => {
    if(window.confirm("are you sure you want to delete this card? ")) {
        try{
            await fetch(`/card/${id}`, {method: 'DELETE'})

        
            setCardData(cardData.filter((item) => item.id !== id));
         
        }catch(error) {
            console.error('Error deleting card:', error)
        }

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

