// the higher level algo here is to learn how to do a 1 pass approach where you sift through the array once but keep track of two highest numbers
// another takeaway, is to make sure that the second max is set "before" the first max is changed
// if you change the second max "afterwards" then the first and second max will be the same

const maxProduct = (nums) => {
    let max1 = -1
    let max2 = -2
    
    nums.map((num, index) => {
        if(num >= max1){
            max2 = max1;
            max1 = num;
        }
        else if (num > max2){
            max2 = num;
        }
    })

    return ((max1-1)*(max2-1));
};