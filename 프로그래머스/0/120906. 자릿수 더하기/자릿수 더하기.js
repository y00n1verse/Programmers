function solution(n) {
    let answer = 0;
    let nToStr = String(n);
    let strToArr = nToStr.split('');
    
    for (let i=0; i < strToArr.length; i++) {
        answer += Number(strToArr[i])
    }
    return answer;
}