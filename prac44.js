const a=[1,2,4,3,6,4,5,9,3];

const maxcontain=(a)=>{
    let left=0;
    let right=a.length-1;
    let maxarea=0;
    let i=0;
    let j=0;
    while(left<right){
        let heigh=Math.min(a[left],a[right]);
        let width=right-left;
       
        let area=width*heigh;
        if(area>maxarea){
            maxarea=area;
            i=left;
            j=right;
        }
        if(a[left]<a[right]){
            left++;
        }else{
            right--;
        }
    }
    console.log(maxarea,i,j);
}

maxcontain(a);