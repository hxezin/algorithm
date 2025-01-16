function solution(s, skip, index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const validAlphabets = [...alphabet].filter(char => !skip.includes(char));
  
  let result = "";

  for (let char of s) {
    const currentIndex = validAlphabets.indexOf(char);
    
    const newIndex = (currentIndex + index) % validAlphabets.length;
    
    result += validAlphabets[newIndex];
  }

  return result;
}