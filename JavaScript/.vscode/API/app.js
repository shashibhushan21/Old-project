

const  BASE_URL = " https://open.er-api.com/v6/latest/USD"


// const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd/inr.json"


const dropdown = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button ");

const fromCurr =  document.querySelector(".from select");

const toCurr =  document.querySelector(".to select");

const msg = document.querySelector(".msg");



for(let select of dropdown ){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD"){
            newOption.selected  = "selected";
        } else if(select.name === "to" && currCode === "INR"){
            newOption.selected  = "selected";

        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt)=>{
     updateFlag(evt.target);
    })
}


const updateFlag = (element)=>{
    let currCode =element.value;
    let countryCode = countryList[currCode];
    // let newSrc =  `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    element.parentElement.querySelector("img").src = newSrc;
};




btn.addEventListener("click", async (evt)=>{
    btn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.9)";
    btn.style.color  = "#000";

    setTimeout(() => {
        btn.style.boxShadow = "";
        btn.style.color  = "";
    }, 100); // reset the box shadow after 100ms
});





    btn.addEventListener("click", async (evt)=>{
        btn.style.backgroundColor = "";
      evt.preventDefault();
      let amount = document.querySelector(".amount input");
      let amtVal = amount.value;
      console.log(amtVal);
      if(amtVal === "" ||  amtVal < 1 ){
        amtVal = 1;
        amount.value = "1";
        console.log(amtVal)
      }

    //   console.log(fromCurr, toCurr);
   
    const URL =  `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(BASE_URL);
    let data  = await response.json();
    // let rate = data[toCurr.value.toLowerCase()];
    let rate = data.rates[toCurr.value.toUpperCase()]/data.rates[fromCurr.value.toUpperCase()];

    let result = amtVal * rate;

    // console.log(result);
    //  console.log(data);
    //  console.log(toCurr.value)
    //  console.log(rate);
    //  console.log(amount);
    //  console.log(data);
    //  console.log(amtVal);

     msg.innerText = `${amtVal} ${fromCurr.value} = ${result}  ${toCurr.value}`
    
    });

