// Create an Array of at least 3 losing messages
var lostmsg = ["Try again!", "Choose again!", "Play again!"];

// Create variables to count wins and losses
var wins = 1;
var losses = 1;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var msg = document.getElementById('message')
var wins = document.getElementById('wins')
var loss = document.getElementById('losses')

// target all .box elements and attach a click event listener to each one using a loop
var allboxes = document.querySelectorAll('.box')
  allboxes.forEach(function(box) {
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
    box.onclick = function (e) {
      var newbox = e.target.textContent

// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
    var winningbox = Math.floor(Math.random() * 3) +1
// This number will represent the winning box

// determine if the box clicked is equal to the random number
    if (newbox === winningbox) {

// if the numbers match, display a winning message by changing the text content of the div#message element
      document.getElementById("message").innerHTML = "You win!";

// if the numbers match, increment wins and display the win count in div#wins
      document.getElementById("wins").innerHTML = "Wins:" + wins
      wins++
    }

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
    else {
      var randomlost = lostmsg[Math.floor(Math.random() * lostmsg.length)];
        document.getElementById("message").innerHTML = randomlost;

// if the numbers don't match, increment losses and display the loss count in div#losses
      document.getElementById("losses").innerHTML = "Losses:" + losses
      losses++
    }
  }
})
