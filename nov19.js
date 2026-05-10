let a=[2,1,3,5,4,6,7];

const getLast=(a)=>{
    // let element= a.shift();
    // a.push(element);
    // console.log(a);
    // let temp=a[1];
    // a[1]=a[0];
    // a[0]=temp;
    // let ele= a.shift();
    // a.push(ele);
    // console.log(a);
    let map= new Map();
    for(let i=0;i<a.length;i++){
        if(a[0]<a[1]){
            let ele= a.shift();
            a.push(ele);
            map.set(a[1],(map.get(a[1])||0)+1);
            if(map.get(a[1])===2){
                console.log(a[1]);
                return ;
            }
        }
        if(a[0]>a[1]){
            let temp= a[1];
            a[1]=a[0];
            a[0]=temp;
            let ele= a.shift();
            a.push(ele);
            map.set(a[0],(map.get(a[0])||0)+1);
            if(map.get(a[0])===2){
                console.log("winner:-",a[0]);
                return;
            }
        }
    }
}
getLast(a);