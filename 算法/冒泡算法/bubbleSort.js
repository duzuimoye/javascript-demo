    // 冒泡算法
    function bubbleSort() {
        for (var i = 0;i <= arr.length; i++){
            for(var j = 0; j<= arr.length -1 -i; j++){
                if(arr[j] > arr[j+1]){
                    var temp = arr[j+1];
                    arr[j +1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr
    }
    const arr=[6,2,18,28,39,68,37];
    console.log(bubbleSort(arr));

    // const arr2 = arr.sort((a,b) => a-b);
    // console.log(arr2);