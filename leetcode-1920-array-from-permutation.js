// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// 1 pass, O(n) time complexity, O(n) space complexity

// takeaway is to have 1 pass, and push to a new array 

const buildArray = (nums) => {

    // 1 pass 
        // push to new array the new element
    let ans = []
    nums.forEach((num) => {
        ans.push(nums[num]);
        console.log(ans);
    })
    return ans;
}
