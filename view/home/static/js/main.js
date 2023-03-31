"use strict";
const qs = selector => document.querySelector(selector)
const gt = sel => document.getElementById(sel)
const qsa = sel => document.querySelectorAll(sel)
const href = url => window.location.assign(url)
const menu = qs(".menu")
const menuSwitch = qs(".menuswitch")
const circulos = gt("circulos")
const logo = qs(".menu__icon")
const loginBtt = qsa(".login-btt")
const sesiones = qs(".circulo-sesiones")
const cardbut = qs(".but")
const bcardbut = qs(".bbut")
const card = qs(".card-content")
const back = qs(".goback")
const acesores = gt("acesores")
let isLog = false

function  menuDisplay () {
  // elementos existen ? 
    if(menu && menuSwitch){
      menu.classList.toggle("menuHide")
	    menuSwitch.classList.toggle("menuHide")
    }
}
menuSwitch.addEventListener('click' , menuDisplay )

circulos.addEventListener("click",() => {
  href("http://localhost/login/view/home/circulos.html")
})

if(sesiones){
  sesiones.addEventListener("click",() => {
    href("http://localhost/login/view/home/info-tabla.html")
  })
}

post.addEventListener("click",() => {
  href("http://localhost/login/view/home/post.php")
})

if(back){
  back.addEventListener("click",()=>{
    href("http://localhost/login/view/home/circulo-beta.html")
  })
}

if(acesores){
  acesores.addEventListener("click",()=>{
    href("http://localhost/login/view/home/Acesores.html")
  })
}

logo.addEventListener("click",()=>{
	href("http://localhost/login/view/home/")
})
for(let btt of loginBtt){
  btt.addEventListener("click",()=>{
    if(isLog){
      document.documentElement.style.setProperty("--login_color","#6CC25B")
      for(let i of loginBtt){
        i.textContent = "Inicia sesion"
      }
      isLog = false
    }
    else{
      document.documentElement.style.setProperty("--login_color","#cf1818")
      for(let i of loginBtt){
        i.textContent = "Cerrar sesion"
      }
      isLog = true
    }
  })
}

if(cardbut){
  cardbut.addEventListener("click",()=>{
    card.classList.toggle("fliped")
  })
}
if(bcardbut){
  bcardbut.addEventListener("click",()=>{
    card.classList.toggle("fliped")
  })
}