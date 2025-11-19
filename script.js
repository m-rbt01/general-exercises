function getDistinctCount(A){
    const uniqueValues = new Set();
    A.forEach((item) => uniqueValues.add(item));
    return uniqueValues.size;
}

function getRotatedArray(A, K){
    /*Slow solution
    for(let i = 0; i < K; i++){
        let lastItem = A.pop();
        A.unshift(lastItem);
    }
    return A;*/
    if(A.length === 0) return A;
    const size = A.length;
    const rotatedArray = new Array(size);
    A.forEach((item, index) => {
        let shiftIndex = (index + K) % size;
        rotatedArray[shiftIndex] = item;
    });
    return rotatedArray;
}

function getMaxProduct(A){
    A.sort((a, b) => a - b);
    let N = A.length;
    let lowEnd = A[0] * A[1] * A[N - 1];
    let highEnd = A[N - 1] * A[N - 2] * A[N - 3];
    return Math.max(lowEnd, highEnd);
}

function getOddOccurrence(A){
    let result = 0;
    A.forEach((item) => result ^= item);
    return result;
}

function getPermMissingElem(A){
    let N = A.length;
    let expectedSum = (N + 1) * (N + 2) / 2;
    let actualSum = A.reduce((sum, item) => sum + item, 0);
    return expectedSum - actualSum;
}

function getSmallestMissingElem(A){
    const positiveInts = new Set();
    A.forEach((item) => {
        if(item > 0) positiveInts.add(item);
    });
    let smallest = 1;
    while(true){
        if(!(positiveInts.has(smallest))) return smallest;
        else ++smallest;
    }
}

function getFirstUniqueElem(A){
    const elemInstances = new Map();
    /* Functional solution, BUT iterating through object doesn't guarantee array order
    A.forEach((num, index) => {
        if(elemInstances[num + "Item"]) elemInstances[num + "Item"].count += 1;
        else{
            elemInstances[num + "Item"] = {
                "count": 1,
                "index": index
            };
        }
    });
    for(let key in elemInstances){
        if(elemInstances[key].count === 1){
            let firstUnique = elemInstances[key].index;
            return A[firstUnique];
        }
    }*/

    //Ensures correct array order and cleaner code
    A.forEach((item) => {
        elemInstances.set(item, (elemInstances.get(item) || 0) + 1);
    });
    for(let i = 0; i < A.length; i++){
        if(elemInstances.get(A[i]) === 1) return A[i];
    }
    return -1;
}

function checkIsProperlyNested(S){
    const BRACKETS = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const openingBrackets = [];
    for(let c = 0; c < S.length; c++){
        if(S[c] in BRACKETS) openingBrackets.push(S[c]); //most inner opening at end of array
        else if(BRACKETS[openingBrackets.pop()] !== S[c]){ //if popped opening bracket key value doesn't match current closing bracket
            return 0;
        }
    }
    return (openingBrackets.length === 0) ? 1 : 0; //return 1 only of opening brackets are closed out
}

function getSymmetryPoint(S){
    if(S.length === 0 || S.length % 2 === 0) return -1;
    if(S.length === 1) return 0;
    const middle = Math.floor(S.length / 2);
    /*Functional solution, BUT time and space consuming for large strings 
    (array O(N) for each split, slice, and join)
    const sArray = S.split('');
    const leftSub = sArray.slice(0, middle);
    const rightSub = sArray.slice(middle + 1);
    leftSub.reverse();
    return (leftSub.join('') === rightSub.join('')) ? middle : -1;*/

    //Efficient solution: iterate through string UP UNTIL middle
    let left = 0;
    let right = S.length - 1;
    while(left < middle){
        if(S[left] !== S[right]) return -1;
        ++left;
        --right;
    }
    return middle;
}
