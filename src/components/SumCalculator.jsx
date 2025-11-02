import React, { useState } from "react";
import "./SumCalculator.css";

function SumCalculator() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculateSum = () => {
    if (number1 === "" || number2 === "") {
      setError("⚠️ Please enter both numbers.");
      setResult(null);
      return;
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setError("⚠️ Inputs must be valid numbers.");
      setResult(null);
      return;
    }

    // 🔹 Hàm đếm số chữ số sau dấu thập phân
    const countDecimals = (value) => {
      if (Math.floor(value) === value) return 0; // không có phần thập phân
      const str = value.toString();
      if (str.includes(".")) {
        return str.split(".")[1].length;
      }
      return 0;
    };

    // 🔹 Tính số chữ số thập phân lớn nhất
    const decimals = Math.max(countDecimals(num1), countDecimals(num2));

    // 🔹 Tính tổng và làm tròn theo số thập phân lớn nhất
    const sum = (num1 + num2).toFixed(decimals);

    setResult(parseFloat(sum));
    setError("");
  };

  return (
    <div className="sum-container">
      <h2>🧮 Sum Calculator</h2>

      <div className="inputs">
        <label>
          Number 1:
          <input
            type="text"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
            placeholder="Enter first number"
          />
        </label>

        <label>
          Number 2:
          <input
            type="text"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            placeholder="Enter second number"
          />
        </label>
      </div>

      <button onClick={calculateSum}>Calculate Sum</button>

      {error && <p className="error">{error}</p>}
      {result !== null && !error && (
        <p className="result">✅ Result: {result}</p>
      )}
    </div>
  );
}

export default SumCalculator;
