/*This code has been written by George Humberstone for the quiz page of his website*/
"use strict";
/*Gets the text content of the relevant p and changes it to display whether the user got the answer correct or incorrect*/
function display(isCorrect,theText){
    if (isCorrect){
      theText.textContent='Correct Answer!';
    }
    else{
      theText.textContent='Incorrect Answer!';
    }

}

/*These functions get the relevant details of if the correct answer has been selected and gets the relevant location of text to change 
to display the result*/
function questionOne() {
  /*store true or false as to whether correct answer is selected*/
  var isCorrect = document.getElementById('COM1001Q1').checked;
  /* gets relevant display location*/
  var theText=document.querySelector('#q1-answer-show');
  display(isCorrect,theText);
}

function questionTwo() {
  var isCorrect = document.getElementById('COM1002Q2').checked;
  var theText=document.querySelector('#q2-answer-show');
  display(isCorrect,theText);
}

function questionThree() {
  var isCorrect = document.getElementById('COM1005Q3').checked;
  var theText=document.querySelector('#q3-answer-show');
  display(isCorrect,theText);
}

/* Event listeners to see when a button is clicked to call the relevant function.*/
let q1button=document.getElementById('check-one');
q1button.addEventListener("click",questionOne,false);
let q2button=document.getElementById('check-two');
q2button.addEventListener("click",questionTwo,false);
let q3button=document.getElementById('check-three');
q3button.addEventListener("click",questionThree,false);
