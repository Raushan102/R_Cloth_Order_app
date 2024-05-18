import { ctxContext } from "./cardContex";

import Product from './Product.js';
 import DUMMY_PRODUCTS from '../dummy-products.js'
 import { useContext } from "react";



function DisplayMain() {

    let dat = useContext(ctxContext);

   function  handleAddItem(item){
    dat.addItem(item)

    }

    
  return (
    <section id='shop'>
      <h1>Elegant clothing for everyone</h1>
      <ul id='products'>{DUMMY_PRODUCTS.map((item)=>{
        return (
          <li className="item.id" key={item.id}>
            <Product {...item} onAddCart={()=>handleAddItem(item)} />
          </li>
        );
        
      })}</ul>
    </section>
  );
}

export default DisplayMain