module.exports = function longestConsecutiveLength(array) {
    if (array.length === 0 || array.length === 1) return array.length;
  
    var count = 1, 
        maxValue = 1;

    array.sort((a, b) => a - b);

    for (var i = 0; i < array.length - 1; i++) {
        var first = array[i],
            second = array[i + 1];

        if (first === second) continue;
        if (first === second - 1) count++;
        else (count = 1);
        
        maxValue = Math.max(count,maxValue);  
    }

    return maxValue;
}

