// show nav bar on mobile
let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector("nav")

hamburger.addEventListener("click",()=>{
  hamburger.firstElementChild.classList.toggle("not-checked")
  hamburger.firstElementChild.classList.toggle("checked")
  if(hamburger.firstElementChild.classList.contains("checked")){
    nav.style.right = "0";
    document.body.style.cssText = "overflow : hidden;"
  }else{
    nav.style.right = "-100%";
    document.body.style.cssText = "overflow-x : hidden;"
  }
})