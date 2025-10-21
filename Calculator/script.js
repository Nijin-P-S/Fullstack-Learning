function add(){
    let num1 = Number(document.getElementById("num1").innerText);
    let num2 = Number(document.getElementById("num2").innerText);
    console.log(num1 +" "+num2);

    document.getElementById("cal-val").innerText = num1+num2;
    return;
}

function subtract(){
    let num1 = Number(document.getElementById("num1").innerText);
    let num2 = Number(document.getElementById("num2").innerText);
    console.log(num1 +" "+num2);

    document.getElementById("cal-val").innerText = num1-num2;
    return;
}

function divide(){
    let num1 = Number(document.getElementById("num1").innerText);
    let num2 = Number(document.getElementById("num2").innerText);
    console.log(num1 +" "+num2);

    if(num2 === 0){
        document.getElementById("cal-val").innerText = "Cannot divide by zero";
        return;
    }
    document.getElementById("cal-val").innerText = num1/num2;
}

function multiply(){
    let num1 = Number(document.getElementById("num1").innerText);
    let num2 = Number(document.getElementById("num2").innerText);

    document.getElementById("cal-val").innerText = num1*num2;
    return;
}