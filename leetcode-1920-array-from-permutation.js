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