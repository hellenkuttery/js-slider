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
    },
    {
        name:"Adana Kebap",
        image:"./img/adana-kebap.jpg",
        link:"https://yemek.com/tarif/adana-kebap/"
    },
    {
        name:"Patatesli Börek",
        image:"./img/patatesli-borek-tarif-son.jpg",
        link:"https://yemek.com/tarif/patatesli-borek/"
    },
    {
        name:"Şekerpare",
        image:"./img/sekerpare-ytk-site.jpg",
        link:"https://yemek.com/tarif/sekerpare/"
    },
    {
        name:"Ev Usulü Pizza",
        image:"./img/ev-usulu-pizza-yeni.jpg",
        link:"https://yemek.com/tarif/ev-usulu-pizza/"
    },
    {
        name:"Frambuazlı İrmik Tatlısı",
        image:"./img/frambuazli-irmik-tatlisi-sunum-1.jpg",
        link:"https://yemek.com/meyveli-sutlu-tatli-tarifleri/"
    },
    {
        name:"Yoğurtlu Patates",
        image:"./img/yogurtlu-patates-canaklari-tarifi.jpg",
        link:"https://yemek.com/patatesli-mezeler/"
    }
];


var counter=1;


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

setInterval(init,2000)
function init(){
    var randomImg=Math.floor(Math.random() * meal.length);
    slider(randomImg)
}

