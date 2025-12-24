


/*







///API:- Application Programming InterFace..
// http:-  Hyper Text Transfer Protocol..



const URL = "https://dog.ceo/api/breeds/list/all";



const factPara =document.querySelector(".fact");
const btn = document.querySelector("#btn");

// let promise = fetch(URL)
//     console.log(promise);


    // const getFacts = async()=>{
    //     console.log("getting data....");
    //     let response = await fetch(URL);
    //     console.log(response  );  ///JSON format
    //     let  data = await response.json();
    //     // console.log(data[0].text);
    //     let a= factPara.innerText  = data[0].text;
    //     console.log(a);

    // };


    function  getFacts(){
        fetch(URL).then((Response)=>{
            return Response.json();
            })
            .then((data)=>{
                console.log(data);
                factPara.innerText = data[0].Text;
        })
    }


    btn.addEventListener("click", getFacts);

    // console.log(getFacts());


    */



///// PROJECT  START.