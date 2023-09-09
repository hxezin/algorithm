function solution(n, works) {
    if (works.reduce((acc, val) => acc + val, 0) <= n) {
        return 0;
    }

    works.sort((a, b) => b - a);
    while (n > 0) {
        let i = 0;
        works[i] -= 1;
        n -= 1;

        while (i < works.length - 1 && works[i] < works[i + 1]) {
          [works[i], works[i + 1]] = [works[i + 1], works[i]];
          i += 1;
        }
      }

    let answer = works.reduce((acc, val) => acc + val ** 2, 0);
    return answer;
}
