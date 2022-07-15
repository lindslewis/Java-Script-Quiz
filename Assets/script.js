
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


    // global vars
    // var timer = 
    //the questions with their answers
    const questions = [
        {
            question:"How many movies has Studio Ghibli produced (as of 2022)?",
            answers: ["16", "20","11", "32", "23"],
            correctAnswer: "23"

        }, 
        {
            question:"Four artists founded studio ghibli: which of the below is NOT one of the founders?",
            answers: ["Yasuyoshi Tokuma","Makoto Shinkai","Hayao Miyazaki", "Toshi Suzuki", "Isao Takahata"],
            correctAnswer: "Makoto Shinkai"
        },
        { 
            question: "What was the first film that Studio Ghibli released?",
            answers: ["Castle in the Sky", "Grave of the Fireflies","Porco Rosso", "Nausicaa of the Valley of the Wind", "Whisper of the Heart"],
            correctAnswer: "Nausicaa of the Valley of the Wind"
        },
        {
            question:"What Ghibli character is seen in the studio's logo image?",
            answers: ["Turnip Head","Totoro","Calcifer","No-Face","Jiji"],
            correctAnswer: "Totoro"
        },
        {
            question:"What is Studio Ghibli's highest grossing film?",
            answers: ["Howl's Moving Castle (2004)","From Up on Poppy Hill (2011)","Kiki's Delivery Service (1989)", "Spirited Away (2001)", "Princess Mononoke (1997)"],
            correctAnswer: "Spirited Away (2001)"
        }
    ]
 
        var startBtn = document.querySelector('#startBtn')
        if(startBtn !== null){
            startBtn.addEventListener("click", function() {
            location.href = "quiz-page.html";
            });
        }
        var redoQuiz = document.querySelector("#replay")
        if(redoQuiz !== null){
            redoQuiz.addEventListener("click", function() {
            location.href = "index.html";
            });
        }
    
 


    