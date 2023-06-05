

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
  if(e.target.closest(".menu-item-has-children")){
       const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
     hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
     toggleMenu();
})
closeMenu.addEventListener("click",() =>{
     toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
    if(this.innerWidth >991){
        if(menu.classList.contains("active")){
            toggleMenu();
        }

    }
}

/******************************Filter */

const filterBtns = document.querySelectorAll(".filter-btn .btn")
console.log(filterBtns);
const filterImgs = document.querySelectorAll(".image-collection")

filterBtns.forEach(ele =>{
    ele.addEventListener("click", mangeImage)
})


function mangeImage(){
    filterImgs.forEach(ele =>{
        ele.style.display= "none";
    })
    document.querySelectorAll(this.dataset.furinture).forEach(ele =>{
        ele.style.display= "block";
    })
}
/**************************** */

const sliderImg= document.querySelector(".slider-img")
const imges= ['img1.jpg', 'img2.jpg', 'img3.jpg']

let i= 0;

function previous(){
    if(i <= 0) i= imges.length;
    i--;
    return setImg() 
}
function next(){
    if(i >= imges.length - 1) i= -1
    i++;
    return setImg();
}

 let id= setInterval(() => {
    if(i >= imges.length - 1) i= -1;
    i++;
    return setImg()
}, 2000);



function setImg(){
    sliderImg.setAttribute('src', `imge/Hollywood Regency img/${imges[i]}`)
}

/************************************* */

const parent= document.querySelector(".circle")
const circleVideo= document.querySelector(".circle-video")
const video= document.querySelector(".video") 
const faXmark= document.querySelector(".video .fa-xmark") 

faXmark.addEventListener("click", closeVideo)

function playVideo(){
    circleVideo.addEventListener("click", function(){
        parent.classList.replace('d-block', 'd-none')
        video.classList.replace('d-none', 'block')

    })
}
playVideo();

function closeVideo(){
    parent.classList.replace('d-none', 'd-block')
    video.classList.replace('block', 'd-none')
}
