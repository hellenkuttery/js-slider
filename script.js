const meal=[
    {
        name:"Haşhaşlı Lokum Tarifi",
        image:"./img/hashasli-lokum-tarifi.jpg",
        link:"https://yemek.com/yoresel-yemek-tarifleri/"
    },
    {
        name:"Elmalı Top Tarifi",
        image:"./img/elmali-top-tarifi.jpg",
        link:"https://yemek.com/cikolatali-pratik-tatli-tarifleri/"
    },
    {
        name:"Çikolata Kaplı Çilek",
        image:"./img/cikolata-kapli-cilek.jpg",
        link:"https://yemek.com/cikolatali-pratik-tatli-tarifleri/"
    }
];
var counter=0;

function slider(e){
    document.querySelector(".card-img-top").setAttribute("src",meal[e].image)
    document.querySelector(".card-title").textContent=meal[e].name
    document.querySelector(".card-link").setAttribute("href",meal[e].link)
    }

document.querySelector(".back").addEventListener("click",function(){
    counter--;
    slider(counter)
})

document.querySelector(".next").addEventListener("click",function(){
    counter++;
    console.log(counter);
    slider(counter)
})

