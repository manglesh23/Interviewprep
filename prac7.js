const a=[1,4,2,6,5,9,0];

const remove=(a)=>{
    let ele=2;
    for(let i=0;i<a.length;i++){
        if(a[i]===ele){
            while(i<a.length-1)
            {
            a[i]=a[i+1];
            i++;
            }

            
        }
    }
    for(let i=0;i<a.length-1;i++){
        console.log(a[i]);
    }
}

remove(a);