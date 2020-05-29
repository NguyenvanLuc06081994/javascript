

function division() {
    let a = +document.getElementById('number1').value;
    let b = +document.getElementById('number2').value;
    let reSult = a % b;
    if (reSult === 0){
        document.getElementById('display1').innerHTML = "a chia hết cho b";
    }else{
        document.getElementById('display1').innerHTML = "a không chia hết cho b";
    }
}