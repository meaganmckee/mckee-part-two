let playerName = prompt("Welcome to GC mini golf! What is your name?")
let holeCount = prompt("Hi, " + playerName + "! Would you like to play 3 or 6 holes?");
let holeNumber = 1;
let total = 0;

for (let i = 0; i < holeCount; i++) {
  let putts = Number( prompt("How many putts for hole " + (holeNumber++) + "?") );
  total += putts;
}

let par = (holeCount *= 3);
if (total > par) {
        console.log("Nice try, " + playerName + "... Your total par was: +" + (total -= par) + ".");
} else if (total < par) {
        console.log("Great job, " + playerName + "! Your total par was: " + (total -= par) + ".");
} else if (total === par) {
        console.log("Good game, " + playerName + ". Your total par was: 0.");
}