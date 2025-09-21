function solution(num_list) {
    let length = num_list.length
    
    if (length >= 11) {
       return num_list.reduce((acc, cur) => acc + cur, 0)
    } else {
       return num_list.reduce((acc, cur) => acc * cur, 1) 
    }
}