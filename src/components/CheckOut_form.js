import { useContext, useState } from "react";
import FormHeader from "./FormHeader";
import Model from "./Model";
import { handleModel } from "./CardHandleContext";
import { ctxContext } from "./cardContex";

export default function Signup() {

  const [validPassword, set_validPassword] = useState(false);

  let modelData = useContext(handleModel);
  let CardItem = useContext(ctxContext);

  function handlerSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());

    
   fetch(
     "https://first-bd2f8-default-rtdb.europe-west1.firebasedatabase.app/ClothCard.json",
     { method: "PUT", body: JSON.stringify(data) }
   );

    if (
      data.password.length >= 6 &&
      data.password === data["confirm-password"]
    ) {
      
      SignupSuccessFul(data);

      modelData.CloseCheckOut();

      CardItem.removeAllItem();
    } else {
      set_validPassword(true);
    }
  }

  function SignupSuccessFul(data) {
    alert(
      `Congratulations ${data["first-name"]} ${data["last-name"]} Thank you! Your order has been placed successfully.`
    );
  }

  function handleInvalidError() {
    set_validPassword(false);
  }

  return (
    <Model open={modelData.progress === "checkout"} ClassName="dialog_Checkout">
      <form onSubmit={handlerSubmit}>
        <FormHeader />

        <h2>Welcome on board!</h2>
        <p className="p">
          We just need a little bit of data from you to get you started 🚀
        </p>

        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>

        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              onChange={handleInvalidError}
            />
          </div>

          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              required
              minLength={6}
              onChange={handleInvalidError}
            />
            <div className="control-error">
              {validPassword && (
                <p>
                  please inter correct password and length of password at least
                  6
                </p>
              )}
            </div>
          </div>
        </div>

        <hr />

        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>

          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>

        <div className="address">
          <label htmlFor="Address">Address</label>
          <textarea type="text" id="Address" name="Address" />
        </div>

        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Sign up
          </button>
        </p>
      </form>
    </Model>
  );
}
