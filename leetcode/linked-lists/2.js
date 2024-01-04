/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0, sum = l1.val + l2.val 
    if (sum > 9){
        carry = 1 
        sum -= 10
    } else {
        carry = 0
    }
    let new_head = new ListNode(sum, null)
    let temp_new = new_head 
    let temp1 = l1.next, temp2 = l2.next
    while (temp1 && temp2){
        sum = temp1.val + temp2.val + carry
        if (sum > 9){
            carry = 1 
            sum -= 10
        } else {
            carry = 0
        }
        let new_node = new ListNode(sum, null)
        temp_new.next = new_node
        temp_new = temp_new.next
        temp1 = temp1.next
        temp2 = temp2.next
    }
    let continue1 = temp1 ? temp1 : temp2 ? temp2 : null
    if (!continue1){
        if (carry === 1){
            new_node = new ListNode(1, null)
            temp_new.next = new_node
        }
        return new_head 
    }
    while (continue1) {
        sum = continue1.val + carry
        if (sum > 9){
            carry = 1 
            sum -= 10
        } else {
            carry = 0
        }
        let new_node = new ListNode(sum, null)
        temp_new.next = new_node
        temp_new = temp_new.next
        continue1 = continue1.next
    }
    if (carry === 1){
        new_node = new ListNode(1, null)
        temp_new.next = new_node
    }
    return new_head
};