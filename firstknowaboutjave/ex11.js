document.write('Bài 2: Chuyển Nhiệt Độ.')
document.write('<br/>')
let inputCelsius;

inputCelsius = prompt("Nhập Độ C: ")
let c = parseInt(inputCelsius);
let F = 9/5 * c + 32;
document.write("Độ F là: " + F);
document.write("<br/>");