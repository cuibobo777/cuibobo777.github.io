# [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

### 题目：

给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

### 示例：

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

### 题解：

该问题为 `sliding window` 问题。我们要进行以下步骤：

1. 创建一个 `set`

2. 两个指针：第一个指针指向字符串的开头 - `j`

   ​					第二个指针跟随for循环遍历字符串 -  `i`

3. 如果 `set` 里面没有 `s[i]`， 说明已经遍历的字符中而没有重复的字符，这时 `s[i]` 添加到 `set` 里。 `set` 的长度就是最大不重复字符的数量，所以添加后要更新这个数量

4. 如果 `set` 里面有 `s[i]`，则开始从 `set` 中删去 `s[j]`，并且递增 `j`， 再次检查 `set` 里是否有 `s[i]`， 如此反复直到 `set` 里没有 `s[i]` 为止

5. 重复第3和4步骤，直到遍历完整个字符串

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let i = 0, j = 0, maxLength = 0
    if (s.length === 0) return 0

    for(i; i<s.length;i++) {
        if (!set.has(s[i])) {
            set.add(s[i])
            maxLength = Math.max(maxLength, set.size)
        } else {
            while(set.has(s[i])) {
                set.delete(s[j])
                j++
            }
            set.add(s[i])
        }
    }

    return maxLength
};
```

