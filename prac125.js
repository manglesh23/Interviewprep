async function fetchData(){
    return true;
}

async function processData(){
    return false;
}

async function saveData(){
    console.log("data saved");
    return true;
}

async function handleData() {
    try {
      const response = await fetchData();
      console.log("response:-",response)
      const result = await processData(response);
      console.log("resilt",result);
      await saveData(result);
      console.log("Data saved");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  handleData();