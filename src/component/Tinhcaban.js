import React, { useState } from "react";

export default function Tinhcaban() {
  const [numb1, setNum1] = useState(0);
  const [numb2, setNum2] = useState(0);
  const [kq, setkq] = useState(0);

  return (
    <div>
      <h2>Sửa lần 1</h2>
      <h1>Tính cơ bản: kết q = {kq}</h1>
      <label>Number 1:</label>
      <input
        type="number"
        placeholder="Nhập numb1"
        onChange={(e) => {
          setNum1(e.target.value * 1);
        }}
      />{" "}
      <br></br>
      <label>Number 2:</label>
      <input
        type="number"
        placeholder="Nhập numb2"
        onChange={(e) => {
          setNum2(e.target.value * 1);
        }}
      />{" "}
      <br></br>
      <button onClick={() => setkq(numb1 + numb2)}>+</button>
      <button onClick={() => setkq(numb1 - numb2)}>-</button>
      <button onClick={() => setkq(numb1 * numb2)}>*</button>
      <button onClick={() => setkq((numb1 / numb2).toFixed(2))}>/</button>
    </div>
  );
}
