//global vars:
//below, may be easier to use it as an object
var questions = [
    {
        question: "2+2?",
        answers: [3,4,5,6,8],
        correctAnswer:"4",
    },
    {
        question: "2+2?",
        answers: [3,4,5,6,8],
        correctAnswer:"4",  
    },
    {
        question: "2+2?",
        answers: [3,4,5,6,8],
        // correctAnswer:"4",
        //correctAnswerIndex: 1 
    }
]

//to console log second question,  second answer
console.log(questions[2].answers[2])

//for the high scores
var highScores = [
    {
        initials: "LL",
        score: 0
    }
]
//questions array (contain questions and answers)--remember that arrays start at 0
//currentQuestion (var that starts at 0), accesses the questions array = 0
//timeLeft (timer)
//score
// var btn1 = querySelector {#btn-1} <-- store the buttons in a single var

//functions:
//startGame
    //triggered by eventListener on start game button
    //start the timer
    //set up first question
    //loadQuestion() --have it do this at the start.
//timer
    //called by the startGame function
    //setInterval()
    //render to page
//loadQuestion
    //currentQuestion++ (to move on to the next question)
    //render the question and potential answers to a page
    //btn1.textContent = (if using a single var, have it select the right question/answer text)
//checkAnswer
    //check which button user clicked
    //compare the choice with the correct answer
    //act on right/wrong answer (use score var), this will be if/else
    //could also do the currentQuestion++ here
    //loadQuestion()<-- call this here at the end
//endGame
    //called at end of timer or when they finish the last question (whichever comes first for the user)
    //need to cancel the timer
    //have user submit their initials
    //local storage (this could be it's own function)
        //1. read ls and store in js variable
        //2. check if null
        //3. if not null, update js variable with our new score
        //4. render to page
        //5. save updated js variable
    //make highscores visible (or redirect to highscores page if we do multiple html pages)
    //prompt user to play again?
    //folder 26 from mod 4 would be good to review for storage, using todos (highScores(this is the todos)= storedTodos + newScore)