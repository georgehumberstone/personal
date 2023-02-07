/*The code in this file has been written By George Humberstone*/
"use strict";
/*This scales my drawings as I will use these functions for everything that I draw*/
function scaleX(x){return x*canvas.width;}
function scaleY(y){return y*canvas.height;}
/*When window size changes it will adjust the canvas height and width*/
/* Also resets the drawing to inital data display*/
function windowChanged(){
    let w=window.innerWidth;
    let h=window.innerHeight;
    canvas.width=w-50;
    canvas.height=h-150;
    drawBarGraph("rgb(0,255,0)","rgb(255,0,0)","rgb(0,0,255)");
}
/*Clears the canvas of all drawing, useful when switching colour or visualisations*/
function clearCanvas(context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
/*These functions will work together to draw my bar chart*/
/*draws the bars for the phone data*/
function drawPhoneBars(phoneCol){
    /*decides starting y co cordinate*/
    let phoneArray=[0.63,0.72,0.81,0.63,0.72,0.63,0.72];
    context.beginPath();
    /*gets colour from user choice*/
      context.fillStyle =phoneCol;
      let initialPx=0.07;
      for( var i=0;i<7;i++){
        context.rect(scaleX(initialPx),scaleY(phoneArray[i]),scaleX(0.03),scaleY(0.9-phoneArray[i]));
        initialPx=initialPx*100;
        initialPx=initialPx+12;
        initialPx=initialPx/100;
      }
      context.fill();
    
}
/*function is similar to one above but draws the uni work bars instead*/
function drawWorkBars(workCol){
    let workArray=[0.09,0.09,0.18,0.27,0.18,0.18,0.18];
    context.fillStyle =workCol;
    let initialWx=0.1
    context.beginPath();
      for ( var i=0;i<7;i++){
        context.rect(scaleX(initialWx),scaleY(workArray[i]),scaleX(0.03),scaleY(0.9-workArray[i]));
        initialWx=initialWx*100;
        initialWx=initialWx+12;
        initialWx=initialWx/100;
      }
      context.fill();
      

}
/*function is similar to one above but draws the tv time bars instead*/
function drawTvBars(tvCol){
    let tvArray=[0.72,0.81,0.63,0.63,0.54,0.63,0.54];
    context.fillStyle =tvCol;
    let initialWx=0.13
    context.beginPath();
      for ( var i=0;i<7;i++){
        context.rect(scaleX(initialWx),scaleY(tvArray[i]),scaleX(0.03),scaleY(0.9-tvArray[i]));
        initialWx=initialWx*100;
        initialWx=initialWx+12;
        initialWx=initialWx/100;
      }
      context.fill();

}
/*These functions display the keys of the colours of the bars*/
function drawPhoneKey(phoneCol){
    context.fillStyle =phoneCol;
    context.beginPath();
      context.fillText("Phone",scaleX(0.1),scaleY(0.97));
}
function drawWorkKey(workCol){
    context.fillStyle =workCol;
    context.beginPath();
      context.fillText("Uni Work",scaleX(0.3),scaleY(0.97));
}
function drawTvKey(tvCol){
    context.fillStyle =tvCol;
    context.beginPath();
      context.fillText("Watching Tv",scaleX(0.5),scaleY(0.97));
}

/* Main function for drawing the bar chart as a whole*/
function drawBarGraph(phoneCol,workCol,tvCol){
    clearCanvas(context); //clear canvas of previous display
    drawPhoneKey(phoneCol);
    drawWorkKey(workCol);
    drawTvKey(tvCol);
    context.strokeStyle= "rgb(255,255,255)";
    context.lineWidth="1";
    context.beginPath();
      /*Draw the x and y axis*/
      context.moveTo(scaleX(0.05),0);
      context.lineTo(scaleX(0.05),scaleY(0.9));
      context.moveTo(scaleX(0.05),scaleY(0.9));
      context.lineTo(scaleX(0.9),scaleY(0.9))
      context.stroke();
      context.fillStyle ="rgb(255,255,255)";
      context.font="2em"
      /*title of bar chart*/
      context.fillText("Hours spent a week in my life",scaleX(0.3),scaleY(0.05));
      /* draws the required labels of my barchart*/
      context.fillText("9",scaleX(0.02),scaleY(0.09));
      context.fillText("8",scaleX(0.02),scaleY(0.18));
      context.fillText("7",scaleX(0.02),scaleY(0.27));
      context.fillText("6",scaleX(0.02),scaleY(0.36));
      context.fillText("5",scaleX(0.02),scaleY(0.45));
      context.fillText("4",scaleX(0.02),scaleY(0.54));
      context.fillText("3",scaleX(0.02),scaleY(0.63));
      context.fillText("2",scaleX(0.02),scaleY(0.72));
      context.fillText("1",scaleX(0.02),scaleY(0.81));
      context.fillText("0",scaleX(0.02),scaleY(0.9));
      context.fillText("Mon",scaleX(0.10),scaleY(0.93));
      context.fillText("Tue",scaleX(0.22),scaleY(0.93));
      context.fillText("Wed",scaleX(0.34),scaleY(0.93));
      context.fillText("Thu",scaleX(0.46),scaleY(0.93));
      context.fillText("Fri",scaleX(0.58),scaleY(0.93));
      context.fillText("Sat",scaleX(0.70),scaleY(0.93));
      context.fillText("Sun",scaleX(0.82),scaleY(0.93));
    /*invoke functions that display the bars*/
    drawPhoneBars(phoneCol);
    drawWorkBars(workCol);
    drawTvBars(tvCol);
}



/* clicking the resize button has same function as actually resizing the window*/
var resizeButton=document.getElementById("resize-button");
resizeButton.addEventListener("click",windowChanged,false);

var canvas =document.getElementById("my-data");
var context= canvas.getContext("2d"); /* actually gets whats on the canvas*/
window.addEventListener("resize",windowChanged,false);
/* The following buttons call the function to draw a bar chart but with their colour selection*/
var coloursOne=document.getElementById("setone");
coloursOne.addEventListener("click",function() { drawBarGraph( "rgb(0,255,0)","rgb(255,0,0)","rgb(0,0,255)") });
var coloursTwo=document.getElementById("settwo");
coloursTwo.addEventListener("click",function() { drawBarGraph( "rgb(100,100,40)","rgb(255,255,0)","rgb(200,0,200)") });
var coloursThree=document.getElementById("setthree");
coloursThree.addEventListener("click",function() { drawBarGraph( "rgb(255,255,255)","rgb(0,100,100)","rgb(255,100,100)") });
/*Initial display*/
drawBarGraph( "rgb(0,255,0)","rgb(255,0,0)","rgb(0,0,255)");



