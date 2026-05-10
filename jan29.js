const states = [
  { name: "Uttar Pradesh" },
  { name: "Maharashtra" },
  { name: "Gujarat" },
  { name: "Rajasthan" },
  { name: "Kerala" },
];

// Sort the array in ascending order based on the state names
states.sort((a, b) => a.name.localeCompare(b.name));

// Find the index of Rajasthan and move it to the top
const rajasthanIndex = states.findIndex((state) => state.name === "Rajasthan");
if (rajasthanIndex > -1) {
  const [rajasthan] = states.splice(rajasthanIndex, 1);
  console.log("splice:-", rajasthan);
  states.unshift(rajasthan);
}

console.log(states);
