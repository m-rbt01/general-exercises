//Constants
const THREE = 3;
const FIVE = 5;

function getUserNum(){
    return parseInt(prompt("Please enter a number to reach:"));
}

function getCorrectOutput(num){
    let temp = `${num}`;
    if(num % THREE === 0 && num % FIVE === 0){
        temp = "Fizzbuzz";
    }
    else if(num % THREE === 0){
        temp = "Fizz";
    }
    else if(num % FIVE === 0){
        temp = "Buzz";
    }
    return temp
}

function fizzBuzzGame(){
    let userNum = getUserNum(); //Input

    if(userNum != null){ //Process 
        const numList = document.createElement('ul');
        numList.style.listStyleType = "none";

        for(let i = 1; i <= userNum; i++){
            const currentNum = document.createElement('li'); //create new list item of current number
            currentNum.textContent = getCorrectOutput(i); //get the correct output for the current number
            numList.appendChild(currentNum); //add current number output to the list
        }

        document.body.appendChild(numList); //add number list to the page document
    }
}

fizzBuzzGame();