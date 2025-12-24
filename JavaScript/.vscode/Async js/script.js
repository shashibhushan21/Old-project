 
//  function hello (){
//     console.log("hello")
//  }

//  setTimeout(hello, 2000); // 2s = 2000ms



///Asynchronous program


// console.log("one");
// console.log("two");

// setTimeout(() =>{
//     console.log("shashi bhushan");
// },2000);

// console.log("three");
// console.log("four");
 



///Callbacks
///A callback is a function passed as an argument to another function..



// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b, sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,sum);



/// 2nd method of Callbacks

// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello,3000);








///Callback Hell


 
// function getData(dataId, getNextData){
//    setTimeout(()=>{
//     console.log("hello",dataId)
//     if(getData){
//         getNextData();
//     }
    
//    },2000);
// }

// ///callBack Hell

// getData(1, ()=>{
//     console.log("getting data 2....");
//     getData(2, ()=>{
//       console.log("getting data 3....");

//         getData(3,()=>{
//            console.log("getting data 4....");

//             getData(4,()=>{
//              console.log("getting data 5....");

//                 getData(5)
//             })
//         })
//     }) 
// });





///Promises

///Promises is for "eventual" completion of task.
///it is an object in Js
/// It is solution of Callback hell

///let Promise = new Promise((resolve,reject)=>{"somthing"})

/// here Function with 2 handlers.. 1st one is resolve,, and 2nd is reject..

///NOTE:- resolve & reject are callback provided by JS..



// let promise = new Promise((resolve,reject)=>{
//     console.log("I m Promise");
//     // resolve("success");
//     reject("Somthing went Wrong");
//     });






// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }  






/// Promises
/// .then()  .catch()  .finally()  .all()  .race()
/// promise.then((res)=>{.....})
/// promise.catch((err)=>{.....})





// const getPromise = () =>{
//    return new Promise((resolve,reject)=>{
//         console.log("I m Promise");
//     //    resolve("success");
//        reject("Somthing went Wrong");
//         });
// }

// let  promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise resolved", res);
// })

// promise.catch((err)=>{
//     console.log("rejected",err);
// })










///Promise Chain

// function asyncFunc1 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve(" success")
//         },4000);
//     });
// }



// function asyncFunc2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve(" success")
//         },8000);
//     });
// }



// ///long way of write  promise chain using async/await
// console.log("Fatching data1......");
// let p1  = asyncFunc1();
// p1.then((res)=>{
//    console.log("shashi",res)
//    console.log("Fatching data2......");
//    let p2  = asyncFunc2();
//    p2.then((res)=>{
//    console.log("shashi",res)
// })
   
// })





///short way of write  promise chain using async/await

// console.log("Fatching data1......");
// asyncFunc1().then(()=>{
//     console.log("shashi")
//     console.log("Fatching data2......");
//     asyncFunc2().then(()=>{});
// });






///Promise Chain

// function getData (dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1", dataId);
//             resolve("success..")
//         },2000);
//     })
// };

// console.log("getting data 1");
// getData(1).then((res)=>{
//     console.log("getting data 2");
//         console.log(res)
//         return getData(2)
//     })
//     .then((res)=>{
//         console.log("getting data 3");
//         console.log(res)
//         return  getData(3)
//     }).then((res)=>{
//         console.log("getting data 4");
//         console.log("SUCCESS")
//     });











///Async-Await



///async function always returns a promise..
///asynce function myFunc(){...}
///await pauses the execution of its surrounding async function
///until the promise is settled..




// async function hello(){
//     console.log(" hello");
// }




// function api(){
//     return  new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            console.log("wether data");
//            resolve("success");
//         },2000);
//     });

// }

// async function getWetherData() {
//     await api ();//1st
//     await api ();//2nd
//     await api ();//3rd
//     console.log("success");

// }







///Async-Await   2nd Case

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
}

// async function  getAllData() {
//     console.log("Getting Data1....");
//     await getData(1);

//     console.log("Getting Data2....");
//     await getData(2);

//     console.log("Getting Data3....");
//     await getData(3);

//     console.log("Getting Data4....");
//     await getData(4);

//     console.log("Getting Data5....");
//     await getData(5);

//     console.log("Getting Data6....");
//     await getData(6);

//     console.log("Getting Data7....");
//     await getData(7);

//     console.log("Mission SuCCess");
//     console.log("THAN YOU SO MUCH");
// }

// console.log(getAllData());





/// Async-Await   3rd Case
/// Automatic  Synchronous Execution of Code   




(async function () {
    console.log("Getting Data1....");
    await getData(1);

    console.log("Getting Data2....");
    await getData(2);

    console.log("Getting Data3....");
    await getData(3);

    console.log("Getting Data4....");
    await getData(4);

    console.log("Getting Data5....");
    await getData(5);

    console.log("Getting Data6....");
    await getData(6);

    console.log("Getting Data7....");
    await getData(7);

    console.log("Mission SuCCess");
    console.log("THAN YOU SO MUCH");
})();