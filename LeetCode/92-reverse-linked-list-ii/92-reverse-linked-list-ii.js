/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    
    let arr = [];
    let node = head;
    
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    
    let temp = [];
    let reverse = [];
    
    temp.push(...arr.slice(0, left-1));
    
    for(let i = left - 1; i < right; i++){
        reverse.push(arr[i]);
    }
    
    reverse.reverse();
    temp.push(...reverse);
    temp.push(...arr.slice(right));
    
    let newNode = new ListNode(temp[0]);
    let pointer = newNode;
    
    for(let i = 1; i < temp.length; i++){
        let nextNode = new ListNode(temp[i]);
        newNode.next = nextNode;
        newNode = newNode.next;
    }
    
    return pointer;
    
};