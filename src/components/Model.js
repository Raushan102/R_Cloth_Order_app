import { React, useRef, useEffect ,useContext} from "react";
import { handleModel } from "./CardHandleContext";


import { createPortal } from "react-dom";

function Model({ children, open, handleScape, ClassName='' }) {
  let modelRef = useRef();
  let handle_Item = useContext(handleModel);

  useEffect(() => {

    let model=modelRef.current
    if (open) {
     
     model.showModal();
    }
    return ()=>{
    
      model.close()
    }
  }, [open]);

  return createPortal(
    <dialog ref={modelRef} onClose={handleScape} className={ClassName}>
      {handle_Item.progress === "card" && <h2>our Card</h2>}

      {children}
    </dialog>,
    document.getElementById("model")
  );
}

export default Model;
