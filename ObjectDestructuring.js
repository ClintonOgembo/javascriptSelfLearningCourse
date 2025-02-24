// Destructuring : shorter way to extract values from an object into variables.

// example without destructuring.
const player = {
    name: "Clinton",
    team: "MSFC",
    position: "Striker"
};

const myPlayer = player.name;
console.log(myPlayer);

// example with destructuring
const {name, team, position} = player;
console.log(name, team, position);

// Default Values in Destructuring
// If a property doesn’t exist, you can set a default value:
const { goals = 8 } = player; 
console.log(goals); 
