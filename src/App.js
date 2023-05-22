import React from "react";
import { useState } from "react";
const App = () => {
  const [num, setNum] = useState("");
  const handleclick = (e) => {
    setNum(num + e.target.value);
  };

  const handleClear = () => {
    setNum("");
  };

  const handleDelete = () => {
    setNum(num.slice(0, -1));
  };

  const handleEquals = () => {
    try {
      const result = eval(num);
      setNum(result.toString());
    } catch (error) {
      setNum("Invlaid Syntax");
    }
  };
  return (
    <div className="container">
      {/* heading */}
      <div className="head">
        <p>CALUCULATOR APP</p>
      </div>
      <div>
        <div className="calc">
          <input type="text" id="answer" value={num} />
          <br />
          <input type="button" value="AC" onClick={handleClear} />
          <input type="button" value="DEL" onClick={handleDelete} />
          <input type="button" value="%" onClick={handleclick} />
          <input type="button" value="/" onClick={handleclick} />
          <br />
          <input type="button" value="7" onClick={handleclick} />
          <input type="button" value="8" onClick={handleclick} />
          <input type="button" value="9" onClick={handleclick} />
          <input type="button" value="*" onClick={handleclick} />
          <br />

          <input type="button" value="4" onClick={handleclick} />
          <input type="button" value="5" onClick={handleclick} />
          <input type="button" value="6" onClick={handleclick} />
          <input type="button" value="-" onClick={handleclick} />
          <br />
          <input type="button" value="1" onClick={handleclick} />
          <input type="button" value="2" onClick={handleclick} />
          <input type="button" value="3" onClick={handleclick} />
          <input type="button" value="+" onClick={handleclick} />
          <br />
          <input type="button" value="00" onClick={handleclick} />
          <input type="button" value="0" onClick={handleclick} />
          <input type="button" value="." onClick={handleclick} />
          <input type="button" value="=" onClick={handleEquals} />
        </div>
      </div>
    </div>
  );
};

export default App;
