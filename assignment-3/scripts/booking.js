/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let costPerDay = 35;
let dayCounter = 0;
let dayButtons = document.querySelectorAll(".day-selector li");
let clearDayButton = document.getElementById("clear-button");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let calculatedCost = document.getElementById("calculated-cost");
fullButton.classList.add("clicked");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
// dayButtons.addEventListener("click", dayButtonClickHandler)
for(let i =0;i<dayButtons.length;i++){
    dayButtons[i].addEventListener("click", dayButtonClickHandler)    
}
function dayButtonClickHandler(event){
    const button=event.target;
    if(!button.classList.contains("clicked")){
        button.classList.add("clicked");
        dayCounter++;
    }else{
        button.classList.remove("clicked");
        dayCounter--;
    }
    calculation();
};




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDayButton.addEventListener("click",clearButtonClickHandler)
function clearButtonClickHandler(){
    for(let i = 0; i<dayButtons.length;i++){
        dayButtons[i].classList.remove("clicked");
    }
    dayCounter = 0;
    calculation();
};




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener('click',halfButtonClickHandler)
function halfButtonClickHandler(){
    costPerDay = 20;
    fullButton.classList.remove("clicked");
    halfButton.classList.add("clicked");
    calculation()
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener('click',fullButtonClickHandler)
function fullButtonClickHandler(){
    costPerDay = 35;
    halfButton.classList.remove("clicked");
    fullButton.classList.add("clicked");
    calculation();
}


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculation(){
    let totalCost = dayCounter * costPerDay;
    calculatedCost.innerHTML = totalCost.toString();
}
