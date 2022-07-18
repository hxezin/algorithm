/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let result = [];
    
    let sort = [...score].sort((a, b) => b - a)
    
    for(let i = 0; i < score.length; i++){
        if(score[i] === sort[0]){
            result[i] = "Gold Medal"
        }else if(score[i] === sort[1]){
            result[i] = "Silver Medal"
        }else if(score[i] === sort[2]){
            result[i] = "Bronze Medal"
        }else{
            result[i] = String(sort.indexOf(score[i]) + 1)
        }
    }
    
    return result;
};