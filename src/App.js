
import "./styles/global.css"
import CardContainer from "./components/CardContainer";
import {  CardProvider } from "./context/CardContext";



function App() {

  return (
    <CardProvider >
      
     <div className=' w-full max-h-x py-4 mx-auto h-100 min-h-screen '>
 
            <CardContainer  />
      </div>

    </CardProvider>
  );
}

export default App;


