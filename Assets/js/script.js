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
 

    // need to fix my file paths for the html :)))
        var startBtn = document.querySelector('#startBtn')
        if(startBtn !== null){
            startBtn.addEventListener("click", function() {
            location.href = "./Assets/html/quiz-page.html";
            });
        }
        var redoQuiz = document.querySelector("#replay")
        if(redoQuiz !== null){
            redoQuiz.addEventListener("click", function() {

            // need to fix the below file path to index.html
            location.href = "../html/quiz-page.html";
            });
        }
    
 


    