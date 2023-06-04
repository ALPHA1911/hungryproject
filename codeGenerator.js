function generateRandomCombinations(numCombinations) {
    const combinations = [];
    const characters = 'abcdefghijklmnopqrstuvwxyz';
  
    for (let i = 0; i < numCombinations; i++) {
      let combination = '';
      for (let j = 0; j < 4; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        combination += characters[randomIndex];
      }
      combinations.push(combination);
    }
  
    return combinations;
}
  
const numCombinations = 10; // Specify the number of random combinations you want to generate
const randomCombinations = generateRandomCombinations(numCombinations);
console.log(randomCombinations);
  