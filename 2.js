//slice와 splice의 차이
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    // 원본 배열을 보존하기 위해 slice 메소드를 사용
    let arr = array.slice(commands[i][0] - 1, commands[i][1]);

    // 배열을 정렬
    let sortedArr = arr.sort((a, b) => a - b);

    // 정렬된 배열에서 원하는 값을 answer에 추가
    answer.push(sortedArr[commands[i][2] - 1]);
  }

  return answer;
}

// splice와 slice의 차이점
// 원본 배열 수정: splice는 원본 배열을 수정합니다. 반면에 slice는 원본 배열을 그대로 두고 새로운 배열을 반환합니다.

// 반환 값: splice는 제거된 요소들을 배열로 반환합니다. slice는 선택된 요소들을 새 배열로 반환합니다.

// 매개변수:

// splice(start, deleteCount, item1, item2, ...): start 인덱스에서 deleteCount 개수만큼의 요소를 제거하고, item1, item2, ...를 삽입합니다.
// slice(start, end): start 인덱스부터 end 인덱스 전까지의 요소를 새 배열로 반환합니다.
// slice의 매개변수에 대해
// start: 시작 인덱스입니다. 이 인덱스부터 슬라이싱을 시작합니다. 음수일 경우 배열의 끝에서부터의 위치를 나타냅니다. 예: -1은 배열의 마지막 요소입니다.

// end: 끝 인덱스입니다. 이 인덱스 전까지 슬라이싱을 합니다. 즉, end 인덱스는 포함되지 않습니다. 이 매개변수가 생략되면 배열의 끝까지 슬라이싱합니다. 음수일 경우 배열의 끝에서부터의 위치를 나타냅니다.

// 테스트 케이스
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
