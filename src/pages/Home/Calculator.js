import { useCallback, useEffect, useState } from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import "../../assets/Calculator.css";

function Calculator() {
  const [total, setTotal] = useState(100);
  const [intrest, setIntrest] = useState(10);
  const [data, setData] = useState([]);

  const changeTotal = (event) => {
    setTotal(event.target.value);
    const newData = handleChange();
    setData(newData);
  };

  const changeIntrest = (event) => {
    setIntrest(event.target.value);
    const newData = handleChange();
    setData(newData);
  };

  const handleChange = useCallback(() => {
    const data = [];
    const price = 1;
    for (let i = 0; i < total; i++) {
      let d = {
        number: i,
        value: ((i * intrest) / 100) * price,
      };
      data.push(d);
    }
    console.log(data);
    return data;
  }, [intrest, total]);

  useEffect(() => {
    const newData = handleChange();
    setData(newData);
  }, [handleChange]);

  return (
    <div className="calculator">
      <div className="card">
        <div className="input-wrapper">
          <h1>Calculator</h1>
          <label>Number of NFT</label>
          <input
            name="#NFTs"
            onChange={changeTotal}
            value={total}
            className="quantity"
          />
          <label>Intrest</label>
          <input
            name="intrest"
            onChange={changeIntrest}
            value={intrest}
            className="quantity"
          />
        </div>
        <LineChart width={350} height={350} data={data}>
          <Line
            type="monotone"
            dataKey="number"
            stroke="#f6f7eb"
            strokeWidth={2}
          />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#8884d8" }} />
          <XAxis dataKey="number" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
}

export default Calculator;
