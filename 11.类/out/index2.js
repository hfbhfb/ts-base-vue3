var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var chiness = /** @class */ (function (_super) {
    __extends(chiness, _super);
    function chiness(name) {
        return _super.call(this, name) || this;
        // this.name = name
    }
    chiness.prototype.sayHi = function () {
        console.log('你好');
        console.log(this.name);
    };
    return chiness;
}(Person));
var c1 = new chiness('hfb');
c1.sayHi();
