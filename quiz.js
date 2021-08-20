const quizForm = document.querySelector(".quiz-form");

const submitAnswerBtn = document.querySelector("#submit-button");

const outputDisplay = document.querySelector("#score-display");


const answers = ["90°", "right angled"];

function calculateScore ()
{

    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    for(let value of formResults.values())
    // .values  returns the value of a particular object; value= variable
    //whereas .enteries returns both the key:valu of the object
    {

if(value === answers[index])
{
    score = score + 1;
}

index = index + 1;
    }

console.log(score)
}

submitAnswerBtn.addEventListener('click', calculateScore);