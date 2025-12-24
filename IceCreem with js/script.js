

// -------callback hell-------
let stocks = {
   Fruits : ["Apple", "Banana", "Cherry", "Apple"],
   Vegetables : ["Carrot", "Potato", "Onion", "Potato"],
   Grains : ["Wheat", "Rice", "Barley", "Wheat"],
   liquid: ["Water", "Milk", "Juice", "Water"],
   toppings : ["chocolate", 'peanuts',"Ice Creem"],
}

// let order = (Fruits_name, call_production)=>{

//    setTimeout(()=>{

//     console.log(`${stocks.Fruits[Fruits_name]} was selected`);
//     // call_production();
//    }, 2000);

//    call_production();
// }


// let production = ()=>{

//     setTimeout(()=>{
//         console.log("Production has started");
//         setTimeout(()=>{
//             console.log("First Production has finished");
//             console.log("OtherProduction has started")

//             setTimeout(()=>{
//                 console.log(`${stocks.Vegetables[3]} and ${stocks.liquid[2]}was added`);
//                 console.log("second Production has finished");
//                 console.log("OtherProduction has started")

//                 setTimeout(()=>{
//                     console.log("the machine was started");

//                     setTimeout(()=>{
//                         console.log(`${stocks.Grains[1]} was selected`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was placed on `);

//                             setTimeout(()=>{
//                                 console.log(`${stocks.toppings[2]} was selected`)
//                                 console.log(" And after serve ice creem");
//                                 console.log("THANK YOU FOR ORDERING");
//                             },2000)
//                         },3000);
//                     },2000);
//                 },1000)
//             },1000);
//         },2000);
//     },0);
// }

// order(0, production)






/// -------callback-------
// let order = (call_production)=>{
//     console.log("Oder placed, Plese call production");
//     call_production();
// };

// let production = ()=>{
//     console.log("Order Recived, Production started");
// };

// order(production);







////------------Promises-------------



// let is_shop_open = true; // let's assume is_shop_open = false; then after else statement are run..

// let order = (time, work)=>{

//     return new Promise((resolve, reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)

//         }

//         else{
//             reject(console.log("Sorry.. Our shop is closed"))
//         }
//     })
// }
// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//     return order(0, ()=>{
//         console.log('Production has Started')
//     })
// })


// .then(()=>{
//     return order(2000, ()=>{
//         console.log('Production has finished Fruit Was Chopped')
//     });
// })


// .then(()=>{
//     return order(1000, ()=>{
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`)
//     })
// })


// .then(()=>{
//     return order(1000, ()=>{
//         console.log('start the machine')
//     })
// })


// .then(()=>{
//     return order (2000,()=>{
//         console.log(`${stocks.Vegetables[1]} was selected`)
//     })
// })


// .then(()=>{
//     return order (3000, ()=>{
//         console.log(`${stocks.toppings[0]} was slected`)
//     })
// })



// .then(()=>{
//     return order(1000, ()=>{
//         console.log('ice Creem was Served')
//     })
// })



// .then(()=>{
//     return order (1000,()=>{
//         console.log("THANK YOU SO MUCH FOR ORDERING")
//     })
// })



// .catch(()=>{
//     console.log('Customer left')
// })


// .finally(()=>{
//     console.log("Day End, Shop is Closed")
// })







////----Async---------


// async function order() {
//     try{
//         await abc;
//     }
//     catch(error){console.log("abc is dosent exist", error)}

//     finally{
//         console.log("Run code anyways")
//     }
// }

// order()
// .then(()=>{
//     console.log("catch hanndaling")
// })







////-------------Await----------------



// let is_shop_open = true;

// let toppings_choice = () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(
//                 console.log("Which topping would you love?")
//             )
//         },4000);
//     });
// };

// async function kitchen () {
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice()

//     console.log("D")
//     console.log("E")
//     console.log("F")
// }


// kitchen()

// console.log("doing the dishes ");
// console.log("Cleaning the table");
// console.log("Taking other orders");




//// ------------Time Function--------------


let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
           setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shpo is closed"));
        }
    })
}

async function kitchen (){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[2]} was selected`);


        await time(0)
        console.log("start the production");


        await time(2000)
        console.log("cut the fruit");


        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added to the mix`);


        await time(1000)
        console.log("start the mechine");


        await time(2000)
        console.log(`${stocks.Vegetables[2]} and ${stocks.Vegetables[1]} was selected`);



        await time(2000)
        console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} was is selected`);



        await time(2000)
        console.log("serve ice cream");



    }
    catch(error){
        console.log("custmore left",error);
    }
    finally{
        console.log("day ended, shop is closed");
    }
}

kitchen();






// document.addEventListener('DOMContentLoaded', () => {
//     const firstItem = document.getElementById('first');
//     const secondItem = document.getElementById('second');
//     const thirdItem = document.getElementById('third');

//     firstItem.addEventListener('hover', () => {
//         firstItem.style.fontSize = '1.5rem'; // Increase font size
//     });

//     secondItem.addEventListener('click', () => {
//         secondItem.style.fontSize = '0.8rem'; // Decrease font size
//     });

//     thirdItem.addEventListener('click', () => {
//         thirdItem.style.fontSize = '1.3rem'; // Set to a specific size
//     });
// });