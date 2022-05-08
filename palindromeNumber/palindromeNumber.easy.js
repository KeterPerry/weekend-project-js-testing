


 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.} 
//  */


function palindromeNumber (number){

    let numStr= number.toString();
    let flag = true;


    for(let i=0, j = numStr.length-1; i<j, j>i; i++, j--)
    {
          if (numStr[i]!==numStr[j])
           {
               flag = false;
               break;
           }
    }

    if (flag===true)
      {
    return true;
      }
    
    else
    return false;

}

// console.log(palindromeNumber(121));


module.exports = palindromeNumber;
