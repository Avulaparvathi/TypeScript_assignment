"use strict";
exports.__esModule = true;
var person_model_1 = require("./person.model");
function add(val1, val2) {
    return val1 + val2;
}
add(1, 10);
function sayHello(person) {
    return "Say Hello to My Little Friend, ".concat(person.firstName, "!");
}
sayHello(new person_model_1.Person({ firstName: 'Dylan' }));
