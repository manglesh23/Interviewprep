async function fetchData(num){
    return num/2;
}

async function fetchUser(value){
    return [value/2];
}

async function getAll(){
    let data= await fetchData(780);
    console.log(data);
    let user= await fetchUser(data);
    console.log(user);
}

getAll();