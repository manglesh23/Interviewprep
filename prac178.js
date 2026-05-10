const str="Was it a car or a cat I saw?";

const check=(str)=>{
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Step 2: Check if the cleaned string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

console.log(check(str));