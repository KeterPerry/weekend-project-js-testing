/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

/////////////////////////////////////////////////////////////////////////////////////
const validParentheses = function (s) {
    const sta=[];
    // let top= sta.length-1;
    // console.log(top)

    for (let i=0; i<s.length; i++){
        if ( s[i]==="(" ||s[i]==="{"||s[i]==="[" )
        sta.push(s[i])
       

    
       else if ( s[i]===")" && sta[sta.length-1]==="(" ||s[i]==="}"&& sta[sta.length-1]==="{"||s[i]==="]" && sta[sta.length-1]==="[") 
       sta.pop(sta[sta.length-1]);

       else if ( s[i]===")" && sta[sta.length-1]!=="(" ||s[i]==="}"&& sta[sta.length-1]!=="{"||s[i]==="]" && sta[sta.length-1]!=="[")
        return false;

    }
    
       if  (sta.length===0)
       return true;

       else
        return false;
          
}




// console.log(validParentheses("(]")



module.exports = validParentheses;