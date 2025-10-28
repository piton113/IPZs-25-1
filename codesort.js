function sorting(arrayToSort) {
    for (let j = 0; j < arrayToSort.length - 1; j++) {
        for (let i = j + 1; i < arrayToSort.length; i++) {
            if (arrayToSort[j] >= arrayToSort[i]) {
                let temp = arrayToSort[j];
                arrayToSort[j] = arrayToSort[i];
                arrayToSort[i] = temp;
            }
        }
    }
    return arrayToSort;
}

const sortedarrayToSort = sorting([2, 5, 2, 1, -9]);
console.log({ sortedarrayToSort });
