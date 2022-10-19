// Header sticky
let pageHeader = document.querySelector("header");
let nav = document.querySelector("nav");


window.addEventListener("scroll",()=>{
  if(window.scrollY === pageHeader.offsetTop){
    pageHeader.style.cssText = "border-bottom: 1px solid #424245;background-color: black;"
    nav.style.cssText = "background-color:transparent;"
  }
  if(window.scrollY < pageHeader.offsetTop){
    pageHeader.style.cssText = "border:none;background-color:none; ";
    nav.style.cssText = "background-color: rgba(255,255,255,.05);"
  }
})

// Navigation Bar
//  Humbergur animation;

let humbergur = document.querySelector(".humbergur");
let spans = document.querySelectorAll(".humbergur span");
let liItem = document.querySelectorAll("nav li");


humbergur.addEventListener("click",()=>{
  spans.forEach((e)=>{
    e.classList.toggle("off");
    e.classList.toggle("on");
    if(e.classList.contains("on")){
      nav.style.cssText = "max-width:70% ; padding-left:40px;";
      document.body.style.cssText = "overflow:hidden;";
      liItem.forEach((e)=>{
        e.style.opacity ="1";
      })
    }else{
      nav.style.cssText = "padding-left:0px;max-width:0%;";
      document.body.style.cssText = "overflow-x:hidden";
      liItem.forEach((e)=>{
        e.style.opacity ="0";
      })
    }
  })
})

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".target");
  if (!isClosest && humbergur.firstElementChild.classList.contains("on")) {
    spans.forEach((e)=>{
      e.classList.toggle("off");
      e.classList.toggle("on");
    });
    nav.style.cssText ="max-width:0;";
    document.body.style.cssText = "overflow-x:hidden";
    liItem.forEach((e)=>{
      e.style.opacity ="0";
    })
    }
  });

  // nav bar
  // change the selected nav item list
for(let i = 0; i < liItem.length;i++){
  liItem[i].addEventListener("click",()=>{
    liItem.forEach((e)=>{
      e.classList.remove("selected-nav");
    });
    liItem[i].classList.add("selected-nav");
  })
}

// Json call
//  Destination
let desHeader = document.querySelector(".planet h1");
let desP = document.querySelector(".planet p");
let pKm = document.getElementById("km");
let pTime = document.getElementById("time");
let destImage = document.getElementById("dest-imag");
let destli = document.querySelectorAll(".planet ul li");

// crew 
let crewLi = document.querySelectorAll(".crew-team li");
let crewSpan = document.querySelector(".crew-team span");
let crewHeader = document.querySelector(".crew-team h1");
let crewP = document.querySelector(".crew-team p");
let crewImage = document.getElementById("crew-imag");

// technology
let technologyLi = document.querySelectorAll(".space-lunch li");
let technologyHeader = document.querySelector(".space-lunch h1");
let technologyP = document.querySelector(".space-lunch p");
let technologyImage = document.getElementById("technology-imag");

function changeData(){
  let xhr = new XMLHttpRequest;
  xhr.open("GET","data.json");
  xhr.send();

  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 200){
      let data = JSON.parse(xhr.responseText);
      // destination Page
      destli.forEach((e,i)=>{
        e.addEventListener("click",()=>{
          changeSelected(e,destli,"selcted-team-dest");
          desHeader.innerText = "";
          desHeader.appendChild(document.createTextNode(data.destinations[i].name))
          desP.innerText = "";
          desP.appendChild(document.createTextNode(data.destinations[i].description));
          pKm.innerText = "";
          pKm.appendChild(document.createTextNode(data.destinations[i].distance));
          pTime.innerText = "";
          pTime.appendChild(document.createTextNode(data.destinations[i].travel));
          att = data.destinations[i].images.png;
          destImage.setAttribute("src", att);
        })
      })
      // crew Page
      crewLi.forEach((e,i)=>{
        e.addEventListener("click",()=>{
          changeSelected(e,crewLi,"selcted-team-crew");
          crewSpan.innerText = "";
          crewSpan.appendChild(document.createTextNode(data.crew[i].role));
          crewHeader.innerText = "";
          crewHeader.appendChild(document.createTextNode(data.crew[i].name));
          crewP.innerText = "";
          crewP.appendChild(document.createTextNode(data.crew[i].bio));
          att = data.crew[i].images.png;
          crewImage.setAttribute("src", att);
        })
      })
      // technology page
      technologyLi.forEach((e,i)=>{
        e.addEventListener("click",()=>{
          changeSelected(e,technologyLi,"selcted-lunch");
          technologyHeader.innerText = "";
          technologyHeader.appendChild(document.createTextNode(data.technology[i].name));
          technologyP.innerText = "";
          technologyP.appendChild(document.createTextNode(data.technology[i].description));
          att = data.technology[i].images.portrait;
          technologyImage.setAttribute("src", att);
        })
      })
    }
  }
}
function changeSelected(e,li,clas){
  for(let i = 0; i < li.length;i++){
    li[i].classList.remove(clas);
  }
  e.classList.add(clas);
}
changeData();


