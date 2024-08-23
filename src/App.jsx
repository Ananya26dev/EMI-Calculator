import "./App.css";
import { useState } from "react";

const App = () => {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const handleCalculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / (12 * 100);
    const n = parseFloat(tenure);
    if (p > 0 && r > 0 && n > 0) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue.toFixed(2));
    } else {
      setEmi(null);
    }
  };
  return (
    <div className="container">
      <h2>EMI Calculator</h2>
      <div>
        <label htmlFor="principal">Loan Amount:</label>
        <input
          type="number"
          id="principal"
          placeholder="Enter your loan amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="interestRate">Interest Rate (%):</label>
        <input
          type="number"
          id="interestRate"
          value={interestRate}
          placeholder="Enter  Interest Rate"
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="loanTenure ">Loan Tenure (Months):</label>
        <input
          type="number"
          id="loanTenure"
          value={tenure}
          placeholder="Enter  Loan Tenure (Months)"
          onChange={(e) => setTenure(e.target.value)}
        />
      </div>
      <button onClick={handleCalculateEMI}>Calculate EMI</button>
      {emi && (
        <div className="result">
          <div className="details">
            <span className="emi-label">Loan EMI:</span>
            <span className="emi-value">{emi}</span>
          </div>
          <div className="details">
            <span className="emi-label">Total Interest Payable:</span>
            <span className="emi-value">
              {(emi * parseFloat(tenure) - parseFloat(principal)).toFixed(2)}
            </span>
          </div>
          <div className="details">
            <span className="emi-label">
              Total Payment (Principal + Interest):
            </span>
            <span className="emi-value">
              {(emi * parseFloat(tenure)).toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
