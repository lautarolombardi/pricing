const monthly = document.getElementById("monthly");
const annualy = document.getElementById("annualy");

let priceBasic = document.getElementById("price-basic");
let pricePremium = document.getElementById("price-premium");
let priceBusiness = document.getElementById("price-business");

let durationlabel = document.querySelectorAll(".card__duration");

annualy.onclick = ()=>{
    if(annualy.classList.contains("button--green")){
        return true;
    }
    else{
        annualy.classList.add("button--green");
        monthly.classList.remove("button--green");

        priceBasic.innerText = "$468";
        pricePremium.innerText = "$588";
        priceBusiness.innerText = "$708";

        durationlabel.forEach(label =>{
            label.innerHTML = "/Annualy";
        })
    }
};

monthly.onclick = ()=>{
    if(monthly.classList.contains("button--green")){
        return 1;
    }
    else{
        monthly.classList.add("button--green");
        annualy.classList.remove("button--green");

        priceBasic.innerText = "$39";
        pricePremium.innerText = "$49";
        priceBusiness.innerText = "$59";

        durationlabel.forEach(label =>{
            label.innerHTML = "/Monthly";
        })
    }
};
