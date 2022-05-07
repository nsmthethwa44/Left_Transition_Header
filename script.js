// toggle navbar
let menuImg = document.querySelector(".menuImg");
let navbar = document.querySelector(".navbar");
let closeImg = document.querySelector(".closeImg");

menuImg.onclick = () => { 
  navbar.classList.add("active");
}
closeImg.onclick = () => { 
  navbar.classList.remove("active");
}

// navbar link to remove active class onclick
let navbarLink = document.querySelectorAll(".navbar .nav li a");
Array.from(navbarLink).forEach((item, index) =>{
  item.onclick = (e) => { 
    navbar.classList.remove("active");
  }
})

