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
var pivotIndex = function(nums) {
    let lsum = 0;
    let rsum = nums.reduce((accu, val) => accu + val ,0);
    for(let i=0; i<nums.length; i++ ){
        lsum += i == 0 ? 0 : nums[i-1] ;
        rsum -= nums[i];
        if( lsum == rsum ){
            return i;
        }   
    }
    if( lsum != rsum ){
            return -1;
    } 
};
//Leetcode - 240. Search a 2D Matrix II
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var row = 0;
    var col = matrix[0].length - 1;
    while( row < matrix.length && col >= 0 ){
        if( matrix[row][col] == target ){
            return true;
        }else if( matrix[row][col] > target ){
            col--;
        }else if( matrix[row][col] < target ){
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
var maxChunksToSorted = function(arr) {
    var maxVal = 0;
    var Chunk = 0;
    for(let i=0; i<arr.length; i++){
        if( arr[i] > maxVal ){
            maxVal = arr[i];
        }
        if( maxVal == i ){
            Chunk++;
        }
    }
    return Chunk;  
};