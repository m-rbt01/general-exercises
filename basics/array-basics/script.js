function sumTripledEvenNums(numArr){
    return numArr.filter(currentNum => currentNum % 2 === 0) 
    .map(currentEvenNum => currentEvenNum * 3)
    .reduce((totalSum, currentTripled) => totalSum + currentTripled, 0);
}

function toCamelCase(str){
    let noDashesArr = str.split('-');
    let camelCaseArr = noDashesArr.map((currentStr, index) => {
        if(index == 0) return currentStr;
        return currentStr[0].toUpperCase() + currentStr.substring(1);
    });
    let camelCaseStr = camelCaseArr.join('');
    return camelCaseStr;
}

function filterRangeInPlace(arr, min, max){
    for(let index = 0; index < arr.length; index++){ 
        if(arr[index] < min || arr[index] >  max){
            arr.splice(index, 1);
            --index;
        }
    }
}

function sortDescending(arr){
    arr.sort((currentElem, nextElem) => nextElem - currentElem);
}

function sortAscending(arr){
    arr.sort((currentElem, nextElem) => currentElem - nextElem);
}

function copySorted(arr){
    return arr.slice().sort();
}

function shuffleArray(arr){
    for(let currentIndex = arr.length - 1; currentIndex > 0; --currentIndex){
        let randomIndex = Math.floor(Math.random() * (currentIndex + 1));
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
}

function getUniqueArray(arr){
    let uniqueArr = [];
    arr.forEach((currentStr) => {
        if(!(uniqueArr.includes(currentStr))) uniqueArr.push(currentStr);
    });
    return uniqueArr;
}

function setChessBoard(rows, cols){
    let arr = [];
    const HASH = '#';
    const DOLLAR = '$';
    for(let r = 0; r < rows; r++){
        arr[r] = [];
        if(r % 2 === 0){
            for(let c = 0; c < cols; c++){
                if(c % 2 === 0) arr[r][c] = HASH;
                else arr[r][c] = DOLLAR;
            }
        }
        else{
            for(let c = cols - 1; c >= 0; c--){
                if(c % 2 === 0) arr[r][c] = DOLLAR;
                else arr[r][c] = HASH;
            }
        }
    }
    return arr;
}