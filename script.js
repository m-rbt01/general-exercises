//--------------SOLUTIONS-------------------
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
    /*Functional solution with O(N log N) time complexity, fine for interviews BUT not the best for large arrays
    A.sort((a, b) => a - b); //sort array in ascending order
    let N = A.length;
    let lowEnd = A[0] * A[1] * A[N - 1]; //potential negatives/largest element product option
    let highEnd = A[N - 1] * A[N - 2] * A[N - 3]; //largest element product option
    return Math.max(lowEnd, highEnd); //return the larger product*/

    //Optimal solution with O(N) time complexity, no sorting the entire array, track 3 maximums and 2 minimums
    let maxOne = -Infinity, maxTwo = -Infinity, maxThree = -Infinity; //initial comparison for greater number
    let minOne = Infinity, minTwo = Infinity; //initial comparison for smaller number
    for(const num of A){
        if(num > maxOne){ //update new maximums
            maxThree = maxTwo;
            maxTwo = maxOne;
            maxOne = num;
        }
        else if(num > maxTwo){ //or update secondary maximums
            maxThree = maxTwo;
            maxTwo = num;
        }
        else if(num > maxThree) maxThree = num; // or update final maximum

        if(num < minOne){ //update new minimums
            minTwo = minOne;
            minOne = num;
        }
        else if(num < minTwo) minTwo = num; //or update final minimum
    }
    return Math.max(minOne * minTwo * maxOne, maxOne * maxTwo * maxThree); //return the greater product of the two options (negatives * largest OR largest * each other)
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
    //matching pairs for brackets 
    const BRACKETS = new Map([ 
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);
    const openingBrackets = []; //holds encountered opening brackets
    for(const bracket of S){
        if(BRACKETS.has(bracket)) openingBrackets.push(bracket); //most inner opening at end of stack (LIFO)
        else if((openingBrackets.length === 0) || (BRACKETS.get(openingBrackets.pop()) !== bracket)) return false; //if no openings encountered OR most inner opening bracket DOES NOT MATCH current closing bracket
    }
    return (openingBrackets.length === 0) ? true : false; //return true only if all opening brackets were closed out
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
    const activeBlocks = []; //represents reusable active blocks for height requirements
    let blockCount = 0;
    for(const currentHeight of H){
        while(activeBlocks.length > 0 && activeBlocks[activeBlocks.length - 1] > currentHeight) activeBlocks.pop(); //can't reuse active block for current smaller height requirement
        if(activeBlocks.length === 0 || activeBlocks[activeBlocks.length - 1] < height){ //if no active block exists OR active block is smaller than current height requirement
            activeBlocks.push(currentHeight); //add new active block of current height
            ++blockCount; //increment number of blocks needed
        }
    }
    return blockCount;
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

function getMinRemovedIntervalsCount(A){
    //sort intervals in ascending order based on their end values (earliest ends maximizes room for keeping future intervals)
    A.sort((currInterval, nextInterval) => currInterval[1] - nextInterval[1]);
    let count = 0;
    let lastEnd = A[0][1]; //start with the end of first interval
    for(let i = 1; i < A.length; i++){ //begin comparison at second interval
        if(A[i][0] < lastEnd) ++count; //removal needed when current end is smaller than previous end
        else lastEnd = A[i][1]; //update new end for next comparison
    }
    return count;
}

function getMergedIntervalsArray(A){
    //sort intervals in ascending order based on their start values (earliest starts minimizes overlapped intervals by keeping starts in order)
    A.sort((currentInterval, nextInterval) => currentInterval[0] - nextInterval[0]);
    const mergedArray = [[A[0][0], A[0][1]]]; //begin with first interval
    let write = 0; //current comparison interval
    for(let read = 1; read < A.length; read++){
        if(A[read][0] <= mergedArray[write][1]){ //if overlapped 
            let smallestStart = Math.min(A[read][0], mergedArray[write][0]); //find smallest start between current interval and previous merged
            let greatestEnd = Math.max(A[read][1], mergedArray[write][1]);  //find greatest end between current interval and previous merge
            mergedArray[write] = [smallestStart, greatestEnd]; //update previous merge with new interval range
        }
        else{
            mergedArray.push([A[read][0], A[read][1]]); //set interval to merged array
            ++write; //move write index upwards
        }
    }
    return mergedArray;
}

function checkCanAttendAllMeetings(A){
    //sort intervals in ascending order based on their start values (earliest starts minimizes overlapped meetings by keeping start times in order)
    A.sort((currentInterval, nextInterval) => currentInterval[0] - nextInterval[0]);
    for(let i = 1; i < A.length; i++){
        if(A[i][0] < A[i - 1][1]) return false; //once an overlap is encountered, not all meetings can be attended
    }
    return true;
}

function getCharReplacementsArray(A){
    const replacements = new Array(A.length); //replacement count for each word in A
    for(let word = 0; word < A.length; word++){
        let count = 0;
        let previousChar = A[word][0];
        for(let char = 1; char < A[word].length; char++){
            if(A[word][char] === previousChar){ //when adjacent duplicate encountered
                ++count; //one replacement needed
                previousChar = '#'; //dummy replacement character for future comparison
            }
            else previousChar = A[word][char]; //otherwise, update previous character for future comparison
        }
        replacements[word] = count; //set total count for the given word
    }
    return replacements;
}

function getMaxAlphaSubstring(S){
    let maxAlphaSubstr = '';
    let maxAlphaChar = S[0]; //first char is initial maximum alphabetical char
    for(let i = 0; i < S.length; i++){
        if(S[i] >= maxAlphaChar){ //when an lexicographically greater or equal character is encountered
            maxAlphaChar = S[i]; //update new maximum alphabetical char
            let currentSubstr = S.substring(i); //get substring from (i...end)
            if(currentSubstr > maxAlphaSubstr) maxAlphaSubstr = currentSubstr; //determine the lexicographically larger substring
        }
    }
    return maxAlphaSubstr;
}

function getMaxNumChildren(A, S){
    //Sort child greed levels and cookie sizes in ascending order: least greedy child gets the smallest possible cookie
    A.sort((currentGreed, nextGreed) => currentGreed - nextGreed);
    S.sort((currentSize, nextSize) => currentSize - nextSize);
    let satisfiedCount = 0;
    let childIndex = 0;
    let cookieIndex = 0;
    while(childIndex < A.length && cookieIndex < S.length){
        if(S[cookieIndex] >= A[childIndex]){ //when the smallest possible cookie satisfies a given child
            ++satisfiedCount; //increment count
            ++childIndex; //move on to the next child
        }
        ++cookieIndex; //move on to the next cookie
    }
    return satisfiedCount;
}

function getMinNumOfArrows(A){
    //Sort balloons in ascending order based on end values: ensures smallest end diameter shot reaches as many balloons nearest to it
    A.sort((currentBalloon, nextBalloon) => currentBalloon[1] - nextBalloon[1]);
    let arrowsCount = 1; //always begin with one shot for first balloon
    let previousBalloonEnd = A[0][1];
    for(let currentBalloon = 1; currentBalloon < A.length; currentBalloon++){
        if(A[currentBalloon][0] > previousBalloonEnd){ //if smallest balloon end so far IS NOT WITHIN RANGE of current balloon diameter
            ++arrowsCount; //shoot a new arrow for current balloon
            previousBalloonEnd = A[currentBalloon][1]; //move smallest balloon to current balloon
        }
    }
    return arrowsCount;
}

function Stack(){
    //Initial state
    this.mainStack = new Array(); //tracks all elements
    this.smallStack = new Array(); //tracks history of smallest elements in sequential order

    //Member functions
    this.push = function(num){
        this.mainStack.push(num); //insert new element
        //update smallest elements when main stack is empty or new num is the smallest so far
        if(this.smallStack.length === 0 || num <= this.smallStack[this.smallStack.length - 1]) this.smallStack.push(num);
    };
    this.pop = function(){
        let topElem = this.mainStack.pop();
        if(topElem === this.smallStack[this.smallStack.length - 1]) this.smallStack.pop(); //pop smallest element from its stack if needed
        return topElem;
    };
    this.top = function(){
        return this.mainStack[this.mainStack.length - 1];
    };
    this.getMinElem = function(){
        return this.smallStack[this.smallStack.length - 1];
    };
}

function getWarmerDaysArray(A){
    const days = new Array(A.length).fill(0); //holds the number of days after A[i] to get a warmer temperature, initial state for days is 0 
    const unresolvedDays = new Array(); //holds indices of unresolved day temperatures
    for(let i = 0; i < A.length; i++){
        //while there are unresolved days present AND current temperature is warmer than the most recent unresolved day temperature
        while(unresolvedDays.length > 0 && A[i] > A[unresolvedDays[unresolvedDays.length - 1]]){
            let topUnresolved = unresolvedDays.pop(); //remove the most recent unresolved day index
            days[topUnresolved] = i - topUnresolved; //set days at most recent unresolved index to the number of days until current warmest temperature
        }
        unresolvedDays.push(i); //track indices of unresolved days
    }
    return days;
}

function getMaxSlidingWindow(A, W){
    const maxSlidingWindow = []; //max nums of sliding window array
    const maxIndices = []; //indices monotonic decreasing deque
    let head = 0; //head of max indices
    for(let right = 0; right < A.length; right++){
        if(head < maxIndices.length && maxIndices[head] < right - W + 1) ++head; //remove max number outside current window by moving head upwards
        while(maxIndices.length > head && A[right] >= A[maxIndices[maxIndices.length - 1]]) maxIndices.pop(); //remove smaller elements from deque to maintain decreasing order (max is always at head)
        maxIndices.push(right);
        if(right >= W - 1) maxSlidingWindow.push(A[maxIndices[head]]); //update max sliding window with current window maximum 
    }
    return maxSlidingWindow;
}

function RecentCounter(){
    //Member properties
    this.requests = []; //holds all call requests: monotonic increasing queue
    this.timeFrame = 3000; //represents maximum timeframe for recent calls
    this.head = 0; //represents the head index of the oldest call within a given recent timeframe
    //Member functions
    this.ping = function(T){
        this.requests.push(T); //add new request 
        while(this.head < this.requests.length && this.requests[this.head] < (T - this.timeFrame)) this.head++; //move the head down the end until within the acceptable range
        return this.requests.length - this.head; //difference represents the number of requests
    };
}

function invertTree(root){
    if(root === null) return null; //reached end of branch, no further children
    invertTree(root.left); //recursive call all left children
    invertTree(root.right); //recursive call all right children
    [root.left, root.right] = [root.right, root.left]; //swap the most inner children
    return root; //return the updated node
}

function getMaxTreeDepth(root){
    if(root === null) return 0; //empty subtree has depth of 0
    let leftDepth = getMaxTreeDepth(root.left); //recursively track max left subtrees
    let rightDepth = getMaxTreeDepth(root.right); //recursively track max right subtrees
    return Math.max(leftDepth, rightDepth) + 1; //return the max subtree count plus current node
}

function getTreeHeight(root){
    if(root === null) return 0; //empty subtree has height of 0
    //recursively track max height of left subtrees
    let leftHeight = getTreeHeight(root.left); 
    if(leftHeight === -1) return -1; //encountered imbalanced height on left subtrees
    //recursively track max height of right subtrees
    let rightHeight = getTreeHeight(root.right);
    if(rightHeight === -1) return -1; //encountered imbalanced height on right subtrees
    //indicate a given node's height is imbalanced or return max subtree height plus current node
    if(Math.abs(leftHeight - rightHeight) > 1) return -1; 
    return Math.max(leftHeight, rightHeight) + 1; 
}
function checkIsTreeBalanced(root){
    return getTreeHeight(root) !== -1; //initial getTreeHeight() call gets balanced height or -1 indicating imbalanced height
}

function getStartingGasStation(gas, cost){
    let startingStation = 0; //initially first element index
    let gasTank = 0; //begin with an empty tank
    let totalGas = 0; //holds accumulated total gas across all stations
    let totalCost = 0; //holds accumulated total cost across all stations
    for(let i = 0; i < gas.length; i++){ //scan gas stations and cost only once
        totalGas += gas[i]; //accumulate running gas 
        totalCost += cost[i]; //accumulate running cost
        gasTank += gas[i] - cost[i]; //accumulate gas tank moving from current station to the next
        if(gasTank < 0){ //when a given station cannot move you to the next gas station
            startingStation = i + 1; //reset the starting position to the next station
            gasTank = 0; //reset your tank to an initial empty state
        }
    }
    return (totalCost > totalGas) ? -1 : startingStation; //when to total gas does not match the traveling cost, return -1 OR the successful starting index
}

function getLevelOrderValues(root){
    //Optimal BFS pre-order traversal solution
    if(root === null) return [];
    const levelOrderValues = []; //holds subarrays of level order node values
    const nodeQueue = [root]; //holds queue for first levels to traverse
    let head = 0; //head node of the queue
    while(head < nodeQueue.length){
        const currentLevel = [];
        const levelSize = nodeQueue.length - head; //fix size of current queue nodes
        for(let i = 0; i < levelSize; i++){ //for each node in the fixed current level size
            const currentNode = nodeQueue[head++]; //dequeue first node in queue
            currentLevel.push(currentNode.value); //push current node value to the current level of nodes
            if(currentNode.left !== null) nodeQueue.push(currentNode.left); //if there is a left subtree, add it to the queue
            if(currentNode.right !== null) nodeQueue.push(currentNode.right); //if there is a right subtree, add it to the queue
        }
        levelOrderValues.push(currentLevel); //push current level values to array
    }

    /*Same Solution but with custom Queue implementation: overcomplicated to implement queue during timed coding assessments
    const nodeQueue = new Queue();
    nodeQueue.enqueue(root);
    while(!nodeQueue.isEmpty()){
        const currentLevel = [];
        const size = nodeQueue.size();
        for(let i = 0; i < size; i++){
            const currentNode = nodeQueue.dequeue();
            currentLevel.push(currentNode.value);
            if(currentNode.left !== null) nodeQueue.enqueue(currentNode.left);
            if(currentNode.right !== null) nodeQueue.enqueue(currentNode.right);
        }
        levelOrderValues.push(currentLevel);
    }*/
    return levelOrderValues;
}

//-----------------CLASSES-----------------------
class TreeNode{
    constructor(value = 0, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Queue{
    //Private properties
    #items;
    #head;
    #tail;
    constructor(){
        this.#items = new Map(); //Map object organization of queue items
        this.#head = 0; //head key for first item
        this.#tail = 0; //tail key for last item
    }
    enqueue(item){
        if(item === undefined) return undefined;
        this.#items.set(this.#tail, item); //add new item to the back of queue
        this.#tail++; //update the tail position
    }
    dequeue(){
        if(this.isEmpty()) return undefined; //stop dequeue attempt if queue is empty
        const item = this.#items.get(this.#head);
        this.#items.delete(this.#head); //remove first item in queue
        if(this.isEmpty()){ //if queue is empty: reset head and tail position
            this.#head = 0;
            this.#tail = 0;
        }
        else this.#head++; //otherwise: update the head position
        return item; //return the removed item
    }
    front(){
        return (this.isEmpty()) ? undefined : this.#items.get(this.#head); //return first item without removing it
    }
    rear(){
        return (this.isEmpty()) ? undefined : this.#items.get(this.#tail - 1); //return last item without removing it
    }
    isEmpty(){
        return this.#items.size === 0;
    }
    size(){
        return this.#items.size;
    }
}
