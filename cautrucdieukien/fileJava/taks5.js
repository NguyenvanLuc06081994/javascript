


function kiemtradiemso() {
    let diemKiemTra = +document.getElementById('number7').value;
    let diemGiuaKi = +document.getElementById('number8').value;
    let diemCuoiKi = +document.getElementById('number9').value;
    let display = document.getElementById("display5");
    let diemTrungBinh = (diemKiemTra + diemGiuaKi + diemCuoiKi)/3;
    if (diemTrungBinh >=8 && diemTrungBinh <= 10){
        display.innerHTML = "Tốt Nghiệp Loại A";
    }else if ( diemTrungBinh >=5 && diemTrungBinh <8){
        display.innerHTML = "Tót Nghiệp Loại B";
    }else if(diemTrungBinh > 0 && diemTrungBinh <5){
        display.innerHTML = "Học Lại";
    }else{
        display.innerHTML = "Bạn Đã Nhập Sai Điểm!"
    }
}