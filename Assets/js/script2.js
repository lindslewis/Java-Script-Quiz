//second script, for the quiz function itself

//function for questions
var questionIndex = 0
var time = 60

    //need to target each relevant section
var questionText = document.querySelector(".bigHead")
var button1 = document.querySelector("#btn1")    
var button2 = document.querySelector("#btn2")  
var button3 = document.querySelector("#btn3")  
var button4 = document.querySelector("#btn4")  
var button5 = document.querySelector("#btn5") 

function renderQuestion(){
    if(questionIndex === questions.length){
        endQuiz()
        return location.href = "../html/scores.html";
    }
    //questionIndex is index var
    questionText.innerText = questions[questionIndex].question
    button1.innerText = questions[questionIndex].answers[0]
    button2.innerText = questions[questionIndex].answers[1]
    button3.innerText = questions[questionIndex].answers[2]
    button4.innerText = questions[questionIndex].answers[3]
    button5.innerText = questions[questionIndex].answers[4]
}
renderQuestion()

// function quizNum () {
//     let number = document.querySelector('.smolHead')
//     if(questionIndex === questions.length) {

//     }
// }

function quizTimer(){
    var timer = setInterval(function(){
        if(time > 0){
            time = time-1
            document.querySelector("#timer").innerText = time
        }else{
            clearInterval(timer)
            endQuiz()
            return location.href = '../html/scores.html';
        }
    }, 1000)
}
quizTimer()

function userSelect(event){
    if(questionIndex === questions.length){
        endQuiz()
        return location.href = "../html/scores.html";
    }
    console.log(event)
    var userChoice = event.target.innerText
    var answer = questions[questionIndex].correctAnswer
    if(userChoice === answer){
        console.log("right")
    }else {
        time = time-5
    }
    questionIndex++
    renderQuestion()
}

button1.addEventListener("click", userSelect)
button2.addEventListener("click", userSelect)
button3.addEventListener("click", userSelect)
button4.addEventListener("click", userSelect)
button5.addEventListener("click", userSelect)

function endQuiz (){
    localStorage.setItem("Score", time)
}
