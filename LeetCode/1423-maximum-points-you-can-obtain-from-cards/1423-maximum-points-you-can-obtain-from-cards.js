/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let max = 0;
    
    for(let i = 0; i < k; i++){
        max += cardPoints[i]
    }
    
    let temp = max;
    
    for(let j = k - 1; j >= 0; j--){
        temp = temp - cardPoints[j] + cardPoints[cardPoints.length + j - k]
        max = Math.max(max, temp)
    }
    
    return max;
};