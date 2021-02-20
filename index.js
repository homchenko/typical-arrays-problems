
exports.min = function min (array) {
    if(array !== null){
        let min = array[0];
        for(let i = 0; i<array.length-1; i++){
            if(min > array[i+1]){
                min = array[i+1]
            }
        }
        return min;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if(array !== null){
        let max = array[0];
        for(let i = 0; i<array.length-1; i++){
            if(max < array[i+1]){
                max = array[i+1]
            }
        }
        return max;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if(array !== null){
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum+=array[i];
        }
        return sum/array.length;
        
    } else {
        return 0;
    }
}
