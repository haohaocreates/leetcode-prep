// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Method 1: 2 Pass O(n^2)
// Method 2: Sliding Window O(n^2)
// Method 3: Map Storing O(n) 

/*
    loop through original array
    if map has target-num, then return index, and map index
    else, set key as num and result as index
*/

// higher level algo is to just use a map and to check the previous list 
// the point here is to give up some space complexity in exchange for time

const twoSum = (nums, target) => {
    let map = new Map();

    for(let i = 0; i < nums.length; i ++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]), i]            
        }
        else{
            map.set(nums[i], i)
        }
    }
    return []
};

console.log(twoSum([2,7,11,15], 9))