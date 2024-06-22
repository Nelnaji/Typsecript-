interface Person{
    name:string;
    age?:number;
    greet(phrase:string):void;
}

// You can implement multiple interfaces, ie : class Person implements Greetable, AnotherInterface {}





let user1: Person;
user1 = {
name: "Nawfal",
// age: 30,
greet(phrase:string){

    console.log(`${phrase} ${this.name} `)
}

};

user1.greet('Hello brother');