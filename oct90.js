let a = [1, 2, 3, 3, 3, 4, 5, 6];
let k = 3;

const getFirstAndLastPosition = (a, k) => {
  let left = 0;
  let right = a.length - 1;

  // while(left<=right){
  //    let mid= Math.floor((left+right)/2);
  //    if(a[mid]===k && a[mid-1]<k){
  //         console.log(mid);
  //        return;
  //    }else if(a[mid]===k && a[mid-1]===k){
  //     right=mid-1;
  //    }else if(a[mid]>k){
  //     right=mid-1;
  //    }else{
  //     left=mid+1
  //    }
  // }
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (a[mid] === k && a[mid + 1] > k) {
      console.log(mid);
      return;
    } else if (a[mid] === k && a[mid + 1] === k) {
      l = mid + 1;
    } else if (a[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
};

getFirstAndLastPosition(a, k);
