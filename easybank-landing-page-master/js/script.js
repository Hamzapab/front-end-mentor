//  humburger toggel
// show nav on mobile

let humbergur = document.querySelector(".humbergur");
let humbergurChild = document.querySelectorAll(".humbergur span")
// nav bar mobile
let nav = document.querySelector("nav");
humbergur.addEventListener("click",()=>{
  humbergurChild.forEach((e)=>{
    e.classList.toggle("on");
  });
  nav.classList.toggle("fade");
  document.querySelector(".overlay").classList.toggle("open");
  document.body.classList.toggle("no-scroll");
})

document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(".target");
  if (!isClosest) {
    humbergurChild.forEach((ele)=>{
      ele.classList.remove("on");
    });
    nav.classList.remove("fade");
    document.querySelector(".overlay").classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
})
