function kiemtrabaso() {
    let a = +document.getElementById("number4").value;
    let b = +document.getElementById("number5").value;
    let c = +document.getElementById("number6").value;
    let maxnumber = a;
    if (maxnumber < b) {
        maxnumber = b;
        if (maxnumber < c) {
            maxnumber = c;
        }
    } else if (maxnumber < c){
        maxnumber =c;
    }
    document.getElementById('display4').innerHTML = maxnumber;
}

