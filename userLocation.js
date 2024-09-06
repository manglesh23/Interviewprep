async function getUserLocation() {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by your browser.");
    }
  
    // Use the Geolocation API to get the user's position
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  
  (async () => {
    try {
      const position = await getUserLocation();
      console.log("Position:", position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    } catch (error) {
      console.error("Error getting location:", error);
    }
  })();
  