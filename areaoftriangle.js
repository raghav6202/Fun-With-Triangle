
const areaInput = document.querySelectorAll(".area-input");

const calculateBtn = document.querySelector("#calculate-btn");

const outputDisplay = document.querySelector("#output-display");

function calculateProductOfSides (b,h)
{

    productOfSides = b * h;

return productOfSides;

}

function calculateAreaOfTriangle ()
{

const productOfSides = calculateProductOfSides( (Number(areaInput[0].value)) , (Number(areaInput[1].value)) );

areaOfTriangle = (1/2) * (productOfSides);

if( (isNaN(areaOfTriangle)) || (areaOfTriangle === 0) )
{

    outputDisplay.innerText = "Please enter valid input"

}
else
{

outputDisplay.innerText = " Area Of Triangle is " + areaOfTriangle;
}
}

calculateBtn.addEventListener("click", calculateAreaOfTriangle);
