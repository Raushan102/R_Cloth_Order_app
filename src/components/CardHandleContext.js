

import{useState, React,createContext }from 'react'

 export const handleModel = createContext({
   progress: null,
   OpenCard: () => {},
   CloseCard: () => {},
   OpenCheckout: () => {},
   CloseCheckOut: () => {},
 });

  export  default function CardHandleContext({ children }) {

    const [progressState,setProgressState]=useState(null)

    function OpenCard(){

        setProgressState('card')

    }
    function CloseCard(){
        setProgressState(null)

    }
    function OpenCheckout(){
       
        setProgressState('checkout')

    }
    function CloseCheckOut() {
        setProgressState('')
    }


    const initVal={
        progress:progressState,
        OpenCard,
        CloseCard,
        OpenCheckout,
        CloseCheckOut
    }

    return <handleModel.Provider value={initVal}>{children}</handleModel.Provider>;
  }

  

