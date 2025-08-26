function solution(array) {
    array.sort((a,b) => a - b)
    median = array[(array.length - 1) / 2]
    
    return median;
}