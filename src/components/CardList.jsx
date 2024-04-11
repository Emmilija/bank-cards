import "../styles/index.css"
import cardLogoMaster from "../assets/images/mastercard-logo.svg"
import cardLogoVisa from "../assets/images/visa-logo.svg"
import { CardContext } from "../context/CardContext"
import { useContext } from "react"
import EditButton from "./EditButton"
import CardForm from "./CardForm"


export default function CardList({ children, item
 }) {

const { selectedCardForEdit} = useContext(CardContext)



const isVisa = item.cardName === 'visa';

<CardForm
  nameEdit={selectedCardForEdit.name}
  numberEdit={selectedCardForEdit.number}
  expiryEdit={selectedCardForEdit.expiry}
  cvcEdit={selectedCardForEdit.cvc}
  cardLogoEdit={selectedCardForEdit.isVisa ? cardLogoVisa : cardLogoMaster}
/>


  return (
    <div className="h-full w-full px-8 py-4 ">
     
        <div  className={`card-container ${isVisa && "two"}`} >
          <div className="card w-full h-full py-4">
            <div className="logo-container flex justify-between items-center">
              <div className="logo mr-2">
                <img
                  src={isVisa ? cardLogoVisa : cardLogoMaster}
                  alt="Card Logo"
                />
              </div>
              <div className="flex justify-between">
                <div className="info mr-4 flex flex-col justify-end items-end">
                  <span className={`mr-4 small text-4 ${isVisa ? "black" : 'color'}`}>CVC</span>
                  <p className="font-bold text-14">{item.cvc}</p>
                </div>
                <div className="info mr-2 flex flex-col justify-end items-end">
                  <span className={`small ${isVisa ? "black" : 'color'}`}>EXPIRES</span>
                  <p className='font-bold text-14 $ text-white'>{item.expiry}</p>
                </div>
              </div>
            </div>
            <div className="name-container">
              <div className="name flex-col justify-between">
                <p className="font-bold">{item.name}</p>
                <p className={`font-bold ${isVisa ? "black" : "color"}`}>{item.number}</p>
              </div>

           <div className="">
             <EditButton selectedCardForEdit={selectedCardForEdit} item={item}  />
             </div>

          
    
            </div>
          </div>
          {children}
        </div>
     



        
    </div>
  );
}






  
  // return (
//     <div className="h-auto">
//       <div className="card-master ">
//         <div className="card-container  ">
//           <div className="card w-full h-full ">

//             <div className=" logo-container flex justify-between items-center ">
//      <div>
//      <img
//                 src={cardLogoMaster}
//                 alt="Card Logo Mastercard"
//                 className=""
//               />
//      </div>
         

// <div className="flex flex-row justify-end items-end">
                  
//                 <div className="info  mr-4 flex flex-col justify-end items-end">
//                   <span className="color text-4">CVC</span>
//                   <p className=" font-bold text-14">000</p>
//                 </div>

//                 <div className="info mr-2 flex flex-col justify-end items-end">
//                   <span className="color">EXPIRES</span>
//                   <p className="font-bold text-14 text-white">000</p>
//                 </div>

//               </div>
//             </div>
//             <div className="name-container">
//               <div className="flex-col justify-between ">
//                 <p className="font-bold text-white">emilija karatashevska </p>
//                 <p className="color ">65466546454</p>
//               </div>

//               <div className="flex justify-end">
//                 <img src={cardLogoVisa} alt="Edit Icon" className="w-8 h-8 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>




//        <div className="">
//        <div className={`card-container two flex justify-between items-center ${cardType}`}>
//           <div className="card absolute w-full h-full">

//             <div className=" logo-container flex justify-between items-center ">
//      <div>
//      <img
//                  src={cardInfo.type === 'VISA' ? cardLogoVisa : cardLogoMaster}
//                 alt="Card Logo Mastercard"
//                 className=""
//               />
//      </div>
         

// <div className=" flex flex-row justify-end items-end">
                  
//                 <div className="mr-4 flex flex-col justify-end items-end">
//                   <span className="black text-10">CVC</span>
//                   <p className=" font-bold text-14"></p>
//                 </div>

//                 <div className="mr-2 flex flex-col justify-end items-end">
//                   <span className="black  text-10">EXPIRES</span>
//                   <p className="font-bold text-14"></p>
//                 </div>

//               </div>
//             </div>



//             <div className="name-container">
//               <div className="flex-col justify-between text-white">
//                 <h2 className="font-bold text-white "> htrhtg</h2>
//                 <p className="black "> 25721572</p>
//               </div>

//               <div className="flex justify-end">
//                 <img src={editIcon} alt="Edit Icon" className="w-8 h-8 " />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div> 
//   );
// }












