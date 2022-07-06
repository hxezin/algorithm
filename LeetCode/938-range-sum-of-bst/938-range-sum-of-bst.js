/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    let sum = 0;
    
    if(!root) return 0;
    
    if(root.val >= low && root.val <= high){
        sum = root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
    }
    
    if(root.val > high){
        return rangeSumBST(root.left, low, high)
    }else if(root.val < low){
        return rangeSumBST(root.right, low, high)   
    }
    
    return sum;
};