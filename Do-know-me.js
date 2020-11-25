var readLineSync = require("readline-sync")

var username = readLineSync.question("Enter your name : ")
console.log("Hello " + username + "! Welcome to who knows me well quiz")
score = 0

function play(ques,ans) {
  var userans = readLineSync.question(ques)

  if (userans.toUpperCase()=== ans.toUpperCase()) {
    console.log("You are right !!")
    console.log("--------------")
    score = score +2
  }else {
    console.log("Oops! you are wrong!")
  }

}
var highscores=[ scoreone={
   name : "Mohammad",
   score : 8
 },
 scoretwo ={
   name: "Rajesh",
   score: 5
 }
 ]

 
 
 questions =[questionone = {
  question : "What is my favourite color? ",
  answer : "Grey"
},
 questiontwo = {
   question : "who is my favourite actor? ",
   answer : "willsmith"
 },
 questionthree = {
   question : "Where do I live?  ",
   answer : "coimbatore"
 },
 questionfour = {
   question : "what is my favourite car? ",
   answer : "Benz"
 },
  questionfour = {
   question : "What is my favourite TV show? ",
   answer : "Prison break"
 }
 ]

 for (i=0;i<questions.length;i++){
   play(questions[i].question,questions[i].answer)
 }
 
 console.log("Your score is ",score)
 for (i=0; i<highscores.length;i++)
 {
   if(score > highscores[i].score){
     console.log("Hurray! You have beaten the highscore.")
     console.log(" ____Send me a screenshot___ so that I can update on the leaderboard")
     break
   }
 }
 
 console.log ("Thank you for spending your time !!!")