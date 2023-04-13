function calculateHanoi(disksNumber, turnsSpeed ) {
  let turns = 0 
  function move(disksNumber, fromRod, toRod, withRod) {
  if (disksNumber >=1) {
    move(disksNumber - 1, fromRod, withRod, toRod);
    turns++
    move(disksNumber - 1, withRod, toRod, fromRod);
  }
}
move(disksNumber, "x", "y", "z");

let temp = String(turns)

return {turns, seconds: Math.floor( temp / (turnsSpeed / 3600))}

}

console.log( calculateHanoi(5, 4308))