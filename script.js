const gameModes = document.querySelectorAll(".mode");

gameModes.forEach(gameMode => {
    gameMode.addEventListener("mouseover", ()=>{
        gameMode.addEventListener('click',() => {
            gameModes.forEach(actMode =>{actMode.classList.remove('active')});
            gameMode.classList.add("active");
        })
        gameMode.classList.add("hover")

    })
    gameMode.addEventListener("mouseout", ()=>{
        gameMode.classList.remove("hover");
    })

})
