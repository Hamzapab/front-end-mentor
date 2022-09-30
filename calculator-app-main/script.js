// change Theme
let themes = document.querySelector(".them-list");


if(window.localStorage.getItem("class")){
  document.body.removeAttribute("class");
  document.body.className = window.localStorage.getItem("class");
}

themes.addEventListener("click",(e)=>{
  if(e.target.classList.contains("t-one")){
    document.body.removeAttribute("class");
    document.body.className ="theme-one";
    window.localStorage.setItem("class","theme-one");
  }else if(e.target.classList.contains("t-two")){
    document.body.removeAttribute("class");
    document.body.className ="theme-two";
    window.localStorage.setItem("class","theme-two");
  }else if(e.target.classList.contains("t-three")){
    document.body.removeAttribute("class");
    document.body.className ="theme-three";
    window.localStorage.setItem("class","theme-three");
  }
})
//  calculator

class calcul{
  constructor(screen,sousScreen,currentOperand){
    this.currentV = screen;
    this.sousScreen = sousScreen;
    this.currentOperand = currentOperand;
    this.reset();
  }
  reset(){
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    this.updateSousScreen()
  }
  delete(){
    if(typeof this.currentOperand === "string"){
      if(this.currentOperand === "") {
        this.currentOperand = "";
      }else this.currentOperand = this.currentOperand.slice(0,-1);
    }else{
      this.currentOperand = this.currentOperand;
    }
  }
  appendNum(number){
    if(this.operation !== "" && this.operation && this.previousOperand ==="" ){
      this.currentOperand = "";
      this.operation = undefined;
    }
    if(this.currentOperand.length < 15){
      if(number === "." && this.currentOperand.includes(".")) return
      if(!isNaN(number) && this.currentOperand === "0"){
        this.currentOperand = "";
        this.currentOperand = `${this.currentOperand}${number}`;
      }else this.currentOperand = `${this.currentOperand}${number}`;
    }
  }
  chooseOperator(operation){
    if(this.currentOperand === "") return 
    if(this.previousOperand !== ""){
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
    this.updateSousScreen()
  }
  resetSousScreen(){
    sousScreen.innerText = "";
  }
  updateSousScreen(){
    if(this.operation !== undefined){
      sousScreen.innerText = `${this.previousOperand}  ${this.operation}`
    }
  }
  compute(){
    let computation;
    let a = parseFloat(this.currentOperand);
    let b  = parseFloat(this.previousOperand);
    if (isNaN(a) || isNaN(b)) return
    switch (this.operation) {
      case "+":
        computation = a + b
        break;
      case "-":
        computation = b - a
        break;
      case "/":
        computation = b / a
        break;
      case "x":
        computation = a * b
        break;
      default:
        break;
    }
    this.currentOperand = computation;
    this.previousOperand = '';
    }
  updateScreen(){
    screen.innerText = this.currentOperand;
  }
}

let nums = document.querySelectorAll("[data-number]");
let screen = document.querySelector("[data-screen]");
let sousScreen = document.querySelector("[data-sous]");
let equal = document.querySelector("[data-equal]");
let delet = document.querySelector("[data-delete]");
let reset = document.querySelector("[data-reset]");
let operation = document.querySelectorAll("[data-operation]");
let currentOperand = "";


let calculator = new calcul(screen,sousScreen,currentOperand);

calculator.updateScreen()

nums.forEach(num=>{
  num.addEventListener("click",()=>{
    calculator.appendNum(num.innerText)
    calculator.updateScreen();
  })
})

reset.addEventListener("click",()=>{
  calculator.reset();
  calculator.updateScreen();
})

delet.addEventListener("click",()=>{
  calculator.delete();
  calculator.updateScreen();
})
operation.forEach(ope=>{
  ope.addEventListener("click",()=>{
    calculator.chooseOperator(ope.innerText);
    calculator.updateSousScreen();
  })
})
equal.addEventListener("click",()=>{
  calculator.compute();
  calculator.updateScreen();
  calculator.resetSousScreen();
})








