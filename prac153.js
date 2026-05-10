function longestCommonSubstring(strs) {
    if (!strs.length) return "";
    
    let firstStr = strs[0];
    let longestSubstr = "";

    // Loop over all possible substrings of the first string
    for (let i = 0; i < firstStr.length; i++) {
        for (let j = i + 1; j <= firstStr.length; j++) {
            let substr = firstStr.slice(i, j);
            
            // Check if this substring is in all strings
            if (strs.every(str => str.includes(substr))) {
                // Update longest substring if the current one is longer
                if (substr.length > longestSubstr.length) {
                    longestSubstr = substr;
                }
            }
        }
    }
     console.log(longestSubstr);
    return longestSubstr;
}

const strs = ["flower","low","lower"];
longestCommonSubstring(strs);