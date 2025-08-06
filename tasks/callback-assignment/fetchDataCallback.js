// fetchDataWithCallback with error handling
function fetchDataWithCallback(callback) {
  setTimeout(function() {
    try {
      // Simulate error condition
      let error = Math.random() > 0.5; // 50% chance of error

      if (error) {
        throw new Error("Fetch failed"); // simulate failure
      }

      // On success, call the callback with data
      callback("Data fetched");
    } catch (err) {
      console.error("Error:", err.message);
    }
  }, 2000);
}

// Usage
fetchDataWithCallback(function(result) {
  console.log(result);
});
