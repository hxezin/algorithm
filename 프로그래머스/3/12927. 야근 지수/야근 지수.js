function solution(n, works) {
    const totalWorks = works.reduce((acc, cur) => acc + cur, 0);
    if(totalWorks <= n) return 0;

    works.sort((a, b) => a - b);

    while (n-- > 0) {
        works[works.length - 1] -= 1;
        
        let i = works.length - 1;
        while (i > 0 && works[i] < works[i - 1]) {
            [works[i], works[i - 1]] = [works[i - 1], works[i]];
            i--;
        }
    }

   return works.reduce((acc, cur) => acc + cur ** 2, 0);
}