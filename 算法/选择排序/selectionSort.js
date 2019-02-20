// 选择排序
function selectionSort(arr) {
    var minIndex, temp;
    for (var i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
const arr=[6,2,18,28,39,68,37];
console.log(selectionSort(arr));