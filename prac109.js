const s1="abcdefgh";
const s2="defgz";

const checksubstring=(s1,s2)=>{
      for(let i=0;i<s1.length;i++){
        let sub= s1.slice(i,i+s2.length);
        if(sub===s2){
            console.log("sub string");
            return;
        }
      }
      console.log("Not");
}

checksubstring(s1,s2);