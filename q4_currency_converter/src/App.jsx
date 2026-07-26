import React from "react";
import {useState} from "react";
function App()
{
  const [amount, setAmount]=useState("");
  const [from, setFrom]=useState("EUR");
  const [to, setTo]=useState("INR");
  const [result, setResult]=useState(0);
  const convert = () => {
    let ans=0;
    if(from===to)
      ans=Number(amount);
    else if(from==="EUR"&&to==="INR")
      ans=Number(amount)*109;
    else if(from==="EUR"&&to==="USD")
      ans=Number(amount)*1.25;
    else if(from==="INR"&&to==="EUR")
      ans=Number(amount)/109;
    else if(from==="INR"&&to==="USD")
      ans=Number(amount)/87;
    else if(from==="USD"&&to==="INR")
      ans=Number(amount)*87;
    else if(from==="USD"&&to==="EUR")
      ans=Number(amount)/1.25;
    setResult(ans.toFixed(3));
  };
  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Currency Converter</h1>
      <input type="number"
      placeholder="Enter amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}>
      </input>
      <br></br>
      <label>From: </label>
      <select value={from} onChange={(e)=> setFrom(e.target.value)}>
        <option value="EUR">Euro</option>
        <option value="INR">Indian Rupee</option>
        <option value="USD">USD</option>
      </select>
      <br></br>
      <label>To: </label>
      <select value={to} onChange={(e)=> setTo(e.target.value)}>
        <option value="EUR">Euro</option>
        <option value="INR">Indian Rupee</option>
        <option value="USD">USD</option>
      </select>
      <button onClick={convert} style={{margin:"15px"}}>Convert</button>
      <h3>Converted Amount: {result}</h3>
    </div>
  );
}
export default App;