var demo;
(function (demo) {
    function vehicle(name, price) {
        return name + price;
    }
    demo.vehicle = vehicle;
})(demo || (demo = {}));
/// <reference path = "./namespace.ts"/>
var v = demo.vehicle("audi", 8998);
console.log(v);
