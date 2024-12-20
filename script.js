//웹사이트의 동작과 기능

// 섹션 전환 함수
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}

// 사용자 등록 폼 제출 처리
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
      // AWS API 엔드포인트로 데이터 전송 로직 구현 예정
      console.log('사용자 등록 데이터:', Object.fromEntries(formData));
      alert('사용자 등록이 완료되었습니다.');
      e.target.reset();
  } catch (error) {
      console.error('등록 중 오류 발생:', error);
      alert('등록 중 오류가 발생했습니다.');
  }
});

// 출석 확인 폼 제출 처리
document.getElementById('attendanceForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  
  try {
      // AWS API 엔드포인트로 데이터 전송 로직 구현 예정
      console.log('출석 확인 데이터:', Object.fromEntries(formData));
      alert('출석이 확인되었습니다.');
      e.target.reset();
  } catch (error) {
      console.error('출석 확인 중 오류 발생:', error);
      alert('출석 확인 중 오류가 발생했습니다.');
  }
});

// 대시보드 데이터 로드 함수
async function loadDashboardData() {
  try {
      // AWS API에서 데이터를 가져오는 로직 구현 예정
      // 임시 데이터
      document.getElementById('todayAttendance').textContent = '85';
      document.getElementById('totalStudents').textContent = '30';
      
      const attendanceList = document.getElementById('attendanceList');
      attendanceList.innerHTML = '<li>데이터 로딩 중...</li>';
  } catch (error) {
      console.error('대시보드 데이터 로드 중 오류:', error);
  }
}

// 페이지 로드 시 대시보드 데이터 로드
window.addEventListener('load', loadDashboardData);
