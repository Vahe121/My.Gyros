const burger = document.querySelector(`.head_burger`)
const line1 = document.querySelector(`.burger_line1`)
const line2 = document.querySelector(`.burger_line2`)
const line3 = document.querySelector(`.burger_line3`)
const burger_main = document.querySelector(`.burger_js_main`)

burger.addEventListener(`click`, ()=>{
    line1.classList.toggle(`burger_line1_js`)
    line2.classList.toggle(`burger_line2_js`)
    line3.classList.toggle(`burger_line3_js`)
    burger_main.classList.toggle(`burger_js_anim`)
})

const slide = document.querySelector(`.work_slide`)
const right = document.querySelector(`.slide_right`)

right.addEventListener(`click`,()=>{
    slide.scrollBy({
        right: 550,
        behavior: "smooth"
    })
    console.log("asasas");
})
    