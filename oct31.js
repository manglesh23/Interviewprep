let a=[2,3,4];
let b=[2,4,5];

const getSum=(a,b)=>{
    let num1=0;
    let num2=0;
    for(let i=0;i<a.length;i++){
        num1= Math.pow(10,i)*a[i]+num1
    }
    console.log(num1)

    for(let i=0;i<b.length;i++){
        num2= Math.pow(10,i)*b[i]+num2
    }
    console.log(num2)
    console.log(num1+num2)
}

getSum(a,b);