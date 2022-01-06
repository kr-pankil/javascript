var Demo1 = /** @class */ (function () {
    function Demo1(name, age, intArr) {
        this.firstname = name;
        this.ageOfPerson = age;
        this.Arr = intArr;
    }
    Demo1.prototype.fun = function () {
        return this.firstname + this.ageOfPerson + this.Arr;
    };
    Demo1.prototype.ff = function () {
        var oj = {
            name: "pankil",
            age: 21,
            intArr: [2, 3, 4]
        };
        return oj;
    };
    return Demo1;
}());
var obj1 = new Demo1("pankil", 21, [6, "hello"]);
console.log(obj1.fun());
console.log(obj1.ff());
