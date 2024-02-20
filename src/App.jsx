import { useState } from "react";
import "./App.css";
import OTPForm from "../src/OTPForm.jsx";

function App() {
  const [number, setNumber] = useState();
  const [showOTPForm, setShowOTPForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (number.length < 10 || regex.test(number)) {
      alert("Invalid Phone Number");
      return;
    }
    console.log("OTP sent on", number);
    setShowOTPForm(true);
  };

  const handlePhoneSUbmit = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className="">
        {!showOTPForm ? (
          <>
            <h1>Enter your number</h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={number}
                onChange={handlePhoneSUbmit}
                className="numberInput"
              />
              <button type="submit">Send OTP</button>
            </form>
          </>
        ) : (
          <div>
            <h1>Enter OTP</h1>
            <OTPForm lenght={4} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
