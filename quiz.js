const quizForm = document.querySelector(".quiz-form");

const submitAnswerBtn = document.querySelector("#submit-button");

const outputDisplay = document.querySelector("#score-display");

const userName = document.querySelector("#user-name")

const answers = ["90°", "right angled" , "Isosceles triangle" , "45°" , "one right angle"];

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

    displayMessage(  "Yayyy!! " + userName.value + ' \n' + " Your Total Score is " +  score); 
}

submitAnswerBtn.addEventListener('click', calculateScore);


function displayMessage (show)
{

    outputDisplay.innerText = show;
   

}
//add enter name option