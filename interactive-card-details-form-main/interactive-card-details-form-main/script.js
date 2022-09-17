//  change the card-owner-name
let ownerName =  document.querySelector(".card-owner-name");
let nameInput = document.querySelector(".owner-name");
let errorMsg = document.querySelectorAll(".error");

nameInput.addEventListener("input",(e) =>{
  let reg = /^[a-z || \s]+$/i;
  if(e.target.value !== ""){
    if(reg.test(e.target.value)){
      ownerName.innerHTML = "";
      errorMsg[0].style.display = "none"
      ownerName.textContent =  e.target.value;
    }else{
      errorMsg[0].style.display = "block";
    }
  }else{
    errorMsg[0].style.display = "none"
  }
})

//  change the card-number
let cardNumber = document.querySelector(".card-num");
let cardNumberInput = document.querySelector(".card-number");

cardNumberInput.addEventListener("input",(e) =>{
  let reg = /^[0-9 || \s]+$/i;
  let split4 = /.{1,4}/g
  let val = e.target.value.split(" ").join("")
  e.target.value = val.match(split4).join(" ")
  if(e.target.value !== ""){
    if(e.target.value.match(reg)){
      cardNumber.innerHTML = "";
      errorMsg[1].style.display = "none"
      cardNumber.textContent =  e.target.value;
    }else{
      errorMsg[1].style.display = "block"
    }
  }else {
    errorMsg[1].style.display = "none"
  }
})
cardNumberInput.addEventListener("blur",()=>{
  if(cardNumberInput.value.length !== 19){
    errorMsg[1].style.display = "block";
  }
})
//  change expiration date 
let day = document.querySelector(".day-holder");
let dayInput = document.querySelector(".day input");
dayInput.addEventListener("input",(e) =>{
  let reg = /^[0-9]+$/i;
  if(e.target.value !== ""){
    if(e.target.value.match(reg) && e.target.value <= 12){
      day.innerHTML = "";
      errorMsg[2].style.display = "none"
      day.textContent =  e.target.value;
    }else{
      errorMsg[2].style.display = "block"
    }
  }else errorMsg[2].style.display = "none"; 
  if(day.textContent.length === 1) day.textContent = "0" + day.textContent;
})
// year 
let year = document.querySelector(".year-holder");
let yearInput = document.querySelector(".year input");

yearInput.addEventListener("input",(e) =>{
  let reg = /^[0-9]+$/i;
  if(e.target.value !== ""){
    if(e.target.value.match(reg) && e.target.value > 21){
      year.innerHTML = "";
      errorMsg[3].classList.remove("invalid");
      errorMsg[3].style.display = "none"
      year.textContent =  e.target.value;
    }else{
      errorMsg[3].classList.add("invalid");
      errorMsg[3].style.display = "block"
    }
  }else errorMsg[3].style.display = "none";errorMsg[3].classList.add("invalid");
})

let cvc = document.querySelector(".cvc-holder")
let cvcInput = document.querySelector(".cvcinp")
cvcInput .addEventListener("input",(e) =>{
  let reg = /^[0-9]+$/i;
  if(e.target.value !== ""){
    if(e.target.value.match(reg)){
      cvc.innerHTML = "";
      errorMsg[4].style.display = "none"
      cvc.textContent =  e.target.value;
    }else{
      errorMsg[4].style.display = "block";
    }
  }else errorMsg[4].style.display = "none" ; 
})

//  completed card show;
let thanksCard = document.querySelector(".thanks");
let cardInfo = document.querySelector(".card-info");
let btn = document.querySelector(".sbmt");
let btnTwo = document.querySelector(".btn-two");

let input = document.querySelectorAll("input")
console.log(input)

btn.addEventListener("click",(event)=>{
  let check = true;
  for(let i = 0; i < input.length;i++){
    if(input[i].value === "" || input[i].nextElementSibling.style.display ==="block"){
      input[i].nextElementSibling.style.display ="block";
      event.preventDefault();
      check = false;
    }
    console.log(input[i].nextElementSibling);
  }
  if(check){
    event.preventDefault()
    cardInfo.style.display = "none";
    thanksCard.style.display = "flex";
  }
})

btnTwo.addEventListener("click",(event)=>{
  cardInfo.style.display = "block";
  thanksCard.style.display = "none";
  input.forEach((e)=>{
    e.value ="";
  })
  location.reload();
})