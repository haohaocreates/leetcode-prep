/*
given a sorted array, return a sorted array in-place, such that the array's elements are removed

APPROACH 1
[1,1,2]
1, 1, 2
1, 2, 2
1, _, 2
1, 2^, _
       🔻🔻🔻
[*0,0,1*,1,1,2,2,3,3,4]
- curr = 0, next = 2
[0,*1,1,1,1,2*,2,3,3,4]
- curr = 1, next = 5
[0,1,*2,1,1,2,2,3*,3,4]
- curr = 2, next = 7
[0,1,2,*3,1,2,2,3,3,4*]
- curr = 3, next = 9
[0,1,2,3,*4,_,_,_,_,_]
- curr = 4, next = end 
- currIndex = 2

loop through array
    if number is bigger than currPointer
        increase currIndex by 1
        edit arr[currIndex] to the new value
    if lastIndex
        loop through array from currIndex+1 to end 
            edit all values to be '_'

return currIndex;

APPROACH 2
0. set counter (also indexes largest curr number)
1. loop through array 
2. if curr loop index is larger than arr[counter]
    2a. then replace arr[counter+1] with arr[loopIndex]
    2b. add 1 to the counter
3. return counter +1, because we need to account for the first num
    3a. why is this happening again?

Takeaways:
1. If an array is sorted, that's a hint
2. If it's asking for duplicate math in a sorted array, that's another hint
3. To make the comparisons between the array indexes that are right next to each other
*/

const removeDuplicates = (nums) => {
    let currIndex = 0;
    for(let i = 0; i < nums.length; i++){
        nums[currIndex++] = nums[i];
    }
    return currIndex+1;
}

const removeDuplicates2 = (nums) => {
    let currIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[currIndex]){
            nums[currIndex++] = nums[i];
        }
        if(i === nums.length-1){
            // console.log("found last num")
            nums.forEach((num, index) => {
                if(index > (currIndex)){
                    nums[index] = num = '_'
                }
            })
        }
        // console.log("nums iter ", i, ": ", nums);
    }
    return currIndex+1;
};