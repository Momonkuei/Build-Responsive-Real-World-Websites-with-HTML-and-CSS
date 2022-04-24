const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", () => {
        // console.log(item);
        // removeActiveClasses()
        item.classList.toggle("open")
    })
})

// function removeActiveClasses() {
//     items.forEach(item => {
//         item.getElementsByClassName('hiddenBox')[0].classList.remove("active")
//     })
// }