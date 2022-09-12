let submit = document.querySelector(".submit");
let rateDiv = document.querySelector(".rate-state");
let thanksDiv = document.querySelector(".thanks");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li")
let small = document.querySelector(".rate-num");


ul.addEventListener("click",(e)=>{
  for(let i = 0; i < ul.children.length;i++){
    ul.children[i].classList.remove("selected");
  }
  e.target.classList.add("selected");
  small.innerHTML = e.target.innerHTML
})

submit.addEventListener("click",()=>{;
  let check ;
  for(let i = 0; i < li.length;i++){
    if(li[i].classList.contains("selected")) {
      check = true;
      break;
    }else check = false;
  }
  if(check){
  document.querySelector(".attribution").style.display = "none";
  rateDiv.style.display = "none";
  thanksDiv.style.display = "block";
  }else window.alert("Select rate before submitting");
})