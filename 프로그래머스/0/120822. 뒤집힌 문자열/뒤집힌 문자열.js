function solution(my_string) {
    const strToArr = my_string.split('')
    const reverseArr = strToArr.reverse()
    
    const answer = reverseArr.join('')
    
    return answer;
}