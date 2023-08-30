function solution(n, m, section) {
  let answer = 0;
  let current = 0;

  section.forEach((sectionNum) => {
    if (sectionNum > current){
      current = sectionNum + m - 1;
      answer++;
    }
  });

  return answer;
}