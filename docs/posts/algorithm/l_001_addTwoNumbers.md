# 两数相加

### 题目

给你两个 **非空** 的链表，表示两个非负的整数。它们每位数字都是按照 **逆序** 的方式存储的，并且每个节点只能存储 **一位** 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

实例：

```
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
```

### 题解

#### 添加 `dummy` 节点：

在链表前我们加上一个 `dummy` 节点，`dummy` 节点的值通常为 0 或 -1，但是我们不会去读取 `dummy` 节点的值。

那我们给链表增加 `dummy` 节点后，链表还是原链表么？

单项链表是不可以往回读的，所以当我们返回时，返回 `dummy.next` 对于程序而言链表是没有改变的。并且链表对长度是不敏感的，对于链表的遍历，我们一般使用 `while` 循环。

```
while(n === null) {
}
```

或者

```
while(n.next === null) {
}
```

#### `dummy` 节点的作用：

##### 1. 作为一个头节点

作为一个头节点，这种情况我们就不用去关心头节点的值，可以使代码的整洁度更优。

##### 2. 解决链表头部的极端情况

当在要删除头部节点的情况下，如果我们不增加 `dummy` 节点，那么就要为头部节点增加额外的判断。

#### 代码：

```javascript
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
    let dummy = new ListNode()
    let curr = dummy
    let carry = 0

    while(l1 !== null || l2 !== null) {
        let sum = 0
        if(l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }
        if(l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        sum += carry
        curr.next = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)
        curr = curr.next
    }

    if (carry > 0) {
        curr.next = new ListNode(carry)
    }

    return dummy.next
};
```





