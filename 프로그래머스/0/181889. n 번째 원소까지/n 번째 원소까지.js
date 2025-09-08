function solution(num_list, n) {
    let answer = [];
    
    for (let i = 1; i <= n; i++) {
        answer.push(num_list[i-1]);
    }
    return answer;
}