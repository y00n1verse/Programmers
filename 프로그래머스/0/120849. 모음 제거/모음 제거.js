function solution(my_string) {
    const vowels = ["a", "e", "i", "o", "u"];
    const strToArr = my_string.split('');
    const filteredArr = strToArr.filter(letter => !vowels.includes(letter));
    const result = filteredArr.join('');

    return result;
}