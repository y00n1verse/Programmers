function solution(num_list) {
    let odd = 0
    let even = 0
    
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 1) {
            odd += num_list[i]
        } else {
            even += num_list[i]
        }
    }
    
    if (odd > even) {
        return odd;
    } else if ( odd < even) {
        return even;
    } else {
        return odd || even;
    }
    var answer = 0;
    return answer;
}