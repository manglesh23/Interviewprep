const a=['tea','ate','aet','cat','tac','act','pac'];

const makeanagram=(a)=>{
    let map=new Map();

    for(let i=0;i<a.length;i++){
        let sorted= a[i].split('').sort().join('');
       
        if(!map.has(sorted)){
            map.set(sorted,[]);
        }
            map.get(sorted).push(a[i]);
        
    }
   
    console.log(Array.from(map.values()));
}

makeanagram(a);