// tsc index.ts --outDir out
var arrnum = [1, 2, 34, 5, 5, 5, 5, 5];
var arrstr = ['1kdf', "kdjsf", "中国"];
var arrnum2 = [8, 8, 8, 9];
console.log(arrnum2[1]);
var numarr = [12, 1, 1, 1, 11,];
function sum() {
    var argsaa = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argsaa[_i] = arguments[_i];
    }
    var args = arguments;
    console.log(argsaa[0]);
}
sum(1, 2, 3, 4, 5);
