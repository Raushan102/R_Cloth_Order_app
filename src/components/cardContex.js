import { createContext, useReducer } from "react";

export const ctxContext = createContext({
  item: [],
  addItem: () => {},
  removeItem: () => {},
  addQuantity:()=>{},
  removeAllItem:()=>{}
});

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const Check_Item_al_present = state.item.findIndex(
      (val) => val.id === action.item.id
    );

    let updatedItems = [...state.item];

    

    if (Check_Item_al_present > -1) {
      const SelectedItem = state.item[Check_Item_al_present];
      const updatedItem = {
        ...SelectedItem,
        Quantity: SelectedItem.Quantity + 1,
      };
      updatedItems[Check_Item_al_present] = updatedItem;
 
    } else {
      updatedItems.push({ ...action.item, Quantity: 1 });

   
    }
     
    return {...state,item:updatedItems}

  }

  if (action.type === "REMOVE_ITEM") {
    let Check_Item_al_present = state.item.findIndex(
      (val) => val.id === action.id
    );

    let updatedItems = [...state.item];
    let SelectedItem = updatedItems[Check_Item_al_present];

    if (SelectedItem.Quantity > 1) {
      let updatedItem = {
        ...SelectedItem,
        Quantity: SelectedItem.Quantity - 1,
      };
      updatedItems[Check_Item_al_present] = updatedItem;

    } else {
      updatedItems.splice(Check_Item_al_present, 1);
    }

    console.log(updatedItems)

    return { ...state, item: updatedItems };
  }


   if(action.type==='ADD_QUANTITY'){
    let Check_Item_al_present = state.item.findIndex(
      (val) => val.id === action.id
    );
       let updatedItems = [...state.item];


         const SelectedItem = state.item[Check_Item_al_present];
         const updatedItem = {
           ...SelectedItem,
           Quantity: SelectedItem.Quantity + 1,
         };
         updatedItems[Check_Item_al_present] = updatedItem;

         return {...state,item:updatedItems}
   }


   if(action.type==='REMOVE_ALL_ITEM'){

    

    return {...state,item:[]};

   }
};


export default function HandleCardByCtx({ children }) {
  const [state, dispatch] = useReducer(reducer, { item: [] });

  console.log(state.item);

  function addItem(item) {

    
    dispatch({
      type: "ADD_ITEM",
      item: item,
    });
  }

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });

    
  }
  function addQuantity(id) {
    dispatch({
      type:"ADD_QUANTITY",
      id:id
    })

  }

  function removeAllItem(){
    dispatch({
      type:'REMOVE_ALL_ITEM'
    })
  }

  let ctxVal = {
    item: state.item,
    addItem,
    removeItem,
    addQuantity,
    removeAllItem,
  };

  return <ctxContext.Provider value={ctxVal}>{children}</ctxContext.Provider>;
}


