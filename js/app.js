function add(x, y){
    return x + y;
}
    
function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

var first = 0;
var second = 0;

var operand = "";


document.getElementById("enter1").onclick = function (){
    first = parseFloat(document.getElementById("firstNumber").value);
}

document.getElementById("enter2").onclick = function (){
    second = parseFloat(document.getElementById("secondNumber").value);
}

document.getElementById("adding").onclick = function (){
    operand = document.getElementById("adding").value;
}

document.getElementById("subtracting").onclick = function (){
    operand = document.getElementById("subtracting").value;
}

document.getElementById("multiplying").onclick = function (){
    operand = document.getElementById("multiplying").value;
}

document.getElementById("dividing").onclick = function (){
    operand = document.getElementById("dividing").value;
}

document.getElementById("equals").onclick = function(){
    if (operand === "+"){
        result = add(first,second);
} else if (operand ==="-"){
 result = subtract(first,second);
} else if (operand === "*"){
  result = multiply(first,second);
} else if (operand === "/"){
  result = divide(first,second)
}
//console.log(result);
document.getElementById("result").innerHTML=parseFloat(result);    
}

document.getElementById("clear").onclick = function (){
    document.getElementById("secondNumber").value = '';
     document.getElementById("firstNumber").value = '';
    document.getElementById("result").innerHTML='';
}

