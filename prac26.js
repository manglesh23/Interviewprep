const str='aaabbaaac';

const paliandrome=(str)=>{
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            console.log("not");
            return;
        }
        i++;
        j--;
    }
    console.log("hai");
}

paliandrome(str);