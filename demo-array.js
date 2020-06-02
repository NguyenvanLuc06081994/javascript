let arr = [1,3,4];

function insertFirst(value) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = value;
}
insertFirst(10);
arr.splice(2,0,47,80);
arr.reverse();
console.log(arr);
