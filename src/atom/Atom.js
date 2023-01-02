import { atom, selector } from "recoil";

const showSectionState = atom({
  key: "showSectionState",
  default: "A", // Header에 보여줄 화면이 A의 값인지 B의 값인지 Total인지 변경해주는 State (A, B, Total이 값으로 들어갈 수 있음)
});

const numbers = atom({
  key: "numbers",
  default: {
    a: "13",
    b: "2",
    total: 0,
  }, // 버튼을 눌러 값을 입력받으면 해당 숫자들이 뒤에 3 5 7 -> 357로 받아져야하므로 문자열로 추가한다
  // 그 후 값을 반환할 때 number로 반환
});

// selector로 0~9까지의 숫자를 입력받았을 때 A 혹은 B에 해당 값을 추가하는 Selector 1개와
// +,-,*,/를 입력받았을 때 연산해줄 Selector 두개를 만들어주자

const calculator = selector({
  key: "calculator",
  get: () => {
    return 1;
  },
  set: ({ set, get }, newValue) => {
    const number = get(numbers);
    if (newValue === "+") {
      set(numbers, {
        ...number,
        total: Number(number["a"]) + Number(number["b"]),
      });
    } else if (newValue === "-") {
      set(numbers, {
        ...number,
        total: Number(number["a"]) - Number(number["b"]),
      });
    } else if (newValue === "*") {
      set(numbers, {
        ...number,
        total: Number(number["a"]) * Number(number["b"]),
      });
    } else if (newValue === "/") {
      set(numbers, {
        ...number,
        total: Number(number["a"]) / Number(number["b"]),
      });
    } else {
      alert("잘못된 입력");
    }
  },
}); //연산자 셀렉터

// const inputNumber = selector({

// }) 버튼 입력 시 숫자를 추가해줄 셀렉터

export { showSectionState, numbers, calculator };
