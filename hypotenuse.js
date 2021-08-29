
const sideInput = document.querySelectorAll(".value-input");

const  hypotenuseBtn = document.querySelector("#hypotenuse-btn");

const outputDisplay = document.querySelector("#output-display");


function calculateSquareOfSum (a,b) 
{

    const sumOfSquares = a*a + b*b ;

  return sumOfSquares;

}

function calculateHypotenuse ()
{

   const sumOfSquares = calculateSquareOfSum(Number(sideInput[0].value),Number(sideInput[1].value));


  const lengthOfHypo = Math.sqrt(sumOfSquares);

  if( (isNaN(lengthOfHypo)) || (lengthOfHypo === 0))
 
  {

displayMessage("Please enter a valid input")
  }
// if string or 0  is entered instead of number.
  else
  {
 
 displayMessage( "The Length Of The Hypotenuse Is = " +  lengthOfHypo);
}

 

}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);


function displayMessage(show)
{

    outputDisplay.innerText = show;

}