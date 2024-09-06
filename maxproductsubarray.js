const a = [2, 3, -2, 4, -1];

const maxproduct = (a) => {
  let maxprod = a[0];
  let minprod = a[0];
  let result = a[0];

  let start=0;
  let end=0;
  let temp=0;

  for (let i = 1; i < a.length; i++) {
      if(a[i]<0){
        [maxprod,minprod]=[minprod,maxprod];
      }

      if(a[i]>maxprod * a[i]){
        maxprod=a[i];
        temp=i
      }else{
        maxprod=maxprod*a[i]
      }

      minprod=Math.min(a[i],minprod*a[i]);

      if(result<maxprod){
        result=maxprod;
        start=temp;
        end=i
      }
  }

  console.log(start,end, result);

};

maxproduct(a);
