/**

 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

                //////////////////////////////////////////////////

                
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

console.log(longestCommonPrefix(["flower","flow","flight"]));



module.exports = longestCommonPrefix;
