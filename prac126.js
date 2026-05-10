async function fetchData() {
  return [1, 2, 3, 4];
}

async function fetchUser() {
 return new Promise((resolve)=>{
    setTimeout(() => {
        resolve(["manglsh", "shashank"]);
      }, 5000);

 })   
  
}
async function handleData() {
  try {
    // const [data, user] = await Promise.all([fetchData(), fetchUser()]);
    // console.log(data, user);
    let user= await fetchUser();
    console.log(user);

    let data= await fetchData();
    console.log(data);
   

  } catch (e) {

    return {
      error: true,
      details: e,
    };
  }
}

handleData();
