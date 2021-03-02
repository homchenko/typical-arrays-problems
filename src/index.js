
exports.min = function min (array) {
    // обязательно (&& array.length > 0)
    if(array && array.length > 0){
        let minNum = array[0];
        for(let i = 0; i < array.length-1; i++){
            if(minNum > array[i+1]){
                minNum = array[i+1];
            }
        }
        return minNum;
    } else {
        return 0;
    }
}
//console.log(min(3,8,5));

exports.max = function max (array) {
    if(array && array.length > 0){
        let maxNum = array[0];
        for(let i = 0; i<array.length-1; i++){
            if(maxNum < array[i+1]){
                maxNum = array[i+1]
            }
        }
        return maxNum;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if(array && array.length > 0){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum+=array[i];
        }
        return sum/array.length;
        //return array.reduce((a, b) => (a + b)) / array.length;
    } else {
        return 0;
    }
}
