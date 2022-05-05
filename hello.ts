function age(constructor:Function){
    console.log('in decerotator fun', constructor);
    constructor.prototype.age = 26;
}

@age
class Greeting{ 
    name: string;
    message: string;
    constructor(name: string, message: string){
        this.name = name;
        this.message = message;
    }
    sayhello(){

        console.log(`${this.name} ${this.message} ${this.age}`);

    }}
    console.log(new Greeting('john','welcome').sayhello());





