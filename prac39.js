const str="aaabaaa";

const checkpailandrome=(str)=>{
    let i=0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]){
            console.log("NOt");
            return;
        }
        i++;
        j--;
    }
    console.log("hai");
}

checkpailandrome(str);