let landing = document.getElementById('landing')
let hamburgerBtn = document.getElementById('hamburgerBtn')
let closeBtn = document.getElementById('closeBtn')
let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    landing.style.background = 'black'
    landing.style.backgroundImage = 'none'
    hamburgerBtn.classList.toggle('hidden')
    hamburgerBtn.classList.toggle('block')
    closeBtn.classList.toggle('hidden')
    closeBtn.classList.toggle('block')
})