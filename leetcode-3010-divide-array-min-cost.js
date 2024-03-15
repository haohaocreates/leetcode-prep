// hint1, because it's divided into subarrays the 1st element has to be included
// hint2, because the first element is included, we only need to find 2 min numbers
// leetcode approach: you can just take this as a "find 2 minimum elements" question after these 2 hints are realized
// go through a 1 pass and 2 counter hold

const minimumCost = (nums) => {
    let min1 = 9999999999999999998;
    let min2 = 9999999999999999999;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < min1){
            min2 = min1;
            min1 = nums[i];
        }
        else if(nums[i] < min2){
            min2 = nums[i];
        }
    }

    return nums[0] + min1 + min2;
};