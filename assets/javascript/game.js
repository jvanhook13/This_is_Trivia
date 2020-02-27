$(document).ready(function () {
    //declare variables/objects
    //Setting up object containing questions. Using const so it is immutable and question can never be changed cfrom this object.
    const question = [
        {
            //question 1
            trivia: "Dog goes?",
            answer: 3,
            choices: [
                "Toot",
                "Tweet",
                "Ow Ow Ow",
                "Woof"
            ]


        },

        {
            //question 2
            trivia: "Cat goes?",
            answer: 0,
            choices: [
                 "Meow",
                 "Squeek",
                 "Woof",
                 "Toot"
            ]


        },

        {
            //question 3
            trivia: "Bird goes?",
            answer: 2,
            choices: [
                 "Toot",
                 "Woof",
                 "Tweet",
                 "Quack"
            ]


        },

        {
            //question 4
            trivia: "Mouse Goes?",
            answer: 2,
            choices: [
                 "Toot",
                 "Tweet",
                 "Squeek",
                 "Blub"
            ]


        },

        {
            //question 5
            trivia: "Cow goes?",
            answer: 2,
            choices: [
                 "Quack",
                 "Woof",
                 "Moo",
                 "Tweet"
            ]


        },

        {
            //question 6
            trivia: "Frog goes?",
            answer: 2,
            choices: [
                 "Meow",
                 "Squeek",
                 "Croak",
                 "Blub"
            ]


        },

        {
            //question 7
            trivia: "Elephant goes?",
            answer: 3,
            choices: [
                 "Ow Ow Ow",
                 "Squeek",
                 "Woof",
                 "Toot"
            ]


        },

        {
            //question 8
            trivia: "Duck say?",
            answer: 1,
            choices: [
                 "Moo",
                 "Quack",
                 "Squeek",
                 "Blub"
            ]


        },

        {
            //question 9
            trivia: "Fish go?",
            answer: 1,
            choices: [
                 "Squeek",
                 "Blub",
                 "Quack",
                 "Moo"
            ]


        },

        {
            //question 10
            trivia: "The seal goes?",
            answer: 2,
            choices: [
                 "Woof",
                 "Meow",
                 "Ow Ow Ow",
                 "Croak"
            ]


        },

        {
            //question 11
            trivia: "What does the fox say?!",
            answer: "q",
            choices: [
                 "daa",
                 "baa",
                 "gaa",
                 "haa"
            ]


        }



    ];

    console.log(question, "question")
    console.log(question[6].answer)
    var i = 0 
    
    function displayQuestion () {
        
          
        console.log("question" , question[i].trivia) ;
        //pushes the code to html
        $("#question").text(question[i].trivia)
        $(".choices").html(question[i].choices)

        //gets all the choices from the question object
        question.forEach(x => {

            var t = x.choices
            t.forEach(y => console.log(y))
        
        })


    } ; 
    //function to iterate through the indexes of question
    function nextQuestion () {

            console.log(i)
            console.log(question[i].trivia)
            i++
        
    }
    

        displayQuestion()
        nextQuestion()
        //calls next question when you hit the submit button
        $("#submit").on("click" , nextQuestion)
    

    //functions to run game






    //functions to count wins/losses

    // restart();




})