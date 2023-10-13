function solution(numbers) {
    const stack = [];
    const result = new Array(numbers.length).fill(-1);
  
    for (let i = 0; i < numbers.length; i++) {
      while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
        const j = stack.pop();
        result[j] = numbers[i];
      }
      stack.push(i);
    }
  
    return result;
  }
  