/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head){
        return head;
    }
    
    while(head && head.val === val){
        head = head.next;
    }
    
    let pointer = head;
    let prev = null;
    
    while(pointer){
        if(pointer.val === val){
            prev.next = pointer.next;
            pointer = prev.next;
        }else{
            prev = pointer;
            pointer = pointer.next;
        } 
    }
    
    return head;
}