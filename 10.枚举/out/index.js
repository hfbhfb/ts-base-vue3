// tsc index.ts --outDir out
var Color;
(function (Color) {
    Color[Color["Red"] = 16711935] = "Red";
    Color[Color["Green"] = 65280] = "Green";
    Color[Color["Blue"] = 255] = "Blue";
})(Color || (Color = {}));
var arr1 = [Color.Blue, Color.Blue, Color.Red];
