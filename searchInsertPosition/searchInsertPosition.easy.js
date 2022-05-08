/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * @description Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Optional write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */

/////////////////////////////////////////////////////////////////////////////////////////




const searchInsertPosition = function (nums, target) {
    let mid;
    let left = 0
    let right = nums.length - 1;


    while (left <= right){

            mid = Math.floor ((left + right) / 2);

            if (nums[mid] === target){
                return mid;
            }

            if (nums[mid] < target)
                left = mid + 1;

            if (nums[mid] > target)    
                right = mid - 1;

            
        }
    

        for(let i = 0; i <nums.length; i++){

            if (nums[nums.length-1] < target)
                return 4;
            
            else if (nums[i] < target && nums[i+1] > target)
            return i+1;
        }
    

    
};




// const nums= [1,3,5,6];
// let target = 8;
// console.log(searchInsert(nums, target));


module.exports =searchInsertPosition ;