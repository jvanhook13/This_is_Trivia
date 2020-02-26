$(document).ready(function () {
    //declare variables/objects
    //Setting up object containing questions. Using const so it is immutable and question can never be changed cfrom this object.
    const question = [
        {
            //question 1
            trivia: "Dog goes?",
            answer: "Woof",
            choices: {
                a: "Toot",
                b: "Tweet",
                c: "Ow Ow Ow",
                d: "Woof"
            }


        },

        {
            //question 2
            trivia: "Cat goes?",
            answer: "Meow",
            choices: {
                a: "Meow",
                b: "Squeek",
                c: "Woof",
                d: "Toot"
            }


        },

        {
            //question 3
            trivia: "Bird goes?",
            answer: "Tweet",
            choices: {
                a: "Toot",
                b: "Woof",
                c: "Tweet",
                d: "Quack"
            }


        },

        {
            //question 4
            trivia: "Mouse Goes?",
            answer: "Squeek",
            choices: {
                a: "Toot",
                b: "Tweet",
                c: "Squeek",
                d: "Blub"
            }


        },

        {
            //question 5
            trivia: "Cow goes?",
            answer: "Moo",
            choices: {
                a: "Quack",
                b: "Woof",
                c: "Moo",
                d: "Tweet"
            }


        },

        {
            //question 6
            trivia: "Frog goes?",
            answer: "Croak",
            choices: {
                a: "Meow",
                b: "Squeek",
                c: "Croak",
                d: "Blub"
            }


        },

        {
            //question 7
            trivia: "Elephant goes?",
            answer: "Toot",
            choices: {
                a: "Ow Ow Ow",
                b: "Squeek",
                c: "Woof",
                d: "Toot"
            }


        },

        {
            //question 8
            trivia: "Duck say?",
            answer: "Quack",
            choices: {
                a: "Moo",
                b: "Quack",
                c: "Squeek",
                d: "Blub"
            }


        },

        {
            //question 9
            trivia: "Fish go?",
            answer: "Blub",
            choices: {
                a: "Squeek",
                b: "Blub",
                c: "Quack",
                d: "Moo"
            }


        },

        {
            //question 10
            trivia: "The seal goes?",
            answer: "Ow Ow Ow",
            choices: {
                a: "Woof",
                b: "Meow",
                c: "Ow Ow Ow",
                d: "Croak"
            }


        },

        {
            //question 11
            trivia: "What does the fox say?!",
            answer: "q",
            choices: {
                a: "daa",
                b: "baa",
                c: "gaa",
                d: "haa"
            }


        }



    ];

    console.log(question, "question")
    console.log(question[6].answer)
    var i = 0 
    
    function displayQuestion () {
        
          
        console.log("question" , question[i].trivia) ;
         
        $("#question").text(question[i].trivia)
        $(".choices").append(question[i].choices.a)
        $(".choices").append(question[i].choices.b)
        $(".choices").append(question[i].choices.c)
        $(".choices").append(question[i].choices.d)
         

    } ; 

    function nextQuestion () {

        if ($("#submit").on("click" , nextQuestion)) {
            
            

            console.log(i)
            console.log(question[i].trivia)
            i++
        }
    }
    //     else if (setTimeout === 0) {
    //         i++
        
            


    // }}

    //     if (playerChoice === question.answer) {

    //         console.log(Correct)

    //     } else {

    //         console.log(Incorrect)

    //     }


   
        displayQuestion()
        nextQuestion()
    
    // var choiceButton = question[i].choice[i]

   






    //functions to run game






    //functions to count wins/losses

    // restart();




})