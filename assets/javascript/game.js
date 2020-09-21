console.log("Game");

const resetButton = document.querySelector("#reset-button");
const numReset = document.querySelector("#num-resets");
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamOneNumShots = document.querySelector("#teamone-numshots");
const teamOneNumGoals = document.querySelector("#teamone-numgoals");
const teamTwoNumShots = document.querySelector("#teamtwo-numshots");
const teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");

teamOneShootButton.addEventListener("click", function () {
  let shoot = Number(teamOneNumShots.innerHTML) + 1;
  teamOneNumShots.innerHTML = shoot;
  if (Math.random() * 100 < 20) {
    let goals = Number(teamOneNumGoals.innerHTML) + 1;
    teamOneNumGoals.innerHTML = goals;
  }
});
teamTwoShootButton.addEventListener("click", function () {
  let shoot = Number(teamTwoNumShots.innerHTML) + 1;
  teamTwoNumShots.innerHTML = shoot;
  if (Math.random() * 100 < 25) {
    let goals = Number(teamTwoNumGoals.innerHTML) + 1;
    teamTwoNumGoals.innerHTML = goals;
  }
});

resetButton.addEventListener("click", function () {
  let reset = Number(numReset.innerHTML) + 1;
  numReset.innerHTML = reset;
  let shoot = 0;
  teamOneNumShots.innerHTML = 0;
  teamTwoNumShots.innerHTML = 0;
  let goals = 0;
  teamOneNumGoals.innerHTML = 0;
  teamTwoNumGoals.innerHTML = 0;
});
