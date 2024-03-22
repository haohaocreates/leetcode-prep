// the question asks you to take in an array, and to return an array twice in length with the original array doubled 
// one way is to loop through the original array that is passed in, and then re-add all of the original elements to the original array (which gives you a N runtime with N space complexity)
// another is to use the concat function and to simply return the original array added onto itself 

// higher takeaway: single pointer that loops through the array  

const getConcatenation = function(nums) {
    return [...nums, ...nums];
};