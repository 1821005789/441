function calc(func){
    var result = document.getElementById('result');
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    if(isNaN(num1) || isNaN(num2)){
        alert('Please enter the number');
        return false;
    }
    result.value = func(num1,num2);
}
function add(num1,num2){
    return num1+num2;
}

const button = document.querySelector('button');
        
button.onclick = function() {
  let name = prompt('What is your name?');
  alert('Welocme ' + name + '!');
}

//Shelby Shi Yutao
//Assign values to num1 and num2. When one of num1 and num2 is not an integer, 
//you will be prompted to "please enter an integer". When both num1 and num2 are integers, 
//add the two numbers with "add" and the result will be displayed in "result".