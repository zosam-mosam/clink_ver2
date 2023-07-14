const MainReport = ({ data }) => {
  return (
    <div className="main-report">
      <div style={{ padding: 10 }}>
        <b style={{ fontSize: 'large', marginTop: '50px' }}>
          {data.month}월 {data.day}일 {data.name}님의 결제내역 리포트{'\n\n'}
        </b>
        <p style={{ fontSize: '11px', textAlign: 'left' }}>
          총 사용 금액은 : {data.sum} 원 이고, 이중 {data.category} 카테고리가
          차지하는 금액 비중이 {'50%'}를 차지합니다.{'\n'}
          가장 비싼 결제는 {'마라탕 13000'}원 이고, 가장 저렴한 소비는{' '}
          {'커피 2000'}원 이었습니다{'\n'}
          평균 결제 금액은 {'8000'}원 입니다.{'\n'}
        </p>
      </div>
    </div>
  );
};

export default MainReport;
