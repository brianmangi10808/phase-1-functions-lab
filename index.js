// Code your solution in this file!
let Hq_location =42;
let distance_free = 400;
let max_distance = 2500;

function distanceFromHqInBlocks(streetNumber) {
    //returns the number of blocks given a value
    return Math.abs(streetNumber -Hq_location );
  }
  function distanceFromHqInFeet(streetNumber) {
    return distanceFromHqInBlocks(streetNumber) * 264; // Assuming 1 block = 264 feet
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Assuming 1 block = 264 feet
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= distance_free) {
      return 0; // Free sample
    } else if (distance > distance_free && distance <= 2000) {
      return 0.02 * (distance - distance_free); // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= max_distance) {
      return 25; // $25 for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Error message for distances over 2500 feet
    }
  }
  
  
  // Example usage