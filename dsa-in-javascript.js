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

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
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


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var totalSum = 0;
    var ans = nums[0];
    for (let i = 0; i < nums.length; i++) {
        totalSum = totalSum + nums[i];
        if (ans < totalSum) {
            ans = totalSum;
        }
        if (totalSum < 0) {
            totalSum = 0;
        }
    }
    return ans;
};
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
//Leetcode : 704. Binary Search
/*Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.*/
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
//Leetcode - 240. Search a 2D Matrix II
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
//Leetcode - 769. Max Chunks To Make Sorted
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
//1979. Find Greatest Common Divisor of Array
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
//136. Single Number
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
//231. Power of Two
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
//191. Number of 1 Bits
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
//229. Majority Element II
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
    console.log(`
    num1 : ${num1}
    count1: ${count1}
    num2 : ${num2}
    count2: ${count2}
    `);
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
//1979. Find Greatest Common Divisor of Array
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
//169. Majority Element
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
//Decimal to Binary Conversion
const convertDecimalToBinary = (n) => {
    var binaryArr = [];
    while (n > 0) {
        binaryArr.push(n % 2);
        n = parseInt(n / 2);
    }
    binaryArr = binaryArr.reverse();
    return binaryArr;
}
//Leetcode 33. Search in Rotated Sorted Array
/*
There is an integer array nums sorted in ascending order (with distinct values).
Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
Given the array nums after the possible rotation and an integer target, r
eturn the index of target if it is in nums, or -1 if it is not in nums.
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/
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
/** 
 * Lettcode - 153. Find Minimum in Rotated Sorted Array
*/
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
console.log('Result', convertDecimalToBinary(19));
//HW

1. //var array = [4,12,45,21,76,3,1,32];  // 2nd max & min
2. //1 1 0 0 1 1 0 0   => move all zeros to end in array
3. //reverse array  1 2 3 4 5 6

//Find 1st & 2nd min/max value from Array
var array = [4, 12, 45, 21, 76, 3, 1, 32];
var min = array[0];
var max = 0;
var min1 = 0;
var max1 = 0;
for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
        var tempMin = min;
        min = array[i];
        min1 = tempMin;
    }
    if (array[i] > max) {
        var tempMax = max;
        max = array[i];
        max1 = tempMax;
    }
}
console.log('min', min);
console.log('min1', min1);
console.log('max1', max1);
console.log('max', max);


https://www.amazon.in/Cracking-Coding-Interview-Programing-Questions/dp/0984782850
https://www.amazon.in/Data-Structures-Algorithms-Made-Easy/dp/8192107558/ref=asc_df_8192107558/?tag=googleshopdes-21&linkCode=df0&hvadid=396987754974&hvpos=&hvnetw=g&hvrand=11363149714980090141&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9144012&hvtargid=pla-406475569335&psc=1&ext_vrnc=hi