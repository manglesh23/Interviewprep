let a=[1,3,4,6];
let b=[2,4,6,7,8];
let c=[1,4,6,9,8];

// const findcommon=(a,b,c)=>{
//     for(let num of a){
//         let findeleB= b.findIndex(v=>v===num);
//         let findeleC= c.findIndex(v=>v===num);

//         if(findeleB!=-1 && findeleC!=-1 ){
//             console.log("common in all three:-",num);
//         }
//     }
// }
const findcommon=(a,b,c)=>{
    let i=0;
    let j=0;
    let k=0;
    let common=[];
    while(i<a.length && j< b.length && k< c.length){
        if(a[i]===b[j] && b[j]===c[k] ){
           common.push(a[i]);
            i++;
            j++;
            k++
        }else if(a[i]<b[j]){
            i++;
        }else if(b[j]<c[k]){
            j++
        }else{
            k++
        }
    }
    console.log(common);
}

findcommon(a,b,c);