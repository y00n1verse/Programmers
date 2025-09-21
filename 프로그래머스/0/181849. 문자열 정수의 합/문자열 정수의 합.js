function solution(num_str) {
    let strArr = num_str.split("")
    let answer = strArr.reduce((acc, num) => acc + Number(num), 0)
    return answer;
}