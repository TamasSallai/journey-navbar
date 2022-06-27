const navMenu = document.querySelector(".nav-menu")
const navToggle = document.querySelector(".nav-toggle")

navToggle.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded")
  if (isExpanded === "false") {
    navToggle.setAttribute("aria-expanded", true)
    navMenu.setAttribute("data-visible", true)
  } else {
    navToggle.setAttribute("aria-expanded", false)
    navMenu.setAttribute("data-visible", false)
  }
})

window.addEventListener("resize", () => {
  const vw = window.innerWidth
  if (vw >= 800) {
    navToggle.setAttribute("aria-expanded", true)
    navMenu.setAttribute("data-visible", true)
    // navMenu.removeAttribute("data-visible")
  } else {
    navToggle.setAttribute("aria-expanded", false)
    navMenu.setAttribute("data-visible", false)
    // navMenu.addAttribute("data-visible")
  }
})

// const navItems = [...document.querySelectorAll(".nav-menu .nav-item")]

// navItems.forEach((element) => {
//   console.log(element)
// })
