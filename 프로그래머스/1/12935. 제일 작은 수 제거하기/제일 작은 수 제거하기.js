function solution(arr) {
    let answer = []
    let minNum = Math.min(...arr)
    let idx = arr.indexOf(minNum)
    answer = arr.filter((num) => num !== minNum)  

    if (answer.length === 0) {
            answer = [-1];
        }
    
    return answer;
}