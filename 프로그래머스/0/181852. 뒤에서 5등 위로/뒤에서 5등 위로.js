function solution(num_list) {
    let sortedArr = num_list.sort((a,b) => a - b)
    let answer = sortedArr.slice(5)
    
    return answer;
}