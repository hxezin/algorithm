function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"];
    const score = {};
    let result = ""
    
    // 유형 점수 초기화
    types.forEach(type => {
        const [left, right] = type;
        score[left] = 0;
        score[right] = 0;
    })
    
    // 선택지 점수 4점 미만일 때 왼쪽 유형에 점수 추가
    // 선택지 점수 4점 이상일 때 오른쪽 유형에 점수 추가
    // 점수 = |선택지 점수 - 4|
    choices.forEach((choice, index) => {
        const [left, right] = survey[index];
        score[choice <  4 ? left : right] += Math.abs(choice - 4)
    })
    
    types.forEach(type => {
        const [left, right] = type;
        result += score[left] >= score[right] ? left : right;
    })
    
    return result;
}