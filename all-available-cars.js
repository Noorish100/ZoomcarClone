let city = localStorage.getItem("city");
let country = localStorage.getItem("country");
let date = localStorage.getItem("date");
let carData = JSON.parse(localStorage.getItem("cars"));

let cont = document.getElementById("cont");
let add= document.querySelector("#addressbox");
add.innerText = city+","+" "+country;

// var cont =document.getElementById("cont")

// let city =JSON.parse(localStorage.getItem("city"))
// let add = document.getElementById("address");
// add.innerText =  city

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
today.toDateString();

let date2 =document.querySelector(".date1")
date2.innerText = "Start-time:" + " " + today;

let date3 =document.querySelector(".date3")
date3.innerText = "End-time: "+date;


function getData(){

    carData.forEach(element => {
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.img;
        let name= document.createElement("h3")
        name.innerText = element.name;
        

        let city_div = document.createElement("p");
        city_div.innerText=element.City;
        let location = element.location;
        let price = document.createElement("p");
        price.innerHTML = "<span>Special Price: </span>" + element.price;
        let fuel = element.fuel;
        let seater = element.seater;
        let rating =document.createElement("h5");
        rating.innerHTML = "<img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlymp3rs55kKsYfMnRuRVc4secicqbuMeg7desJ6PbIentLCuMzQKP8mWYn6s6-MoCV4&usqp=CAU'><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlymp3rs55kKsYfMnRuRVc4secicqbuMeg7desJ6PbIentLCuMzQKP8mWYn6s6-MoCV4&usqp=CAU'><img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlymp3rs55kKsYfMnRuRVc4secicqbuMeg7desJ6PbIentLCuMzQKP8mWYn6s6-MoCV4&usqp=CAU'>" +element.Rating;
        let type = element.type;
        let address = document.createElement("p");
        address.innerText = element.City;            
        // address.innerText = element.City;
        let button = document.createElement("button");
        button.innerText = "Book Now"
        button.onclick= function(){
            window.location.href = "first.html";
            localStorage.setItem("carsDetails",JSON.stringify(element));
        }
        
        if(city===element.City){
            div1.append(name,location,price,rating);
            div.append(img,div1,button);
            console.log(name);
        }
        cont.append(div)
    });
}



getData();
