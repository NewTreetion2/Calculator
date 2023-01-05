import "css/Header.css";
import { calculState, numbers } from "atom/Atom";
import { useRecoilValue } from "recoil";

function Header() {
  const numberOb = useRecoilValue(numbers);
  const state = useRecoilValue(calculState);
  let result = numberOb.total;

  if (Number.isInteger(result) === false) {
    result = Number(result.toFixed(2));
  }

  if (state.state === "A") {
    return <div className="header">{numberOb.a}</div>;
  } else if (state.state === "B") {
    return <div className="header">{numberOb.b}</div>;
  } else if (state.state === "total") {
    return <div className="header">{result}</div>;
  }
}

export default Header;
