// tsc index3.ts --outDir out
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
var LandCar = /** @class */ (function () {
    function LandCar() {
    }
    LandCar.prototype.showLandCarInfo = function () {
        console.log('can run on load');
    };
    return LandCar;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    car.prototype.playMusic = function () {
        console.log('car playMusic');
    };
    car.prototype.open = function () {
        console.log('car open');
    };
    car.prototype.close = function () {
        console.log('car close');
    };
    return car;
}(LandCar));
var car1 = new car();
car1.playMusic();
car1.showLandCarInfo();
car1.open();
car1.close();
