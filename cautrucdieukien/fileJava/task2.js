function checkAge() {
    let age = +document.getElementById("age").value;
    if (age >= 16 ){
        document.getElementById('display2').innerHTML= "Đủ Điều Kiện Vào Lớp 10";
    }else {
        document.getElementById('display2').innerHTML= "Không Đủ Điều Kiện Vào Lớp 10";
    }
}