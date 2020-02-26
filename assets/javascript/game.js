$(document).ready(function game() {
    //declare variables/objects
    //Setting up object containing questions. Using const so it is immutable and question can never be changed cfrom this object.
    const question = [{
        //question 1
            trivia1: "Dog goes?",
            answer1: "Woof",
            choices1: {
                "a": "Toot",
                "b": "Tweet",
                "c": "Ow Ow Ow",
                "d": "Woof"
            }


        },

        {
            //question 2
            trivia2: "Cat goes?",
            answer2: "Meow",
            choices2: {
                "a": "Meow",
                "b": "Squeek",
                "c": "Woof",
                "d": "Toot"
            }


        },

        {
            //question 3
            trivia3: "Bird goes?",
            answer3: "Tweet",
            choices3: {
                "a": "Toot",
                "b": "Woof",
                "c": "Tweet",
                "d": "Quack"
            }


        },

        {
            //question 4
            trivia4: "Mouse Goes?",
            answer4: "Squeek",
            choices4: {
                "a": "Toot",
                "b": "Tweet",
                "c": "Squeek",
                "d": "Blub"
            }


        },

        {
            //question 5
            trivia5: "Cow goes?",
            answer5: "Moo",
            choices5: {
                "a": "Quack",
                "b": "Woof",
                "c": "Moo",
                "d": "Tweet"
            }


        },

        {
            //question 6
            trivia6: "Frog goes?",
            answer6: "Croak",
            choices6: {
                "a": "Meow",
                "b": "Squeek",
                "c": "Croak",
                "d": "Blub"
            }


        },

        {
            //question 7
            trivia7: "Elephant goes?",
            answer7: "Toot",
            choices7: {
                "a": "Ow Ow Ow",
                "b": "Squeek",
                "c": "Woof",
                "d": "Toot"
            }


        },

        {
            //question 8
            trivia8: "Duck say?",
            answer8: "Quack",
            choices8: {
                "a": "Moo",
                "b": "Quack",
                "c": "Squeek",
                "d": "Blub"
            }


        },

        {
            //question 9
            trivia9: "Fish go?",
            answer9: "Blub",
            choices9: {
                "a": "Squeek",
                "b": "Blub",
                "c": "Quack",
                "d": "Moo"
            }


        },

        {
            //question 10
            trivia10: "The seal goes?",
            answer10: "Ow Ow Ow",
            choices10: {
                "a": "Woof",
                "b": "Meow",
                "c": "Ow Ow Ow",
                "d": "Croak"
            }


        },

        {
            //question 11
            trivia11: "What does the fox say?!",
            answer11: "",
            choices11: {
                "a": "",
                "b": "",
                "c": "",
                "d": ""
            }


        },



    ] ;

    console.log( question , "question")


    



    //functions to run game






    //functions to count wins/losses

    // restart();




})