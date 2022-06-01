function solution(s) {
  // 입력: "try hello world"
  // 출력: "TrY HeLlO WoRlD"
  // 짝수번째 대문자로, 홀수번째 소문자로

  var answer = '';
  var str = s.split(" ");
  var arr = []
  
  for(let i = 0; i < str.length; i++){
    arr[i] = [];

    for(let j = 0; j < str[i].length; j++){
      if(j === 0 || j % 2 === 0){
        arr[i][j] = str[i][j].toUpperCase();
      } else {
        arr[i][j] = str[i][j].toLowerCase();
      }
    }
    arr[i] = arr[i].join("");
  }

  answer = arr.join(" ");
  return answer;
}