'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Setup constructor to take name and age(default 0)
// getDescription - {Name} is {xx} year(s) old.

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting(name) {
            return 'Hi! I am ' + this.name;
        }
    }, {
        key: 'getDescription',
        value: function getDescription(string) {
            return this.name + ' is ' + this.age + ' year(s) old!';
        }
    }]);

    return Person;
}();

var me = new Person('Mike Hanks', 30);
console.log(me.getDescription());

var other = new Person('Jordan Hanks', 34);
console.log(other.getDescription());

var anonymous = new Person();
console.log(anonymous.getDescription());
