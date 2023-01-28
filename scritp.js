const signUpButton = document.querySelector("#signup")
const signInButton = document.querySelector("#signin")
const container = document.querySelector("#container")

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active")
})

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active")
})

