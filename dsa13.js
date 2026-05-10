const str="aaabcdcecf";

const firstNonrepeat=(str)=>{
    let i=0;
    while(i<str.length){
        if(!str.slice(i+1,str.length).includes(str[i])){
            console.log(str[i]);
        }
        i++;
    }
}
firstNonrepeat(str);