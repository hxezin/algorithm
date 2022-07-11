/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    function traverse(node1, node2){
        if(node1 === null && node2 === null) return true;
        if(node1 === null || node2 === null) return false;
        if(node1.val !== node2.val) return false;
        
        return (node1.val === node2.val) && traverse(node1.left, node2.left) && traverse(node1.right, node2.right)
    }
    
    return traverse(p, q)
};