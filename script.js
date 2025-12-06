function getDistinctCount(A){
    const uniqueValues = new Set();
    A.forEach((item) => uniqueValues.add(item)); //record unique numbers
    return uniqueValues.size; //return the total number of unique numbers
}

function getRotatedArray(A, K){
    /*Slow solution
    for(let i = 0; i < K; i++){
        let lastItem = A.pop();
        A.unshift(lastItem);
    }
    return A;*/
    if(A.length === 0) return A;
    const rotatedArray = new Array(A.length); //new array same size as A
    A.forEach((item, index) => {
        let shiftIndex = (index + K) % A.length; //modulus ensures wrapping for new index
        rotatedArray[shiftIndex] = item; //set shifted array
    });
    return rotatedArray;
}

function getMaxProductOfThree(A){
    A.sort((a, b) => a - b); //sort array in ascending order
    let N = A.length;
    let lowEnd = A[0] * A[1] * A[N - 1]; //potential negatives/largest element product option
    let highEnd = A[N - 1] * A[N - 2] * A[N - 3]; //largest element product option
    return Math.max(lowEnd, highEnd); //return the larger product 
}

function getOddOccurrenceElem(A){
    let result = 0;
    A.forEach((item) => result ^= item); //Bitwise XOR comparison of running result and current num 
    return result; //odd occurrence outlasts comparisons
}

function getPermMissingElem(A){
    let N = A.length + 1;
    let expectedSum = (N) * (N + 1) / 2; //summation formula gets expected total sum
    let actualSum = A.reduce((sum, item) => sum + item, 0); //get sum of all elements present in array
    return expectedSum - actualSum; //get the missing element
}

function getSmallestMissingElem(A){
    const positiveInts = new Set(); //holds unique positive numbers in array
    A.forEach((item) => {
        if(item > 0) positiveInts.add(item);
    });
    let smallest = 1; //smallest positive number that's possible
    while(true){
        if(!positiveInts.has(smallest)) return smallest; //stops at smallest missing positive number
        else ++smallest; //increment smallest number comparison
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
        elemInstances.set(item, (elemInstances.get(item) || 0) + 1); //record occurrences of numbers
    });
    for(let i = 0; i < A.length; i++){
        if(elemInstances.get(A[i]) === 1) return A[i]; //return first element w/one occurrence
    }
    return -1;
}

function checkIsProperlyNested(S){
    const BRACKETS = { //matching pairs for brackets 
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const openingBrackets = []; //holds encountered opening brackets
    for(let c = 0; c < S.length; c++){
        if(S[c] in BRACKETS) openingBrackets.push(S[c]); //most inner opening at end of array
        else if(BRACKETS[openingBrackets.pop()] !== S[c]){ //if popped opening bracket's matching pair doesn't match current closing bracket
            return 0; //not properly nested
        }
    }
    return (openingBrackets.length === 0) ? 1 : 0; //return 1 only if all opening brackets were closed out
}

function getStrSymmetryPoint(S){
    if(S.length === 0 || S.length % 2 === 0) return -1; //symmetry point not possible with empty or even length string
    if(S.length === 1) return 0; //single character is already symmetry point
    const middle = Math.floor(S.length / 2); //represents middle index of string
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
    while(left < middle){ //iterate up until middle is reached from both ends
        if(S[left] !== S[right]) return -1; //stop when characters do not match on opposite ends
        ++left;
        --right;
    }
    return middle;
}

function getCompressedStrLength(A){
    let readPoint = 0;
    let writePoint = 0;
    while(readPoint < A.length){
        let char = A[readPoint]; //current character
        let count = 0; //initial count
        while(readPoint < A.length && A[readPoint] === char){ //loop through A until end OR non-repeating char encountered
            ++readPoint;
            ++count;
        }
        A[writePoint++] = char; //rewrite A beginning with current char then moving to next write point
        if(count > 1){ //if current character has more than 1 instance
            for(const digit of count.toString()){    
                A[writePoint++] = digit; //insert digit
            }
        }
    }
    return writePoint; //return new length
}

function getMinBlockCount(H){
    const blocks = []; //represents reusable active blocks for height requirements
    let count = 0;
    H.forEach((height) => {
        while(blocks[blocks.length - 1] > height) blocks.pop(); //can't reuse active block for current smaller height requirement
        if(blocks.length === 0 || blocks[blocks.length - 1] < height){ //if no active block exists OR active block is smaller than current height requirement
            blocks.push(height); //add new active block of current height
            ++count; //increment number of blocks needed
        }
    });
    return count;
}

function getPassingCarsCount(A){
    const MAX_COUNT = 1000000000; //maximum count of passing car pairs
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
        if(!car) ++eastCars; //record occurrences of east cars (i.e. zero elements)
        else count += eastCars; //current west car (i.e. one element) pairs with all previous east cars
        if(count > MAX_COUNT) return -1; //stop count if it exceeds max count
    }
    return count;
}

function getMinSubarrayDifference(A){
    if(A.length === 2) return Math.abs(A[0] - A[1]); //only one difference for array size of 2 elements
    let totalSum = A.reduce((sum, num) => sum + num, 0); //get total sum of all elements
    let leftSum = 0;
    let minimalDiff = Infinity; //Initial minimum for first comparison
    for(let i = 0; i < A.length - 1; i++){
        leftSum += A[i]; //accumulate running left subarray sum
        const rightSum = totalSum - leftSum; //get new right subarray sum as left moves up
        const difference = Math.abs(leftSum - rightSum); //get absolute difference
        if(difference < minimalDiff) minimalDiff = difference; //determine smallest difference so far
    }
    return minimalDiff;
}

function getMinMissionDays(D, X){
    if(D.length === 1) return 1;
    let days = 1; //start at day 1
    let minDifficulty = D[0];
    let maxDifficulty = D[0];
    for(let i = 1; i < D.length; i++){
        minDifficulty = Math.min(minDifficulty, D[i]); //smallest is min or current num
        maxDifficulty = Math.max(maxDifficulty, D[i]); //largest is max or current num
        if(maxDifficulty - minDifficulty > X){ //exceeds max difference
            ++days; //start a new day
            minDifficulty = D[i];
            maxDifficulty = D[i];
        }
    }
    return days;
}

function getTwoSumIndices(A, X){
    const complements = new Map(); //holds complements that when sum w/A[i] = X
    for(let i = 0; i < A.length; i++){
        let complement = X - A[i]; //X - current number provides the needed complement
        if(complements.has(complement)) return [complements.get(complement), i]; //if encountered, return indices
        complements.set(A[i], i); //otherwise, map number w/index
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
        if(encountered.has(A[i])) return true; //duplicate exists
        encountered.add(A[i]); //otherwise, record encountered numbers
    }
    return false;
}

function checkIsAnagram(S, T){
    if(S.length !== T.length) return false; //not possible if not same length
    const occurrences = new Map();
    for(let c = 0; c < S.length; c++){
        occurrences.set(S[c], (occurrences.get(S[c]) || 0) + 1); //record instances of characters in S
    }
    for(let c = 0; c < T.length; c++){
        if(!occurrences.has(T[c])) return false; //stop when first unmatched character is encountered from T
        occurrences.set(T[c], occurrences.get(T[c]) - 1); //decrement occurrences from S as they are found in T
        if(occurrences.get(T[c]) < 0) return false; //stop when T has more occurrences than S
    }
    return true;
}

function getGroupAnagram(A){
    const groups = new Map();
    const CHAR_OFFSET = 97; //ASCII code offset for lowercase letters
    for(const word of A){
        const occurrences = new Array(26).fill(0); //holds occurrences for each lowercase english letter
        for(const char of word){
            ++occurrences[char.charCodeAt(0) - CHAR_OFFSET]; //count occurrences of each char in word
        }
        const anagramKey = occurrences.join('#'); //anagrams share same occurrences
        if(!groups.has(anagramKey)) groups.set(anagramKey, []); //initialize anagram group with empty array
        groups.get(anagramKey).push(word); //add words to corresponding anagram group
    }
    return Array.from(groups.values()); //get array of anagram array groups
}

function getMajorityElem(A){
    /*Function solution O(N) time, BUT not space optimal O(N) map increases with N size (required for problem)
    const occurrences = new Map();
    const MAJORITY_COUNT = A.length / 2;
    for(const num of A){
        occurrences.set(num, (occurrences.get(num) || 0) + 1);
        if(occurrences.get(num) > MAJORITY_COUNT) return num;
    }*/

    //Space optimal solution O(1): use counter instead of map
    let majorityElem = null; 
    let count = 0;
    for(const num of A){
        if(count === 0){
            majorityElem = num; //new candidate begins
            count = 1;
        }
        else if(num === majorityElem) ++count; //increment its sequential occurrences
        else --count; //decrement when unmatched pair is encountered
    }
    return majorityElem; //majority element's count outlast any cancellations
}

function getSubarraySumCount(A, K){
    const prefixSum = new Map([
        [0, 1]
    ]); //map holding existing prefix sums that represent checkpoints from then to current sum which adds up to K
    let count = 0; 
    let currentSum = 0;
    for(const num of A){
        currentSum += num;
        if(prefixSum.has(currentSum - K)) count += prefixSum.get(currentSum - K); //when existing prefix sum is found, increment the count
        prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1); //increment occurrences of prefix sums (negative elements may cause multiple occurrences)
    }
    return count; 
}

function getMinSubarraySumSize(A, T){
    let sum = 0;
    let left = 0;
    let minimalSize = Infinity; //compare with Infinity to initialize first subarray size
    for(let right = 0; right < A.length; right++){
        sum += A[right]; //accumulate subarray sum
        while(sum >= T){ //once a subarray sum is >= to target
            minimalSize = Math.min(minimalSize, right - left + 1) //determine if it's smaller than previous minimum size
            sum -= A[left]; //shrink sum by subtracting leftmost sum
            ++left; //shrink window by moving left upwards
        }
    }
    return (minimalSize === Infinity) ? 0 : minimalSize; 
}

function getRangeSum(A, left, right){
    const prefixSum = new Array(A.length); 
    prefixSum[0] = A[0];
    for(let i = 1; i < A.length; i++){
        prefixSum[i] = prefixSum[i - 1] + A[i]; //set prefix sum up until current index
    }
    return (left === 0) ? prefixSum[right] : prefixSum[right] - prefixSum[left - 1]; //return prefix sum up within given range
}

function getNonZeroArray(A){
    /* OPTIMAL SOLUTION w/ O(N) time and O(1) space complexity, avoids unnecessary swaps but with non-standard naming
    let nonZeroIndex = -1;
    for(let j = 0; j < A.length; j++){
        if(A[j] !== 0){
            ++nonZeroIndex;
            if(nonZeroIndex !== j){
                A[nonZeroIndex] = A[j];
                A[j] = 0;
            }
        }
    }
    return A;*/

    //Same optimal solution but always swaps (using destructuring syntax [a, b] = [b, a]) and has standard naming
    let writeIndex = 0;
    for(let readIndex = 0; readIndex < A.length; readIndex++){
        if(A[readIndex] !== 0){ //when current element is NOT zero
            [A[writeIndex], A[readIndex]] = [A[readIndex], A[writeIndex]]; //swap non-zero element with the leftmost write index
            ++writeIndex;
        }
    }
    return A;
}

function getUniqueArraySize(A){
    let writeIndex = 1; //start at second element, first element is guaranteed
    for(let readIndex = 1; readIndex < A.length; readIndex++){
        if(A[readIndex] !== A[writeIndex - 1]){ //if current number IS NOT the last unique number
            A[writeIndex] = A[readIndex]; //move new unique to leftmost index
            ++writeIndex; //move leftmost index upwards
        }
    }
    return writeIndex;
}

function getMaxUniqueSubstrSize(S){
    let left = 0;
    let maxSize = 0;
    const encountered = new Map(); //map of characters and their last encountered index
    for(let right = 0; right < S.length; right++){
        if(encountered.has(S[right]) && encountered.get(S[right]) >= left){ //if duplicate is found and within current window
            left = encountered.get(S[right]) + 1; //shorten window by moving left in front of char's previous index
        }
        encountered.set(S[right], right); //update index of encountered char
        maxSize = Math.max(maxSize, right - left + 1); //update max size to the largest substring size so far
    }
    return maxSize;
}

function getSubarrayProdCount(A, K){
    if(K <= 1) return 0; //no subarray exists if K <= 1 since A[i] is always >= 1
    let left = 0;
    let currProduct = 1; //beginning with one element needs to result in itself for product
    let count = 0;
    for(let right = 0; right < A.length; right++){
        currProduct *= A[right]; //accumulate product from left - right
        while(currProduct >= K && left <= right){ //shrink window when product >= K without going past right
            currProduct /= A[left]; //remove left most product to shrink product
            ++left; //shrink window to reflect shrunken product (needs to increment beyond right by 1 in case no valid subarrays exist so far)
        }
        count += (right - left + 1); //total # of valid subarrays up until right is always # of elements within each subarray
    }
    return count;
}
