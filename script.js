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

function getCompressedLength(A){
    let readPoint = 0;
    let writePoint = 0
    while(readPoint < A.length){
        let char = A[readPoint]; //current character
        let count = 0; //initial count
        while(readPoint < A.length && A[readPoint] === char){ //through A until end OR non-repeating char encountered
            ++readPoint;
            ++count;
        }
        A[writePoint++] = char; //rewrite A beginning with current char then moving to next write point
        if(count > 1){ //if current character has > 1 instance
            for(const digit of count.toString()){    
                A[writePoint++] = digit; //insert digit
            }
        }
    }
    return writePoint; //return new length
}

function getMinBlockCount(H){
    const blocks = [];
    let count = 0;
    H.forEach((height) => {
        while(blocks[blocks.length - 1] > height) blocks.pop();
        if(blocks.length === 0 || blocks[blocks.length - 1] < height){
            blocks.push(height);
            ++count;
        }
    });
    return count;
}

function getPassingPairs(A){
    const MAX_COUNT = 1000000000;
    let count = 0;
    let eastCars = 0;
    /*Functional Solution BUT only for small arrays,
    O(N**2) cause of nested loop is slow for large arrays
    A.forEach((car, index) => {
        if(!car){
            for(let c = index + 1; c < A.length; c++){
                if(A[c]) ++count;
            }
        }
    });*/

    //Efficient solution: Loop only once, track east cars, add to count on west car encounter
    for(const car of A){
        if(!car) ++eastCars;
        else count += eastCars;
        if(count > MAX_COUNT) return -1;
    }
    return count;
}

function getMinimalDifference(A){
    if(A.length === 2) return Math.abs(A[0] - A[1]);
    let totalSum = A.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    let minimalDiff = Infinity;
    for(let i = 0; i < A.length - 1; i++){
        leftSum += A[i];
        const rightSum = totalSum - leftSum;
        const difference = Math.abs(leftSum - rightSum);
        if(difference < minimalDiff) minimalDiff = difference;
    }
    return minimalDiff;
}

function getMinimalDays(D, X){
    if(D.length === 1) return 1;
    let days = 1; //start at day 1
    let minDifficulty = D[0];
    let maxDifficulty = D[0];
    for(let i = 1; i < D.length; i++){
        minDifficulty = Math.min(minDifficulty, D[i]); //smallest is min or current
        maxDifficulty = Math.max(maxDifficulty, D[i]); //largest is max or current
        if(maxDifficulty - minDifficulty > X){ //exceeds max difference
            ++days; //start a new day
            minDifficulty = D[i];
            maxDifficulty = D[i];
        }
    }
    return days;
}

function getTwoSum(A, X){
    const complements = new Map();
    for(let i = 0; i < A.length; i++){
        let complement = X - A[i];
        if(complements.has(complement)) return [complements.get(complement), i];
        complements.set(A[i], i);
    }
}

function checkIsDuplicate(A){
    /*Functional solution, BUT unnecessary counting
    const occurrences = new Map();
    for(let i = 0; i < A.length; i++){
        occurrences.set(A[i], (occurrences.get(A[i]) || 0) + 1);
        if(occurrences.get(A[i]) > 1) return true;
    }
    return false;*/
    
    //Easier to read solution (same time/space complexity): use sets for tracking uniques/duplicates
    const encountered = new Set();
    for(let i = 0; i < A.length; i++){
        if(encountered.has(A[i])) return true;
        encountered.add(A[i]);
    }
    return false;
}

function checkIsAnagram(S, T){
    if(S.length !== T.length) return false;
    const occurrences = new Map();
    for(let c = 0; c < S.length; c++){
        occurrences.set(S[c], (occurrences.get(S[c]) || 0) + 1);
    }
    for(let c = 0; c < T.length; c++){
        if(!occurrences.has(T[c])) return false;
        occurrences.set(T[c], occurrences.get(T[c]) - 1);
        if(occurrences.get(T[c]) < 0) return false;
    }
    return true;
}
