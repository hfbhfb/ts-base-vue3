// tsc index.ts --outDir out
function sum(a, b) {
    return a + b;
}
// sum(1)
sum(1, 2);
var x = function (a, b) {
    console.log('你好');
};
x(1, 2);
var y = function (x, b) { return x * b; };
console.log(y(5, 6));
var mySearch = function (keyword, type) {
    return "111";
};
mySearch("a", "b");
