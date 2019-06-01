"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.work = function () { }; // prototype 上的函数
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        console.log(1111);
        this.name = name;
    };
    return Person;
}());
var person = new Person('zhangsan');
person.name = 'lise';
console.log(person);
