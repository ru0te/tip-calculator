import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);

  function onSelectChange(value) {
    setTip(value);
  }

  function handleReset() {
    setBill(0);
    setTip(0);
  }

  return (
    <div className="container">
      <Bill bill={bill} handleChange={(e) => setBill(e.target.value)} />
      <TipPercentage onSelectChange={onSelectChange} />
      <TotalPayment bill={bill} tip={tip} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Bill({ bill, handleChange }) {
  return (
    <>
      <label>How much was the bill?</label>
      <input type="number" value={bill} onChange={handleChange} />
    </>
  );
}

function TipPercentage({ onSelectChange }) {
  return (
    <>
      <label>How did you like the service?</label>
      <select onChange={(e) => onSelectChange(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function TotalPayment({ bill, tip }) {
  const tipAmount = (tip / 100) * bill;
  const total = Number(bill) + tipAmount;

  return (
    <h3>
      You pay ${total} (${bill} + ${tipAmount}) tip
    </h3>
  );
}

export default App;
