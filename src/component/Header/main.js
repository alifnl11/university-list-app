// Menu Show
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active__header'))
    this.classList.add('active__header')

    // Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))