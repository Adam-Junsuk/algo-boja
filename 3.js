// solution 함수 정의
function solution(cards1, cards2, goal) {
    // cards1과 cards2에서 현재 검사할 단어의 인덱스를 저장하는 포인터 변수
    let ptr1 = 0;
    let ptr2 = 0;
  
    // goal 배열의 각 단어를 순회
    for (const word of goal) {
      // 만약 단어가 cards1에 있고, 그 위치가 현재 ptr1보다 크거나 같다면
      if (cards1.includes(word) && ptr1 <= cards1.indexOf(word)) {
        // ptr1을 해당 단어의 다음 인덱스로 업데이트
        ptr1 = cards1.indexOf(word) + 1;
      } 
      // 만약 단어가 cards2에 있고, 그 위치가 현재 ptr2보다 크거나 같다면
      else if (cards2.includes(word) && ptr2 <= cards2.indexOf(word)) {
        // ptr2를 해당 단어의 다음 인덱스로 업데이트
        ptr2 = cards2.indexOf(word) + 1;
      } 
      // 위의 두 조건 중 어느 것도 만족하지 않는다면 "No" 반환
      else {
        return "No";
      }
    }
    // 모든 단어를 순서대로 만들 수 있다면 "Yes" 반환
    return "Yes";
  }
  
  // 예제
  const cards1 = ["i", "drink", "water"];
  const cards2 = ["want", "to"];
  const goal = ["i", "want", "to", "drink", "water"];