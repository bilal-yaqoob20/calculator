import "./App.css";
import { useState } from "react";

function App() {
  const [numberAndOp, setNumberAndOp] = useState("");
  const [result, setResult] = useState(0);

  const handleNumberClick = (val) => {
    if (result) {
      setResult("");
    }
    if (numberAndOp.length < 9) {
      if (/^\d+$/.test(val)) {
        const temp = numberAndOp + val;
        setNumberAndOp(temp);
      } else if (val === ".") {
        const temp = numberAndOp + val;
        setNumberAndOp(temp);
      } else if (
        (val === "+" || val === "/" || val === "x" || val === "-") &&
        !numberAndOp.includes("+") &&
        !numberAndOp.includes("-") &&
        !numberAndOp.includes("/") &&
        !numberAndOp.includes("x")
      ) {
        const temp = numberAndOp + val;
        setNumberAndOp(temp);
      }
    }
  };

  const handlePercentClick = () => {
    if (
      !numberAndOp.includes("+") &&
      !numberAndOp.includes("-") &&
      !numberAndOp.includes("/") &&
      !numberAndOp.includes("x")
    ) {
      const temp = numberAndOp / 100;
      setResult(temp);
    }
  };

  const reset = () => {
    setNumberAndOp("");
    setResult("");
  };

  const back = () => {
    const temp = numberAndOp.slice(0, -1);
    setNumberAndOp(temp);
  };

  const equalClick = () => {
    if (numberAndOp.includes("+")) {
      const numbers = numberAndOp.split("+");
      const res = Number(numbers[0]) + Number(numbers[1]);
      setResult(res);
      setNumberAndOp("");
    } else if (numberAndOp.includes("-")) {
      const numbers = numberAndOp.split("-");
      const res = Number(numbers[0]) - Number(numbers[1]);
      setResult(res);
      setNumberAndOp("");
    } else if (numberAndOp.includes("x")) {
      const numbers = numberAndOp.split("x");
      const res = Number(numbers[0]) * Number(numbers[1]);
      setResult(res);
      setNumberAndOp("");
    } else if (numberAndOp.includes("/")) {
      const numbers = numberAndOp.split("/");
      if (numbers[1] == 0) {
        setResult("Error");
      } else {
        const res = Number(numbers[0]) / Number(numbers[1]);
        setResult(res);
      }
      setNumberAndOp("");
    }
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <div style={{ backgroundColor: "black" }}>
            <div
              style={{
                height: "90px",
                display: "flex",
                alignItems: "end",
                textAlign: "right",
                justifyContent: "end",
                paddingRight: "10px",
                backgroundColor: "gray",
                fontSize: "60px",
                color: "white",
              }}
            >
              {result ? result : numberAndOp}
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={() => reset()}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                C
              </button>
              <button
                onClick={() => back()}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                &#9224;
              </button>
              <button
                onClick={(e) => handlePercentClick()}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                %
              </button>
              <button
                onClick={(e) =>
                  handleNumberClick(e.currentTarget.innerHTML.toString())
                }
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                /
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                1
              </button>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                2
              </button>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                3
              </button>
              <button
                onClick={(e) =>
                  handleNumberClick(e.currentTarget.innerHTML.toString())
                }
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                x
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                4
              </button>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                5
              </button>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                6
              </button>
              <button
                onClick={(e) =>
                  handleNumberClick(e.currentTarget.innerHTML.toString())
                }
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                -
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                7
              </button>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                8
              </button>
              <button
                onClick={(e) => handleNumberClick(e.currentTarget.innerHTML)}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                9
              </button>
              <button
                onClick={(e) =>
                  handleNumberClick(e.currentTarget.innerHTML.toString())
                }
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                +
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={(e) =>
                  handleNumberClick(e.currentTarget.innerHTML.toString())
                }
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "140px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                0
              </button>
              <button
                onClick={(e) =>
                  handleNumberClick(e.currentTarget.innerHTML.toString())
                }
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                .
              </button>
              <button
                onClick={() => equalClick()}
                style={{
                  margin: "10px",
                  height: "60px",
                  width: "60px",
                  padding: "10px",
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: 100,
                  fontSize: "30px",
                }}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
