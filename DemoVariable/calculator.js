
function calculator(a, b, op) {
    let result = 0;
    if (a === '' || b === '') {
        console.log("Vui long nhap so a va b de thuc hien phep tinh");
    } else {
        switch (op) {
            case "+":
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = a*b;
                break;
            case '/':
                if(b === 0){
                    console.log("Khong the chia cho 0");
                }else {
                    result = a/b;
                }
                break;
        }
    }
    document.getElementById("result").innerHTML = result;
}

function cal(op){
    let a = +document.getElementById('number1').value;
    let b = Number(document.getElementById('number2').value);
    calculator(a,b,op);
}

//test
calculator(3,4,"+");//7
calculator(3,4,"*");//12
calculator(3,4,"-");//-1
calculator(2,4,"/");//0.5
calculator(2,0,"/");//Khong the chia cho 0