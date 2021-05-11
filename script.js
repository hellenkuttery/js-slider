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

document.querySelector(".card-img-top").setAttribute("src",meal[2].image)

document.querySelector(".card-title").textContent=meal[2].name

document.querySelector(".card-link").setAttribute("href",meal[2].link)