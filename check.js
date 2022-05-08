// const longestCommonPrefix = function (strs) {
//     let newStr="";
//     let flag=true;
//     let i=0;


//     for (let j=0; j<strs[i].length; j++) {
//         for (let i=0; i<strs.length; i++){
//          if( strs[i][0]!== strs[i+1][0] )
//          {
//              return " no common prefix was found"
//          }

//          if( strs[i][j]!== strs[i+1][j] )
//          {
//              flag = false;
//              break;
//          }

//         }

//         if (flag===true)
//         newStr+= strs[i][j];
//     }

//     return newStr;
// };






// console.log(longestCommonPrefix(["dog", "racecar", "car"]));


// function palindromeNumber (number){

//     let numStr= number.toString();
//     let flag = true;


//     for(let i=0, j = numStr.length-1; i<j, j>i; i++, j--)
//     {
//           if (numStr[i]!==numStr[j])
//            {
//                flag = false;
//                break;
//            }
//     }

//     if (flag===true)
//       {
//     return true;
//       }
    
//     else
//     return false;

// }

// console.log(palindromeNumber(10));



//////////////////////////////////////////////////////////////////////

const longestCommonPrefix = function(strs) {
    let newStr = "";

   

    for (let i=0; i < strs[0].length; i++){ 
        const char = strs[0][i] // loop through all characters of the very first string. 


        for (let j = 1; j < strs.length; j++){ 
          // loop through all other strings in the array
            if(strs[j][i] !== char)
             return newStr;
            
        }

        newStr+= char;
    }

    
    return newStr;
}

console.log(longestCommonPrefix(["dog","racecar","car"]));