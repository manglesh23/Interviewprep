const txt="aabaabaa";
const pat="aaba";

const countAnaOcc=(txt,pat)=>{
    let count=0;
    for(let i=0;i<=txt.length-pat.length;i++){
        let str= txt.substring(i,i+pat.length);
        str=str.split('').sort().join('');
        pat=pat.split('').sort().join('');
        if(str===pat){
            count++;
        }
    }
    console.log(count);
}

countAnaOcc(txt,pat);