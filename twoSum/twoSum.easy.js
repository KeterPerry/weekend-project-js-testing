/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @description {Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */

/////////////////////////////////////////////////////////////////////


const twoSum = function (nums, target) {
    let k=2;
    let sum = 0;

    for(let i = 0; i < k; i++) {
       sum += nums[i]; 

    }
    
    for(let i = 0; i < nums.length; i++) {
        if(sum===target)
        return [i,i+1];
        
        else{
            sum= (sum-nums[i])+ nums[i+2];
        }

    }
    return -1;

};




// const nums = [7,2,4,5];
// let target = 9;
// console.log(twoSum(nums, target));


module.exports = twoSum;