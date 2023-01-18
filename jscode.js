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

const search = document.querySelector(`.search`)
const search_icon = document.querySelector(`.glass`)
const search_icon2 = document.querySelector(`.glass2`)
search_icon.addEventListener(`click`, ()=>{
    search.classList.toggle(`search_js`)
})
search_icon2.addEventListener(`click`, ()=>{
    search.classList.toggle(`search_js`)
})
const slide = document.querySelector(`.work_slide`)
const right = document.querySelector(`.slide_right`)
const left = document.querySelector(`.slide_left`)
const slide_box = document.querySelector(`.slide_box`)
let x = slide_box.clientWidth
right.addEventListener(`click`,()=>{
    slide.scrollTo({
        left: 0+x,
        behavior:"smooth"
    });
})
left.addEventListener(`click`,()=>{
    slide.scrollTo({
        left: 0-x,
        behavior:"smooth"
    });
})
