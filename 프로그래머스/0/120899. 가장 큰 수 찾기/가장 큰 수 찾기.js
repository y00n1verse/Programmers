function solution(array) {
    let result = []
    
    copiedArray = array.slice()
    sortedArray = copiedArray.sort((a,b) => b-a);
    
    for (let i = 0; i < array.length; i++) {
        if (sortedArray[0] === array[i]) {
            result.push(sortedArray[0])
            result.push(i)
        }
    }
    return result;
}