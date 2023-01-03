import "css/ButtonSpace.css";
import { calculator, calculState, inputNumber, numbers } from "atom/Atom";
import { useResetRecoilState, useSetRecoilState } from "recoil";
import Button from "components/Button";
import { useEffect, useState } from "react";

const calculBtn = ["+", "-", "*", "/", "="];
const numberBtn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

function ButtonSpace() {
  const [reset, setReset] = useState(true);
  const calculatorDispatch = useSetRecoilState(calculator);
  const calculSelector = (item) => {
    calculatorDispatch(item);
  };
  const inputNumberDispatch = useSetRecoilState(inputNumber);
  const inputNumberFunc = (item) => {
    inputNumberDispatch(item);
  };
  const numberReset = useResetRecoilState(numbers);
  const stateReset = useResetRecoilState(calculState);

  useEffect(() => {
    numberReset();
    stateReset();
  }, [reset]);

  return (
    <>
      <div className="calculBtn">
        {calculBtn.map((item, index) => {
          return (
            <Button
              key={index}
              onClickHandler={() => {
                calculSelector(item);
              }}
              title={item}
            ></Button>
          );
        })}
      </div>
      <div className="numberBtn">
        {numberBtn.map((item, index) => {
          return (
            <Button
              key={index}
              onClickHandler={() => {
                inputNumberFunc(item);
              }}
              title={item}
            ></Button>
          );
        })}
      </div>
      <div>
        <Button onClickHandler={() => setReset(!reset)} title="reset"></Button>
      </div>
    </>
  );
}

export default ButtonSpace;
