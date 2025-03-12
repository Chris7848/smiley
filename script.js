// const h1 = document.querySelector('h1')
// const but = document.querySelector('button')


// function clickEvent(){
// h1.style.color = "red"
// }

// but.addEventListener('click', clickEvent)

const menu = document.querySelector('.menu-list')
const bar = document.querySelector('.menubar')

bar.addEventListener('click', function(){
    menu.classList.toggle('showmenu')
})
menu.addEventListener('click', function(){
    menu.classList.toggle('showmenu')
})