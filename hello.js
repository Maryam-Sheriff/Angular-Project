"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function age(constructor) {
    console.log('in decerotator fun', constructor);
    constructor.prototype.age = 26;
}
let Greeting = class Greeting {
    constructor(name, message) {
        this.name = name;
        this.message = message;
    }
    sayhello() {
        console.log(`${this.name} ${this.message} ${this.age}`);
    }
};
Greeting = __decorate([
    age
], Greeting);
console.log(new Greeting('john', 'welcome').sayhello());
