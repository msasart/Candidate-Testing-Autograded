const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = ("");
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ('');


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [""];


function askForName() {

  // TODO 1.1b: Ask for candidate's name //
  let name = input.question("What's your name? ")
  candidateName = name;
  return candidateName;
}

function askQuestion() {

  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {

    let userInput = input.question(questions[i]);
    candidateAnswers[i] = userInput;
     
  } 
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  numberOfCorrectAnswers = 0
  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      numberOfCorrectAnswers++
} 
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
console.log(`-------------------------TEST RESULTS---------------------------`)
  for (i = 0; i < questions.length; i++){
    console.log(` ${i+1}) ${questions[i]}
  Correct Answer: ${correctAnswers[i]}
  Your Answer: ${candidateAnswers[i]}
  
  `)
  }
  // ]
grade = (numberOfCorrectAnswers / questions.length * 100);
incorrectAnswers = (questions.length - numberOfCorrectAnswers);


  if (grade >= 80) { 
  console.log (`Congratulations ${candidateName}! You passed the test with a score of ${grade}%. You got ${numberOfCorrectAnswers} out of ${questions.length} correct answers.`)
  

} else if (grade < 80){
  console.log (`Better luck next time, ${candidateName}. You got ${incorrectAnswers} out of ${questions.length} incorrect answers with a total score of ${grade}%, which is not a passing score.`)
}
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};