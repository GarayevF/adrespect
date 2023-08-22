let dropbtn = document.querySelector('.dropbtn');
let dropbtnicon = document.querySelector('nav .nav_menu_item .dropdown .dropbtn i');
let dropdown = document.querySelector(".dropdown-content")

dropbtn.addEventListener('click', function(){
    dropdown.classList.toggle("show");
    if (dropdown.classList.contains('show')) {
        dropbtnicon.style.transform = "rotate(0deg)"
        dropdown.style.height = dropdown.scrollHeight + 'px';
    }else{
        dropbtnicon.style.transform = "rotate(-90deg)"
        dropdown.style.height = '0px';
    }
})

let dropbtn_m = document.querySelector('.dropbtn-m');
let dropbtnicon_m = document.querySelector('nav .nav_menu_item .dropdown-m .dropbtn-m i');
let dropdown_m = document.querySelector(".dropdown-content-m")

let m_menu_dropbtn = document.querySelector('#header-m-dropbtn');
let m_menu_dropdown = document.querySelector("#header-m-dropdown")

dropbtn_m.addEventListener('click', function(){
    dropdown_m.classList.toggle("show");
    if (dropdown_m.classList.contains('show')) {
        dropbtnicon_m.style.transform = "rotate(0deg)"
        dropdown_m.style.height = dropdown_m.scrollHeight + 'px';
        m_menu_dropdown.style.height = m_menu_dropdown.offsetHeight + dropdown_m.scrollHeight + 'px';
    }else{
        dropbtnicon_m.style.transform = "rotate(-90deg)"
        dropdown_m.style.height = '0px';
        m_menu_dropdown.style.height = m_menu_dropdown.offsetHeight - dropdown_m.scrollHeight + 'px';
    }
    
})



m_menu_dropbtn.addEventListener('click', function(){
    m_menu_dropdown.classList.toggle("show");
    if (m_menu_dropdown.classList.contains('show')) {
        m_menu_dropdown.style.height = m_menu_dropdown.scrollHeight + 24 + 'px';
        m_menu_dropdown.style.padding = '12px 0';
    }else{
        m_menu_dropdown.style.height = '0px';
        m_menu_dropdown.style.padding = '0';
    }
})

let searchbtn = document.querySelector('#Header .fa-magnifying-glass');
let searchinput = document.querySelector("#Header .search-div")
let inputdiv = document.querySelector("#Header .input-div")

searchbtn.addEventListener('click', function(){
    searchinput.classList.toggle("show");
    if (searchinput.classList.contains('show')) {
        searchinput.style.width = 200 + 'px';
        inputdiv.style.border = '1px solid #d9d9d9';
        inputdiv.style.padding = '5px';
    }else{
        searchinput.style.width = '0px';
        inputdiv.style.border = 'none';
        inputdiv.style.padding = '0px';
    }
})

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            dropbtnicon.style.transform = "rotate(-90deg)"
            dropdown.style.height = '0px';
        }
    }
}

const gallery = document.querySelector('.gallery-div');
const expand = document.querySelector('.expand-gallery');
const linear = document.querySelector('.linear-gradient');

expand.addEventListener('click', function(){
    expand.style.display = "none";
    linear.style.display = "none";
    gallery.style.maxHeight = "unset";
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show-animation');
        }else{
            entry.target.classList.remove('show-animation');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




document.querySelector('.ofirmie').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#About').scrollIntoView({
        behavior: 'smooth'
    });
})

document.querySelectorAll('.realizacje').forEach((el) => {
    el.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#Projects').scrollIntoView({
            behavior: 'smooth'
        });
    })
})


document.querySelector('.kontakt').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#Footer').scrollIntoView({
        behavior: 'smooth'
    });
})





const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

