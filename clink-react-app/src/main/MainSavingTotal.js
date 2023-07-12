import SavingBackgroundImage from "../images/main_coin.svg";

const MainSavingTotal = ({ saving }) => {
  // value 하나 두고 1이면 {어제} {전체} 자리 바꿀지
  return (
    <div
      className="main-savingsYesterday"
      style={{ backgroundImage: "url(" + SavingBackgroundImage + ")" }}
      onClick={(e) => {
        const target = e.target.parentNode;
        target.classList.toggle("main-card-rotate");
        // useState 로 값 변경 conponent
      }}
    >
      <p style={{ textAlign: "left", padding: 10, height: "5%" }}>
        {"어제"} 저축 금액 {"\n"}
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
        {"전체"} 저축액을 알고 싶으면 클릭해주세요 !
      </p>
    </div>
  );
};

export default MainSavingTotal;
