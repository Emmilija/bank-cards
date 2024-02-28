
import "./styles/global.css"
import CardContainer from "./components/CardContainer";
import {  CardProvider } from "./context/CardContext";



function App() {

  return (
    <CardProvider >
     <div className=' w-full max-h-x'>
      <div className="container mx-auto   h-full flex flex-col justify-between ">
        {/* <header className="mb-8 h-16 px-8 flex flex-col justify-start items-start">
     
          <h1 className="text-primary  font-black text-30">Your Cards</h1>
          <p className="text-gray-dark text-14">
            Add, edit or delete your cards any time
          </p>
        </header> */}
       
        <div>
            <CardContainer  />
        </div>

      </div>
    </div>
    </CardProvider>
  );
}

export default App;


