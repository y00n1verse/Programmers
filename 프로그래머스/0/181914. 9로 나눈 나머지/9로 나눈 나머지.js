function solution(number) {
    let answer = 0;
    answer = number.split('').reduce((acc, cur) => acc + +cur, 0) % 9
    
    return answer;
}