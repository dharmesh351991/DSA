


`Javascript`


### Leetcode 42. Trapping Rain Water

```javascript
var trap = function (height) {
    var Arr = height;
    var left = [];
    var right = [];
    var water = 0;
    left[0] = Arr[0];
    for (let i = 1; i < Arr.length; i++) {
        left[i] = Math.max(Arr[i], left[i - 1]);
    }
    right[Arr.length - 1] = Arr[Arr.length - 1];
    for (let j = Arr.length - 2; j >= 0; j--) {
        right[j] = Math.max(Arr[j], right[j + 1]);
    }
    for (let iter = 0; iter < Arr.length; iter++) {
        water = water + Math.min(left[iter], right[iter]) - Arr[iter];
    }
    return water;
};
```

### Leetcode 75. Sort Colors

```javascript
var sortColors = function (nums) {
    var myArray = nums;
    var low = 0;
    var mid = 0;
    var high = myArray.length - 1;
    while (mid <= high) {
        if (myArray[mid] == 0) {
            var temp = myArray[mid];
            myArray[mid] = myArray[low];
            myArray[low] = temp;
            low++;
            mid++;
        } else if (myArray[mid] == 1) {
            mid++;
        } else {
            var temp = myArray[mid];
            myArray[mid] = myArray[high];
            myArray[high] = temp;
            high--;
        }
    }
};
```

### Leetcode 283. Move Zeroes

```javascript
var moveZeroes = function (nums) {
    var count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[count] = nums[i];
            count++;
        }
    }
    while (count < nums.length) {
        nums[count] = 0;
        count++
    }
};
```

### Leetcode 53. Maximum Subarray

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var ans = nums[0];
    for(let i=0; i<nums.length; i++ ){
        sum = sum + nums[i];
        if( ans < sum ){
            ans = sum;
        }
        if( sum < 0 ){
            sum = 0;
        }
    }
    return ans;
};
```

### Leetcode 412. Fizz Buzz

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var myResult = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) { //if( i %15 == 0){
            myResult[i - 1] = "FizzBuzz";
        } else if (i % 3 == 0) {
            myResult[i - 1] = "Fizz";
        } else if (i % 5 == 0) {
            myResult[i - 1] = "Buzz";
        } else {
            myResult[i - 1] = `${i}`;
        }
    }
    return myResult;
};
```

### Leetcode 704. Binary Search

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while (low <= high) {
        var mid = Math.round((low + high) / 2);
        if (target == nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
};
```

### Leetcode 724. Find Pivot Index

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let lsum = 0;
    let rsum = nums.reduce((accu, val) => accu + val, 0);
    for (let i = 0; i < nums.length; i++) {
        lsum += i == 0 ? 0 : nums[i - 1];
        rsum -= nums[i];
        if (lsum == rsum) {
            return i;
        }
    }
    if (lsum != rsum) {
        return -1;
    }
};
```

### Leetcode 240. Search a 2D Matrix II

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var row = 0;
    var col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            row++;
        }
    }
    return false;
};
```

### Leetcode 769. Max Chunks To Make Sorted

```javascript
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    var maxVal = 0;
    var Chunk = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
        if (maxVal == i) {
            Chunk++;
        }
    }
    return Chunk;
};
```

### Leetcode 1979. Find Greatest Common Divisor of Array

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    var min = nums[0];
    var max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    console.log('min', min);
    console.log('max', max);
    for (let i = min; i > 0; i--) {
        if (min % i == 0 && max % i == 0) {
            return i;
        }
    }
};
```

### Leetcode 136. Single Number

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var ans = 0;
    for (let i = 0; i < nums.length; i++) {
        ans = ans ^ nums[i];
    }
    return ans;
};
```

### Leetcode 231. Power of Two

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) {
        return false;
    }
    if ((n & (n - 1)) == 0) {
        return true
    } else {
        return false
    }
};
```

### Leetcode 191. Number of 1 Bits

```javascript
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var ans = 0;
    while (n != 0) {
        n = n & (n - 1);
        ans++
    }
    return ans;
};
```

### Leetcode 229. Majority Element II

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement2 = function (nums) {
    var n = nums.length;
    var num1 = -1;
    var count1 = 0;
    var num2 = -1;
    var count2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] == num1) {
            count1++;
        }
        else if (nums[i] == num2) {
            count2++;
        }
        else if (count1 == 0) {
            num1 = nums[i];
            count1++;
        }
        else if (count2 == 0) {
            num2 = nums[i];
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    var count1 = 0;
    var count2 = 0;
    var returnArray = [];
    for (let j = 0; j < n; j++) {
        if (nums[j] == num1) {
            count1++;
        } else if (nums[j] == num2) {
            count2++;
        }
    }
    if (count1 > n / 3) {
        returnArray.push(num1);
    }
    if (count2 > n / 3) {
        returnArray.push(num2);
    }
    return returnArray;
};
```

### Leetcode 1979. Find Greatest Common Divisor of Array

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    var min = nums[0];
    var max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    console.log('min', min);
    console.log('max', max);
    for (let i = min; i > 0; i--) {
        if (min % i == 0 && max % i == 0) {
            return i;
        }
    }
};
```

### Leetcode 169. Majority Element

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var n = nums.length;
    var major = nums[0];
    var count = 1;
    for (let i = 1; i < n; i++) {
        if (nums[i] == major) {
            count++
        } else {
            count--
        }
        if (count == 0) {
            major = nums[i];
            count = 1;
        }
    }
    return major;
};
```

### GFG Decimal to Binary

```javascript
const convertDecimalToBinary = (n) => {
    var binaryArr = [];
    while (n > 0) {
        binaryArr.push(n % 2);
        n = parseInt(n / 2);
    }
    binaryArr = binaryArr.reverse();
    return binaryArr;
}
```

### Leetcode 33. Search in Rotated Sorted Array

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var low = 0;
    var high = nums.length - 1;
    while(low<=high){
        var mid = Math.round( ( low + high ) / 2 );
        if( target == nums[mid] ){
            return mid;
        }
        else if( nums[low] <= nums[mid] ){
            if( nums[low] <= target && target < nums[mid]){
                high = mid -1;
            }else{
                low = mid + 1;
            }
        }else{
            if( nums[mid] < target && target <= nums[high] ){
                low = mid+1;
            }else{
                high = mid -1;
            }
        }
    }
    return -1;
};
```

### Leetcode 153. Find Minimum in Rotated Sorted Array

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var low = 0;
    var high = nums.length-1;
    var ans = Infinity;
    while( low <= high){
        var mid = Math.floor( (low + high) / 2 );
        if( nums[low] <= nums[high] ){
            ans = Math.min(ans, nums[low]);
            break;
        }
        //left part is sorted
        if( nums[low] <= nums[mid] ){
            ans = Math.min( ans, nums[low] );
            low = mid + 1;
        }else{
            //if right is sorted
            ans = Math.min(ans, nums[mid]);
            high = mid - 1;
        }
    }
    return ans;
};
```

### Leetcode 152. Maximum Product Subarray

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var prefix = 1;
    var suffix = 1;
    var answer = Number.MIN_SAFE_INTEGER;
    var len = nums.length;
    for( let i=0; i<len; i++ ){
        if(prefix == 0){
            prefix = 1;
        }
        if(suffix == 0){
            suffix = 1;
        }
        prefix = prefix * nums[i]; 2,6
        suffix = suffix * nums[len - i -1];
        answer = Math.max( answer, Math.max(prefix, suffix) );
    }
    return answer;
};
```

### Leetcode 485. Max Consecutive Ones

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0;
    var max_count = 0;
    for(let i=0; i<nums.length; i++){
        if( nums[i] == 1 ){
            count++;
        }else{
            count = 0;
        }
        // if( count > max_count ){
        //         max_count = count;
        // }
        max_count = Math.max(max_count, count);
    }
    return max_count;
};
```

### Leetcode 189. Rotate Array

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    if(len == 1 ){
        return;
    }
    k %= len; //important condition
    reverse(nums, 0, len-k-1 );
    reverse(nums, len-k, len-1 );
    reverse(nums, 0, len-1 );
};
var reverse = function(nums, start, end){
    while( start <=end ){
        var tempVal = nums[start];
        nums[start] = nums[end];
        nums[end] = tempVal;
        start++;
        end--;
    }
}
```

### Leetcode 41. First Missing Positive

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var n = nums.length;
    for(let i=0; i<n; i++){
        var element = nums[i];
        var chair = element - 1;
        if( element >=1 && element <=n ){
            if( nums[chair] != element ){
                var tempVal = element;
                nums[i] = nums[chair];
                nums[chair] = tempVal;
                i--;
            }
        }
    }
    for(let j=0; j<n;j++){
        if( nums[j] != j+1 ){
            return j + 1;
        }
    }
    return n + 1;
}
```

### Leetcode 26. Remove Duplicates from Sorted Array

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var length = nums.length;
    var i = 0;
    for(let j=1; j<length; j++){
        
        if( nums[j] != nums[i]  ){
            i++;
            nums[i] = nums[j];
        }
    }
    return i+1;
};
```

### Leetcode 268. Missing Number

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var ans = 0;
    var Max = nums.length;
    for(let i=0; i<nums.length; i++){
        ans ^= (nums[i]^i);
    }
    return ans^Max;
};
```
### Leetcode 912. Sort an Array

#### Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

#### Method 1

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var numsLen = nums.length;
    if( numsLen < 2 ){
        return nums;
    }
    var mid = Math.floor( numsLen  / 2 );
    var leftArray = nums.slice(0, mid);
    var rightArray = nums.slice(mid);
    return merge( sortArray(leftArray), sortArray(rightArray) );
};
var merge = function(leftArray, rightArray){
    var sortArray = [];
    while( leftArray.length && rightArray.length ){
        if( leftArray[0] <= rightArray[0] ){
            sortArray.push(leftArray.shift());
        }else{
            sortArray.push(rightArray.shift());
        }
    }
    return [...sortArray, ...leftArray, ...rightArray ];
}
```

#### Method 2

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    var low = 0;
    var high = nums.length - 1;
    return divide(nums, low, high);
};
var divide = function(nums, si, ei){
    if( si>=ei ){
        return nums;
    }
    var mid = Math.floor( (si+ei)/2 );
    divide(nums, si, mid);
    divide(nums, mid+1, ei);
    return conquer(nums,si, mid, ei);
}
var conquer = function(nums, si, mid, ei){
    var newArr = [];
    var index1 = si;
    var index2 = mid + 1;
    var x= 0;
    while( index1 <= mid && index2<=ei ){
        if( nums[index1] <= nums[index2] ){
            newArr[x++] = nums[index1++];
        }else{
            newArr[x++] = nums[index2++];
        }
    }
    while( index1 <=mid ){
        newArr[x++] = nums[index1++];
    }
    while( index2 <=mid ){
        newArr[x++] = nums[index2++];
    }
    for(let i=0,j=si; i<newArr.length; i++,j++ ){
        nums[j] = newArr[i];
    }
    return nums;
}
```
