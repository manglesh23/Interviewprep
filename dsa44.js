const str="a good example";

const reversestring=(str)=>{
    let getWords= str.split(' ');
    console.log(getWords);
    let i=0;
    let j=getWords.length-1;
    while(i<j){
        let temp=getWords[i];
        getWords[i]=getWords[j];
        getWords[j]=temp;
        i++;
        j--;
    }
    console.log(getWords);
    console.log(getWords.join(' '))
}
reversestring(str);