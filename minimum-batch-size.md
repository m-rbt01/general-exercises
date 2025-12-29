# Problem
Given an array data-samples of N integers, representing data samples from several users, a machine learning pipeline will divide the data into batches of a specific size. You are also given an integer max batches, representing the limit for total batches of data samples. Return the minimum batch size.
* All data must be processed
* Multiple users' data cannot be combined for processing
* The number of batches cannot exceed a given max batches
```js
data-samples = [1, 5, 7], max-batches = 8
output: 2

explanation: A batch size of 1 results in a total batches of 13 (i.e. 1 + 5 + 7 = 13), which exceeds max-batches (i.e. 8). A batch size of 2 results in a total batches of 8 (i.e. ceil(1/2) = 1, ceil(5/2) = 3, ceil(7/2) = 4 -> 1 + 3 + 4 = 8), which is within the limit. Minimum batch size is 2.
```
* N is an integer between 1 - 200,000
* Max-batches is an integer between N - 1,000,000,000
* Each element in data-samples is an integer between 1 - 1,000,000,000

# Plan
* **UI** - command line
* **Input** - array data-samples of N integers, and integer max-batches
* **Output** - integer minimum batch size
* **Process** - _get array data-samples and integer max-batches > determine the middle batch size between 1...max-data > loop through data samples > get total batches w/batch size middle > evaluate if batch size needs to be shrunk or enlarged > repeat until minimum batch size is found > return minimum batch size_

# Algorithm
```js
FUNCTION: getMinBatchSize(dataSamples, maxBatches)
SET high size to first element of dataSamples
SET low size to 1
FOR each sample of dataSamples starting at:second element
    IF sample IS GREATER THAN right size THEN
        SET high size to sample
    ENDIF
ENDFOR
WHILE low size IS LESS THAN high size
    SET middle size to MATH FLOOR of (left + right size / 2)
    SET total batches to 0
    FOR each sample of dataSamples
        SET totalBatches to itself + MATH FLOOR of ((sample + middle size - 1) / 2) (i.e. integer arithmetic ceil division)
    ENDFOR
    IF total batches IS LESS THAN OR EQUAL TO maxBatches THEN
        SET high size to middle size
    ENDIF
    ELSE
        SET left size to middle size + 1
    ENDELSE
ENDWHILE
RETURN low size
```
