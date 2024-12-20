
# 얼굴 인식 기반 출석 관리 시스템

https://dllxxun.github.io/Face_Attendance_System/

✏️AWS Rekognition과 Lambda를 활용한 얼굴 인식 기반 출석 관리 시스템입니다. 
사용자가 웹사이트에 얼굴을 업로드하면 시스템이 자동으로 인식하여 출석을 처리하고, 실시간으로 결과를 알려주는 비접촉식 출석 관리 솔루션입니다.

### 📍프로젝트 목적
편리성: 최초 1회 얼굴 등록 후 얼굴 인식만으로 출석 가능
위생적인 관리: 비접촉식 출석으로 안전한 출석 관리 가능
자동화: AWS 서버리스 서비스를 활용한 자동화된 출석 관리

### 📍주요 기능
1. 사용자 등록
얼굴 이미지 업로드
기본 정보 등록 (이름, 학번, 전화번호, 생년월일)
AWS Rekognition Collection에 얼굴 데이터 저장
2. 출석 확인 및 알림
얼굴 이미지 업로드를 통한 출석 확인
실시간 출석 처리 및 데이터베이스 저장
SMS 알림 서비스 (출석 완료 메시지 전송)
3. 실시간 모니터링 대시보드
출석 현황 실시간 확인
날짜별 출석 기록 조회
출석 통계 및 그래프 제공
데이터 다운로드 기능

📍기술 스택

- AWS Rekognition
- AWS Lambda
- AWS SNS
- AWS DynamoDB
- HTML/CSS/JavaScript

📍시스템 구성도

[시스템 구성도 이미지 추가 예정]

📍설치 및 실행 방법

저장소 클론
필요한 AWS 서비스 설정
웹 애플리케이션 실행

라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.



