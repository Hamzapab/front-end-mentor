// show feature and company section
let chevron = document.querySelectorAll("i");

chevron.forEach((ele)=>{
  ele.addEventListener("click",(e)=>{
    const ourElem = e.target.parentElement.parentElement.lastElementChild;
    e.target.classList.toggle("fa-chevron-down");
    e.target.classList.toggle("fa-chevron-up");
    if(e.target.classList.contains("fa-chevron-up")){
      ourElem.style.cssText = "max-height:300px;padding:10px 20px";
    }else{
      ourElem.style.cssText = "max-height:0px";
    }
  });
})
document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".chevron-target");
  if (!isClosest) {
    chevron.forEach((ele)=>{
      if(ele.classList.contains("fa-chevron-up")){
      ele.classList.toggle("fa-chevron-down");
      ele.classList.toggle("fa-chevron-up");
      ele.parentElement.parentElement.lastElementChild.style.cssText = "max-height:0px";
      }
    })
    }
  });
// show nav bar on mobile
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");

// humberger animation
function showandHideNav(){
  hamburger.firstElementChild.classList.toggle("not-checked");
  hamburger.firstElementChild.classList.toggle("checked");
  document.body.classList.toggle("overlay")
}
hamburger.addEventListener("click",(e)=>{
  showandHideNav();
  if(hamburger.firstElementChild.classList.contains("checked")){
    nav.style.right ="0";
    document.body.style.cssText = "overflow:hidden;"
  }else{
    nav.style.right ="-100%";
    document.body.style.cssText = "overflow-x:hidden"
  }
})

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".target");
  if (!isClosest && hamburger.firstElementChild.classList.contains("checked")) {
    showandHideNav();
    nav.style.right ="-100%";
    document.body.style.cssText = "overflow-x:hidden"
    }
  });