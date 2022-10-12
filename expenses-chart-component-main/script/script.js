let spans = document.querySelectorAll("li span");

document.onload = loadData();

function loadData(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","data.json");
  xhr.send();

  xhr.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
      let mainData = JSON.parse(this.responseText);
      let bigData = 0;
      for(let i = 0 ; i < mainData.length;i++){
        // add data tp p.amount
        spans[i].firstElementChild.innerText = `$${mainData[i].amount}`
        spans[i].style.height = `${mainData[i].amount}%`;
        if(bigData < mainData[i].amount){
          bigData = mainData[i].amount;
        }
        spans[i].addEventListener('mouseover',(e)=>{
          spans[i].firstElementChild.style.cssText = "visibility: visible;";
        });
        spans[i].addEventListener('mouseleave',(e)=>{
          spans[i].firstElementChild.style.cssText = "visibility: hidden;";
        });
      }
      spans.forEach((e)=>{
        if(e.style.height == `${bigData}%`){
          e.style.backgroundColor = "var(--Cyan)";
        }
      })
    }
  }
}