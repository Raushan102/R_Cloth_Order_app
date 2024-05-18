import { React, useContext } from "react";

import { ctxContext } from "./cardContex";
import { handleModel } from "./CardHandleContext";
import Model from "./Model";

function Card() {
  let CardItem = useContext(ctxContext);
  let progressModel = useContext(handleModel);

  let totalPrice = Math.round(
    CardItem.item.reduce((previous, current) => {
      return previous + current.price * current.Quantity;
    }, 0)
  );

  function handleCloseCard() {
    progressModel.CloseCard();
  }

  function handleReduceQuantity(id) {
    CardItem.removeItem(id);
  }

  function handleIncreaseQuantity(id) {
    CardItem.addQuantity(id);
  }

  function openCheckOutForm() {
    progressModel.OpenCheckout();
    
  }

  return (
    <Model
      open={progressModel.progress === "card"}
      handleScape={progressModel.progress === "card" ? handleCloseCard : null}
      ClassName="dialog_card"
    >
      {CardItem.item.length === 0 ? (
        <>
          <h2 className="noItem">please select a item</h2>
          <button className="close" onClick={handleCloseCard}>
            Close
          </button>
        </>
      ) : (
        <div className="items">
          {CardItem.item.map((val) => {
            return (
              <div className="item">
                <p className="item_price">
                  <span>{val.title}</span>
                  <span id="price">{val.price}</span>
                </p>
                <p className="Card-control">
                  <button
                    id="minus"
                    onClick={() => handleReduceQuantity(val.id)}
                  >
                    -
                  </button>
                  <button id="Quantity">{val.Quantity}</button>
                  <button
                    id="plus"
                    onClick={() => handleIncreaseQuantity(val.id)}
                  >
                    +
                  </button>
                </p>
              </div>
            );
          })}

          <div className="model_buttons">
            <p className="price_information">
              {CardItem.item.length > 0 && (
                <>
                  <span>Total price</span>
                  <span className="totalPrice">{totalPrice}</span>
                </>
              )}
            </p>
            <p className="Buttons_control">
              <button className="close" onClick={handleCloseCard}>
                Close
              </button>

              {CardItem.item.length > 0 && (
                <button className="checkout" onClick={openCheckOutForm}>
                  Checkout
                </button>
              )}
            </p>
          </div>
        </div>
      )}
    </Model>
  );
}

export default Card;
