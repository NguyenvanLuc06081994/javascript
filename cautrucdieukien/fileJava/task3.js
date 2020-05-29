function checkNumber() {
    let number = +document.getElementById('number3').value;
    if (number > 0){
        document.getElementById('display3').innerHTML = "Số lớn hơn 0";
    }else if (number < 0){
        document.getElementById('display3').innerHTML = "Số nhỏ hơn 0";
    }else{
        alert("Nhập số khác 0");
    }
}