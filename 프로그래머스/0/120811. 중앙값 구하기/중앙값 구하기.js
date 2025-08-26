function solution(array) {
    array.sort((a,b) => a - b)
    
    middleLength = (array.length - 1) / 2
    let answer = array[middleLength]
    
    return answer;
}