import Header from "./components/Header";
import DisplayMain from "./components/DisplayMain";
import HandleCardByCtx from "./components/cardContex";
import  CardHandleContext  from "./components/CardHandleContext";
// import handleModel from "./components/CardHandleContext";
// import { useContext } from "react";
import Card from "./components/card";
import Signup from "./components/CheckOut_form";





function App() {

  // let ModelProgress = useContext(handleModel);

  
    return (
      <div className="App">
        <CardHandleContext>
          <HandleCardByCtx>
            <Header />
            <DisplayMain />
           <Card/>
           <Signup/>
          </HandleCardByCtx>
        </CardHandleContext>
      </div>
    );
}

export default App;
