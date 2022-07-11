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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let data = [];
    
    let helper = (node) => {
        if(node.left) helper(node.left)
        data.push(node.val)
        if(node.right) helper(node.right)
    }
    
    helper(root)
    
    let result = new TreeNode();
    let temp = result;
    
    for(let i = 0; i < data.length; i++){
        temp.right = new TreeNode(data[i])
        temp = temp.right
    }
    
    return result.right
};