//third, for scores page
var input = document.querySelector("#userInitials")
var saveButton = document.querySelector("#submitInitials")

saveButton.addEventListener("click", function(){
    var initials = input.value
    console.log(initials)
    var userScores = JSON.parse(localStorage.getItem("highScores")) || []
    userScores.push({
        initials, score: localStorage.getItem("Score")
    })
    localStorage.setItem("highScores", JSON.stringify(userScores))
})

//pull scores from local storage, loop over and stamp out :)