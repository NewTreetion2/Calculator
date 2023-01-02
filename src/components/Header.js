import "css/Header.css";
import { numbers } from "atom/Atom";
import { useRecoilValue } from "recoil";

function Header() {
  const numberOb = useRecoilValue(numbers);
  return (
    <div className="header">
      A = {numberOb.a} B = {numberOb.b} Total = {numberOb.total}
    </div>
  );
}

export default Header;
