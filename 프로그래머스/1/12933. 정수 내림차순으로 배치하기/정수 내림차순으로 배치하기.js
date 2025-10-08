function solution(n) {
    let ntoArr = String(n).split("")
    let answer = +ntoArr.sort((a,b) => b - a).join("")
    
    return answer;
}