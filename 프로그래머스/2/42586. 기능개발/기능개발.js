function solution(progresses, speeds) {
    const days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));    
    const result = [];
    
    let current = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (current >= days[i]) {
          count++;
        } else {
          result.push(count);
          current = days[i];
          count = 1;
        }
    }
    
    result.push(count)
    return result
}