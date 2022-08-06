function solution(nums) {
    let result = [...new Set(nums)]
    let max = nums.length / 2
    
    return result.length > max ? max : result.length
}