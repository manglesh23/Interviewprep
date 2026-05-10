async function fetchData(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      userName: "ajay.k@meraqui.com",
      password: "Ajay@123",
      customerKey: "NTAwMTM5NTAwMDA0",
      FromDate: "2024-09-01",
      ToDate: "2024-09-20",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

 let response=await fetch(
      "https://api.meraqui.com/Integration/api/Integration/GetOfferDtl",
      requestOptions
    );
    let result= await response.json();
    return result
    // console.log(result.dataObject.length)
}

async function getData(){
    let data=await fetchData();
    console.log(data);
}
getData();

// fetchData()