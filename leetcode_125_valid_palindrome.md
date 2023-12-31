# 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

> ##### Example 1:
>
> - Input: s = "A man, a plan, a canal: Panama"
> - Output: true
> - Explanation: "amanaplanacanalpanama" is a palindrome.

### Method 1 - Using Recursion/DP

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var i = 0;
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return isPalindromeRecursion(i, s);
};
const isPalindromeRecursion = (i, s) =>{
    if( i >= Math.round(s.length/2) ) return true;
    if( s[i] != s[s.length-1-i] ) return false
    return isPalindromeRecursion(i+1, s);
}
```

### Method 2 - Using two pointer 

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var left = 0;
    var right = s.length - 1;
    while( left < right ){
        const l = s[left];
        const r = s[right];
        if( chekNumChar(l) == false ){
            left++;
        }else if( chekNumChar(r) == false ){
            right--;
        }else  if( l.toLowerCase() != r.toLowerCase() ){
            return false
        }else{
            left++;
            right--
        }
    }
    return true;
};
const chekNumChar = (str) =>{
    return /^[A-Za-z0-9*$]/.test(str);
}
```



