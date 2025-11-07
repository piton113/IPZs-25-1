const sortedArr = [0, 4, 12, 67, 68, 91, 184, 341, 831, 956, 1000]

function binarySearch(arr, value) {
    if (!Array.isArray(arr) || arr.length === 0) return null

    let startIndex = 0
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)

        if (arr[midIndex] === value) return midIndex
        if (value < arr[midIndex]) endIndex = midIndex - 1
        else startIndex = midIndex + 1
    }

    return null
}

const a = binarySearch(sortedArr, 68)
console.log(a)
