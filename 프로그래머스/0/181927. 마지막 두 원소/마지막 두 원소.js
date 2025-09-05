function solution(num_list) {
    let lastEl = num_list[num_list.length -1];
    let previousEl = num_list[num_list.length -2];
    
    if (lastEl > previousEl) {
        num_list.push(lastEl - previousEl)
    } else {
        num_list.push(lastEl * 2)
    }
    return num_list;
}