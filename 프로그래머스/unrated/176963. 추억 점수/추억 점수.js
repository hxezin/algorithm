function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i < photo.length; i++){
        let sum = 0;
        const pic = photo[i];
        for(let j = 0; j < pic.length; j++){
            const personIdx = name.indexOf(pic[j]);
            if(personIdx === -1) continue;
            sum += yearning[personIdx];
        }
        answer.push(sum);
    }
    return answer;
}