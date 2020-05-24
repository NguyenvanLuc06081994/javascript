

document.write('Bài 1: Điểm Trung Bình.');
document.write('<br/>');
let p;
let a;
let b;
 p = prompt("Nhập điểm Vật Lý:");
 a = prompt("Nhập Điểm Hóa:");
 b = prompt("Nhập điểm Sinh:");
 let v = parseInt(p);
 let h = parseInt(a);
 let s = parseInt(b);
let m = (v+h+s)/3;
    document.write('Điểm trung bình là : ' + m);
    document.write('<br/>');
document.write('Bài 2: Chuyển Nhiệt Độ.')
document.write('<br/>')
let inputCelsius;

    inputCelsius = prompt("Nhập Độ C: ")
 let c = parseInt(inputCelsius);
let F = 9/5 * c + 32;
document.write("Độ F là: " + F);
document.write("<br/>");
document.write("Bài 3: Tính Diện Tích Hình Tròn.");
document.write("<br>");
let radius;
    radius = prompt("Nhập bán kính hình tròn:");
let r = parseInt(radius);
let area = r * r * 3.14;
document.write("Diện tích hình tròn là: "+ area);
document.write("<br/>");
document.write("Bài 4: Tính Chu Vi Hình Tròn.");
document.write("<br/>");
let perimeter = r * 2 * 3.14;
document.write("Chu vi hình tròn là: " + perimeter);
