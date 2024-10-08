const quickSort = (arr) => {
    if (!arr.length) return [];

    const pivot = arr[arr.length - 1]; // choose the last item as a pivot item.
   
    // part the list into 2 parts so that the largest items are after the pivot item and the smaller items are before the pivot item.

    const left = [];
    const right = [];

    arr.forEach((item) => {
        if (item < pivot) {
            left.push(item);
        }
        if (item > pivot) {
            right.push(item);
        }
    });

    return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [2, 8, 14, 11, 7, 10];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [2, 7, 8, 10, 11, 14]
