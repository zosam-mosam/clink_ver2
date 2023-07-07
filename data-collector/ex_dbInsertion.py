import datetime
import time
import requests
import json
import pymysql
import schedule

#gpt 통신을 위한 key


#데이터1 인물의 페르소나
persona = {
    "이름": "지영 (Jiyeong)",
    "나이": 25,
    "거주지": "서울",
    "직업": "마케팅 전문가",
    "관심사": ["여행", "음악", "패션", "건강"],
    "성격": "외향적이고 사교적인 성격을 가지고 있으며, 새로운 사람들과의 만남을 즐깁니다. 호기심이 많고 창의적인 생각을 가지고 있으며, 도전적인 상황에 잘 적응합니다.",
    "라이프스타일": "다양한 음악 장르를 즐기며 주말에는 친구들과 함께 공연이나 클럽에 가기도 합니다. 여행을 좋아하여 자유로운 분위기의 여행지를 선호하며, 새로운 문화와 경험을 즐깁니다. 패션에 관심이 많아 트렌디한 스타일을 즐기고 스스로의 개성을 표현하는 것을 좋아합니다. 또한 건강에 관심이 많아 운동이나 요가를 즐기며 균형 잡힌 식단을 유지합니다.",
    "소셜 미디어 사용": ["인스타그램", "페이스북"],
    "목표": ["마케팅 분야에서 성장하고 전문성을 키우는 것", "세계 각지의 다양한 문화와 사람들을 경험하며 넓은 시각을 갖추는 것"]
}

#데이터2 결제내역 형식
payment_data = {
    "name": "지영",
    "date": "2023-01-01",
    "transactions": [
        {
            "timestamp": "2023-01-01 09:30:15",
            "description": "이디야",
            "amount": 3800,
            "category": ""
        },
        {
            "timestamp": "2023-01-01 12:15:30",
            "description": "홍대개미",
            "amount": 10900,
            "category": "음식"
        },
        {
            "timestamp": "2023-01-01 15:45:20",
            "description": "ABC마켓",
            "amount": 35000,
            "category": "쇼핑"
        }
    ]
}

# db에 저장
def putInDB(payment):
    # DB 연결
    db = pymysql.connect(

                        )
    cursor = db.cursor()
    cursor.execute(sql, (23070501, payment["amount"], datetime.strptime(payment["timestamp"], '%Y-%m-%d %H:%M:%S'), payment["description"]))

    ##데이터 삽입
    sql = "INSERT INTO userexpense (accountId, amount, expenseDate, description) VALUES (%s, %s, %s, %s)"
    cursor.execute(sql, (23070501, payment["amount"], datetime.strptime(payment["timestamp"], '%Y-%m-%d %H:%M:%S'), payment["description"]))
    db.commit()
    db.close()

    #데이터 삭제
    payment_list.pop(0)



# gpt를 통해 당일 결제될 내역을 받아옴
def getTodaysPayment():
    url = "https://api.openai.com/v1/chat/completions"
    # 대화 형식의 메시지 생성
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "assistant", "content": json.dumps(persona)},
        {"role": "assistant", "content": json.dumps(payment_data)},
        {"role": "assistant", "content": "주어진 페르소나를 가진 사람이 "+"23년 7월 5일"+"하루동안의 결제내역을 기존 결제내역과 같은 json형식으로 생성해줘."}
    ]
    #요청 헤더
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {key}"
    }

    #요청 데이터
    data = {
        "model": "gpt-3.5-turbo",
        "messages": messages,
        "temperature": 1  # 다양성을 조절하는 temperature 값 설정
    }

    cnt=0
    while cnt<1:
        try:
            response = requests.post(url, headers=headers, json=data)
            content = response.json()["choices"][0]["message"]["content"]
            cnt += 1
        except Exception as e:
            print(e)

    return eval(content)["transactions"]


# 메인 함수: 현재시간 확인해서 함수 호출
def main():
    
    #정각에 aws 호출, 당일 결제내역(payment)을 받아옴
    global payment_list
    payment_list = getTodaysPayment()
    payment_list = sorted(payment_list, key=lambda k:k['timestamp'])

    #스케줄러에 등록
    for p in payment_list:
        schedule.every().day.at(p["timestamp"]).do(putInDB(p))

    while True:
        # 정해진 결제내역을 모두 입력한 경우 해제
        if len(payment_list)==0 : 
            break

        schedule.run_pending()
        time.sleep(60)

# 프로그램 실행
if __name__ == '__main__':
    main()