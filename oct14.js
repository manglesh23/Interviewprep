let a=[1,2,3,4,-5,6];

const prifixSum=(a)=>{
        let res=[];
        let currsum=a[0];
        res.push(currsum);

        for(let i=1;i<a.length;i++){
            currsum+=a[i];
            res.push(currsum);
        }
        console.log(res);
}
prifixSum(a);