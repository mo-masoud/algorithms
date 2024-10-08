const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    // split the array into 2 halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // recursively sort each half
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    // merge the sorted halves
    return merge(leftSorted, rightSorted);
}

const merge = (left, right) => {
    let sortedArray = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}


const arr = [5, 3, 8, 6, 2, 7, 4, 1];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5, 6, 7, 8]