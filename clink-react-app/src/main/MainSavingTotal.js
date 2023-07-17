import { useState } from "react";
import SavingBackgroundImage from "../images/main_coin.svg";

const MainSavingTotal = ({ saving, totalSave }) => {
  let day = 1;

  const [a, setA] = useState("어제");
  const [b, setB] = useState("전체");

  const handleClickButton = (e) => {
    const target = e.target.parentNode;
    target.classList.toggle("main-card-rotate");
    //sleep(1000);
    if (day === 1) {
      day = 0;
      setA("전체");
      setB("어제");
    } else {
      day = 1;
      setA("어제");
      setB("전체");
    }
  };

  return (
    <div
      className="main-savingsYesterday"
      style={{ backgroundImage: "url(" + SavingBackgroundImage + ")" }}
      onClick={handleClickButton}
    >
      <p style={{ textAlign: "left", padding: 10, height: "5%" }}>
        {a} 저축 금액 {"\n"}
      </p>
      <p
        style={{
          textAlign: "left",
          padding: 10,
          height: "50%",
          fontSize: "50px",
        }}
      >
        {saving.toLocaleString()}원 {"\n"}
      </p>
      <p
        style={{
          textAlign: "right",
          padding: 10,
          height: "5%",
          fontSize: "10px",
        }}
      >
        {b} 저축액을 알고 싶으면 클릭해주세요 !
      </p>
    </div>
  );
};

export default MainSavingTotal;