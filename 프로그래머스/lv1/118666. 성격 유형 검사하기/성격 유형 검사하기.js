function solution(survey, choices) {
    const types = ["RT", "CF", "JM", "AN"]
    const score = {}
    
    types.forEach(type => {
        const [left, right] = type
        score[left] = 0;
        score[right] = 0;
    })
    
    choices.forEach((choice, idx) => {
        const [left, right] = survey[idx]
        score[choice < 4 ? left : right] += Math.abs(choice - 4)
    })
    
    const result = []
    types.forEach(type => {
        const [left, right] = type
        result.push(score[left] >= score[right] ? left : right)
    })

    return result.join("")
}