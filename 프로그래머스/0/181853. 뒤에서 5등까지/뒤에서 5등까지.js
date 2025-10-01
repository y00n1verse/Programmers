function solution(num_list) {
    sortedList = num_list.sort((a, b) => a - b)
    
    return sortedList.slice(0, 5)
}