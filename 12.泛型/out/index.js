// tsc index.ts --outDir out
var GenAny = /** @class */ (function () {
    function GenAny() {
    }
    return GenAny;
}());
var myNum = new GenAny();
myNum.value = 1;
myNum.add = function (x, y) {
    return x + y;
};
myNum.add(3, 4);
var myStr = new GenAny();
myStr.value = "111";
myStr.add = function (x, y) {
    return x + y;
};
