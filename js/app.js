//menu
const burger = document.querySelector('.menuu-icon')
const menu = document.querySelector('.menuu')
const body = document.body

if(burger && menu) {
    burger.addEventListener( 'click',()=>{
        burger.classList.toggle('_active')
        menu.classList.toggle('_active')
        body.classList.toggle('_lock')
    } )
}

function readMore(){
    let dots = document.getElementById("dots")
    let more = document.getElementById("more")
    let btn = document.getElementById("btn")
    if(dots.style.display==='none'){
        dots.style.display="inline"
        btn.innerHTML="Read more"
        more.style.display="none"
    }else{
        dots.style.display="none"
        btn.innerHTML="Hide"
        more.style.display="inline"
    }
}

function readMore2(){
    let dotss = document.getElementById("dotss")
    let moree = document.getElementById("moree")
    let btnn = document.getElementById("btnn")
    if(dotss.style.display==='none'){
        dotss.style.display="inline"
        btnn.innerHTML="Read more"
        moree.style.display="none"
    }else{
        dotss.style.display="none"
        btnn.innerHTML="Hide"
        moree.style.display="inline"
    }
}
function readMore3(){
    let dots3 = document.getElementById("dots3")
    let more3 = document.getElementById("more3")
    let btn3 = document.getElementById("btn3")
    if(dots3.style.display==='none'){
        dots3.style.display="inline"
        btn3.innerHTML="Read more"
        more3.style.display="none"
    }else{
        dots3.style.display="none"
        btn3.innerHTML="Hide"
        more3.style.display="inline"
    }
}
function readMore4(){
    let dots4 = document.getElementById("dots4")
    let more4 = document.getElementById("more4")
    let btn4 = document.getElementById("btn4")
    if(dots4.style.display==='none'){
        dots4.style.display="inline"
        btn4.innerHTML="Read more"
        more4.style.display="none"
    }else{
        dots4.style.display="none"
        btn4.innerHTML="Hide"
        more4.style.display="inline"
    }
}

//link

const menuLinks = document.querySelectorAll('.menuLink[data-goto]')
if(menuLinks.length>0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click',onMenuLinkClick)
    })

    function onMenuLinkClick(e){
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight

            window.scrollTo({
                top:gotoBlockValue,
                behavior:'smooth'
            })
            e.preventDefault();
        }
    }

}