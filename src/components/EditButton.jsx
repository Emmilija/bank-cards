 import editIcon from "../assets/images/edit-icon.svg"
import { useContext } from "react";
import { CardContext } from "../context/CardContext";



const  EditButton = ({ selectedCardForEdit, item }) => {

    const {openForm} = useContext(CardContext)

    const handleEditClick = () => {
        selectedCardForEdit(item);
        openForm(); // Optionally open the form when edit button is clicked
    };
    return (
        <button onClick={handleEditClick} >
                <img src={editIcon}  alt="Edit Icon" className="w-8 h-8" />
              </button>
    );
};

export default EditButton;
 