
// 快排
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const flag = arr[0]
    const left = []
    const right = []
    for(let i=1;i<arr.length;i++) {
        if (flag > arr[i]) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([flag]).concat(quickSort(right))
}
// console.log('qq--', quickSort([5,10,3,4,2,6,7,9]))
// 快排优化
function test(arr) {
    if (arr.length<= 1) return arr
    console.log('init--', arr)
    const flag = arr[0]
    let i = 1
    let j = arr.length - 1
    while(i<j) {
        while(i<j&& flag >= arr[i]) {
            i++
        }
        while(i<j && flag <= arr[j]) {
            j--
        }
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        console.log(i,j, arr)
    }
    let temp = arr[0]
    arr[0] = arr[j]
    arr[j] = temp
    console.log(i,j, arr)
    return test(arr.slice(0,i)).concat([flag]).concat(test(arr.slice(j+1)))
}
// console.log('--', test([5,3,2,1,4]))


// 二分搜索, 在有序的数据里找一个元素
function search(arr, item) {
    let left = 0
    let right = arr.length - 1
    let mid
    let ele
    while(left<=right) {
        mid = Math.floor((left+right)/2) // 取到中间下标，(0+15)/2=7
        ele = arr[mid] // 获取值 9
        if (ele<item) { // 如果14>9，代表需要查找的元素 在7的后面
            left = mid + 1 // 则把left下标位置控制到8开始
        } else if (ele>item) { // 如果 14<9，代表需要查询的元素 在9的前面
            right = mid - 1 // 则把right下标位置控制到8结尾
        } else {
            console.log('找到下标位置：', mid)
            return mid
        }
    }
    return -1
}

console.log(search([1,2,3,4,5,6,7,9,12,13,14,15,18,20,22,24], 14))