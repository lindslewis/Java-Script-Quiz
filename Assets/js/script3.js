//third, for scores page
var input = document.querySelector("#userInitials")
var saveButton = document.querySelector("#submitInitials")
const playerScore = document.querySelector(".playerScores")


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
localStorage.getItem("highScores", JSON.stringify(userScores));

for (i = 0; i <localStorage.length; i++) {
    let scoreLi = $("<li></li>");
    scoreLi.append(localStorage[i]).append("<button id='submitInitials'>x</button>");
    $(".scoreLists").append(scoreLi);
}