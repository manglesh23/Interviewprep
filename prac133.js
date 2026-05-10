function fetchData() {
  return new Promise((resolve, reject) => {
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

    fetch(
      "https://api.meraqui.com/Integration/api/Integration/GetOfferDtl",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw error("error");
        }
        let result = response.json();
        resolve(result);
      })
      .catch((error) => reject(error));
  });
}

fetchData()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
