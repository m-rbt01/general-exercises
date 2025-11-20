function add(num1, num2){
    output(num1 + num2);
}

function multiply(num1, num2){
    output(num1 * num2);
}

function capitalize(word){
    let temp = word.toLowerCase();
    output(temp[0].toUpperCase() + temp.substring(1));
}

function lastLetter(word){
    output(word.at(-1));
}

function output(value){
    const paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    paragraph.textContent = `Value: ${value}`;
}