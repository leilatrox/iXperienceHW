var dig1 = 0;
var dig2 = 1;
console.log(dig2);
function fibo() {
    let temp = 0;
    for(let i = 0; i < 9; i++) {
        temp = dig2;
        dig2 = dig1 + dig2;
        dig1 = temp;
        console.log(dig2);
    }
}

fibo();
