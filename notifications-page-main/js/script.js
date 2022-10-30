let notList = document.querySelectorAll("ul li");
let readAll = document.getElementById("read-all");
let notNumber = document.getElementById("not-number");

updateNotNumber()
//  read one by one
notList.forEach((e)=>{
  e.addEventListener("click",()=>{
    e.classList.remove("not-readed")
    updateNotNumber();
  })
})
//  read all
readAll.addEventListener("click",()=>{
  notList.forEach((e)=>{
    e.classList.remove("not-readed");
  })
  updateNotNumber();
})

//  update notification number

function updateNotNumber(){
  let num = 0;
  for(let i = 0; i < notList.length;i++){
    if(notList[i].classList.contains("not-readed")){
      num = num + 1;
    }
  }
  notNumber.innerText = "";
  notNumber.appendChild(document.createTextNode(num));
}
