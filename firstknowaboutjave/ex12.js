

document.write("Bài 3: Tính Diện Tích Hình Tròn.");
document.write("<br>");
let radius;
radius = prompt("Nhập bán kính hình tròn:");
let r = parseFloat(radius);
let area = r * r * 3.14;
document.write("Diện tích hình tròn là: "+ area);
document.write("<br/>");
document.write("Bài 4: Tính Chu Vi Hình Tròn.");
document.write("<br/>");
let perimeter = r * 2 * 3.14;
document.write("Chu vi hình tròn là: " + perimeter);
