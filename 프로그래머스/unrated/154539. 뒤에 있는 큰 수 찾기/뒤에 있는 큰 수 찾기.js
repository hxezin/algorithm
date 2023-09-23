function solution(numbers) {
    const n = numbers.length;
    const result = new Array(n).fill(-1);

    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && numbers[i] > numbers[stack.at(-1)]) {
            const idx = stack.pop();
            result[idx] = numbers[i];
        }
        stack.push(i);
    }

  return result;
}