const inputs = document.querySelectorAll(".angle");

const isTriangleBtn = document.querySelector("#check-button");

const outputDisplay = document.querySelector("#output");


// there will be various functions created for different operations

function calculateSumOfTriangles(angle1, angle2, angle3) {

    const sumOfAngles = angle1 + angle2 + angle3;

    return sumOfAngles;

}

function isTriangle() {

    const sumOfAngles = calculateSumOfTriangles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));


    // type conversion "Number"
    // inputs[0].value,inputs[1].value,inputs[2].value ,is the way we acess input values;

    if (sumOfAngles === 180) {

        showMessage("Wohooo,The given angles form a triangle");
               
    } else

    {

        showMessage("The given angles do not form a triangle ");

    }



}

isTriangleBtn.addEventListener("click", isTriangle);


function showMessage(display) {

    outputDisplay.innerText = display;

}