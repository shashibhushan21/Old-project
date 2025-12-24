
// const employee = {
//     calcTax (){
//         return this.salary * 0.2;
//         console.log("Tax rate is 10%")
//         console.log(this.calcTax);
//     },
   

// };


// const shashi1 = {
//     salary: 80,
//     calcTax: function() {
//         return this.salary * 0.2;
//         console.log("tax rate 20%")
//     }

    
// };

// console.log(shashi1.calcTax
// );

// const shashi2 = {
//     salary: 80,
    
// };

// const shash3 = {
//     salary: 80,
    
// };

// const shashi4 = {
//     salary: 80,
    
// };

// const shashi5 = {
//     salary: 80,
    
// };
// console.log(shashi1)



// shashi1__proto__ = employee;
// shashi2__proto__ = employee;
// shashi3__proto__ = employee;
// shashi4__proto__ = employee;
// shashi5__proto__ = employee;


// console.log(employee);


 




///classes in Js
/// class is a program-code template for creating object.
///those object will have some stste (variables)& some behaviour (functions) inside it.
 

// class Myclass{
//     constructor(){}
//     myMethod(){}
// }


//let myObj = new MyClass();



// class ToyotaCar{
//     start(){
//         console.log("Car started");
//     }

//     stop(){
//         console.log("Car Stoped");
//         console.log(ToyotaCar);
//     }

//     setBrand(brand){
//         this.brand = brand;
//     }
// }


// let fortuner = new  ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus ");




//     constructor  START NOW



// class ToyotaCar{
//     constructor(brand, mileage){
//         console.log("creating  a new carObj");
//         this.mileage = mileage;
//         this.brand = brand;
//     }

//     start(){
//         console.log("Car started");
//     }

//     stop(){
//         console.log("Car Stoped");
//         console.log(ToyotaCar);
//     }

// }


// let fortuner = new  ToyotaCar("Fortuner",10); ///constructor
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus",12);  /// constructor
// console.log(lexus)








///Inheritance in js   Theory......
/// Inheritance is passing down properties & method from parent calss to child class

// class parent{
//     constructor(){

//     }
// }

// class child extends parent{
//     constructor(){

//     }
// }

///If Child & Parent have some method child's method will used [method Overrding]
///EXAMPLE


// class Person{
//     constructor(){
//         this.species =  "Human";

//     }

//     eat(){
//        console.log("eat") 
//     }

//     sleep(){
//         console.log("sleep");
//     }


    
// }

// class Engineer  extends Person{

//     work(){
//         console.log("solve problem, build somthing")
//     }
    
// }


// class Doctor  extends Person{

//     work(){
//         console.log("treat patients ")
//     }
    
// }








///Super Keyword
///the super keyword is used to call the constractor of its parent
///class to access the parent's properties and method

// super(args) ///calls Parent Constructor

//super.parentMethod(args);





class Person{
    constructor(){
        console.log("enter parent constructor");

        this.species =  "Human";

    }

    eat(){
       console.log("eat") 
    }

}

class Engineer  extends Person{

    constructor(branch){

        console.log("enter childe constructor");

        super(); // calls the parent class constructor

        this.branch  = branch;

        console.log("enter exit constructor");


    }

    work(){
        console.log("solve problem, build somthing")
    }
    
}

let eng0bj = new  Engineer("chemical Engineer");





