import "css/ButtonSpace.css";
import { calculator } from "atom/Atom";
import { useSetRecoilState } from "recoil";
import Button from "components/Button";

const btnName = ["+", "-", "*", "/"];

function ButtonSpace() {
  const calculatorDispatch = useSetRecoilState(calculator);
  const calculSelector = (selector) => {
    calculatorDispatch(selector);
  };

  return (
    <div className="btnSpace">
      {btnName.map((item, index) => {
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
  );
}

export default ButtonSpace;
