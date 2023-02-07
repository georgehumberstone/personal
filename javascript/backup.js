"use strict";
function scaleX(x){return x*canvas.width;}
function scaleY(y){return y*canvas.height;}
function windowChanged(){
    let w=window.innerWidth;
    let h=window.innerHeight;
    canvas.width=w-50;
    canvas.height=h-150;
    drawBarGraph();
}
function clearCanvas(context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

function drawPhoneBars(phoneCol){
    let phoneArray=[0.63,0.72,0.81,0.63,0.72,0.63,0.72];
    context.beginPath();
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


function drawBarGraph(phoneCol,workCol,tvCol){
    clearCanvas(context);
    
    context.strokeStyle= "rgb(255,255,255)";
    context.fillStyle ="rgb(0,0,255)";
    context.lineWidth="1";
    context.beginPath();
      context.moveTo(scaleX(0.05),0);
      context.lineTo(scaleX(0.05),scaleY(0.9));
      context.moveTo(scaleX(0.05),scaleY(0.9));
      context.lineTo(scaleX(0.9),scaleY(0.9))
      context.stroke();
      
      context.fillStyle ="rgb(255,255,255)";
      context.font="2em"
      context.fillText("Hours spent a week in my life",scaleX(0.3),scaleY(0.05));
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
    drawPhoneBars(phoneCol);
    drawWorkBars(workCol);
    drawTvBars(tvCol);
}




var resizeButton=document.getElementById("resize-button");
resizeButton.addEventListener("click",windowChanged,false);

var canvas =document.getElementById("my-data");
var context= canvas.getContext("2d");
window.addEventListener("resize",windowChanged,false);
var coloursOne=document.getElementById("setone");
coloursOne.addEventListener("click",function() { drawBarGraph( "rgb(0,255,0)","rgb(255,0,0)","rgb(0,0,255)") });
var coloursTwo=document.getElementById("settwo");
coloursTwo.addEventListener("click",function() { drawBarGraph( "rgb(100,100,40)","rgb(255,255,0)","rgb(200,0,200)") });
var coloursThree=document.getElementById("setthree");
coloursThree.addEventListener("click",function() { drawBarGraph( "rgb(255,255,255)","rgb(0,100,100)","rgb(255,100,100)") });
