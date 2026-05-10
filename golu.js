let s1="aabbccd";
let s2="aaabbbcccdhj";
const goodPerson=(s1,s2)=>{
    let arrayofs1= s1.split('');
    console.log(arrayofs1);
    let arrayofs2= s2.split('');
    let arrayOfAllChar= new Set([...arrayofs1,...arrayofs2]);
    console.log(arrayOfAllChar);

    let mapOfS1={};
    for(let v of s1){
        if(!mapOfS1[v]){
            mapOfS1[v]=0;
        }
        mapOfS1[v]+=1;
    }
    console.log(mapOfS1);

    let mapOfS2={};
    for(let v of s2){
        if(!mapOfS2[v]){
            mapOfS2[v]=0;
        }
        mapOfS2[v]+=1;
    }
    console.log(mapOfS2);
    let count=0;
    for(let v of arrayOfAllChar){
        if(mapOfS1[v]===2 && mapOfS2[v]===3){
          count++;
        }
    }
    console.log(count)
}

goodPerson(s1,s2)