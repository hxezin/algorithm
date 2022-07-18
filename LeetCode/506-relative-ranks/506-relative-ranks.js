/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let result = [];
    
    let arr = [...score].sort((a, b) => b - a)
    
    for(let i = 0; i < score.length; i++){
        if(score[i] === arr[0]){
            result[i] = "Gold Medal"
        }else if(score[i] === arr[1]){
            result[i] = "Silver Medal"
        }else if(score[i] === arr[2]){
            result[i] = "Bronze Medal"
        }else{
            result[i] = String(arr.indexOf(score[i]) + 1)
        }
    }
    
    return result;
};