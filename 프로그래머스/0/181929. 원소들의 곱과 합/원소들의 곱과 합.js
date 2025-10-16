function solution(num_list) {
    let multiply = num_list.reduce((acc, cur) => acc * cur, 1);
    let sum = num_list.reduce((acc, cur) => acc + cur, 0);
    
    return multiply < sum * sum ? 1 : 0;
}