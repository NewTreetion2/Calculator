import "css/Header.css";
import { calculState, numbers } from "atom/Atom";
import { useRecoilValue } from "recoil";

function Header() {
  const numberOb = useRecoilValue(numbers);
  const state = useRecoilValue(calculState);
  // return (
  if (state.state === "A") {
    return <div className="header">{numberOb.a}</div>;
  } else if (state.state === "B") {
    return <div className="header">{numberOb.b}</div>;
  } else if (state.state === "total") {
    return <div className="header">{numberOb.total}</div>;
  }
  // <div className="header">
  // </div>
}

export default Header;
