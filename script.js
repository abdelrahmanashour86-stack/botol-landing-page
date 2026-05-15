const navlist = document.querySelector(".mob-nav")
const navLinks = document.querySelector(".btns")
let rotate = 0;
let view = false
navlist.onclick = () => {
    rotate += 90
    rotate = rotate == 90 ? 90 : rotate % 90
    navlist.style.transform = `rotate(${rotate}deg)`
    view = !view
    navLinks.style.width = view ? "250px" : "0px"
}
navLinks.addEventListener("click", () => {
    if (view) {
        navLinks.style.width = "0px";
        rotate += 90
        rotate = rotate === 90 ? 90 : rotate % 90
        navlist.style.transform = `rotate(${rotate}deg)`
        view = !view
    }
})

