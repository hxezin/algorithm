function solution(numbers) {
    const n = numbers.length;
    const result = new Array(n).fill(-1);

    const stack = [];
    for (let i = 0; i < n; i++) {
        while(stack.length > 0 && numbers[i] > stack.at(-1)[0]){
            let [num, numIdx] = stack.pop();
            result[numIdx] = numbers[i];
        }
        stack.push([numbers[i], i]);
    }

  return result;
}