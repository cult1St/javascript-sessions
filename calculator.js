
var answer = document.getElementById("answer");



function add(){
    
var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
input1 = parseInt(input1);
input2 = parseInt(input2);
    //console.log(input1, input2)
    var added = Number(input1)  + Number(input2); 
    answer.innerHTML = added;
}

function subtract(){
    
var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
input1 = parseInt(input1);
input2 = parseInt(input2);
    var subtracted = (Number(input1) - Number(input2));
    answer.innerHTML = subtracted;
}


function multiply(){
    
var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
input1 = parseInt(input1);
input2 = parseInt(input2);
    var multiplied = Number(input1)  * Number(input2);
    answer.innerHTML = multiplied;
}


function divide(){
    
var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
input1 = parseInt(input1);
input2 = parseInt(input2);
    var divided = Number(input1) / Number(input2);
    answer.innerHTML = divided;
}

function modulus(){
    
var input1 = document.getElementById("input1").value;
var input2 = document.getElementById("input2").value;
input1 = parseInt(input1);
input2 = parseInt(input2);
    var modulusv = Number(input1) % Number(input2);
    answer.innerHTML = modulusv;
}