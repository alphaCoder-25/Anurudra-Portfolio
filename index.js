var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");
console.log("Welcome " + userName);

function play(question, answer){
var userAnswer = readlineSync.question(question);

if (userAnswer === answer){
  console.log("Right!");
  score = score + 1;
}else{
  console.log("Wrong!")
}
console.log("Your current score is ", score);
console.log("-----------");
}

var questions = [{
  question: "Do you know me? ",
  answer: "yes"
},{
  question: "Where do i live? ",
  answer: "vidisha"
},{
  question: "What would be my favourite indor game? ",
  answer: "chess"
},{
  question: "What is my favourite subject? ",
  answer: "maths"
}];

for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("Your Final Score in my Quiz Game is: " + score)