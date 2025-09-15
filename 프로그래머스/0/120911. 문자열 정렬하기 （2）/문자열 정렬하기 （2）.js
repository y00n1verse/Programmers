function solution(my_string) {
    let smallLetterArr = my_string.toLowerCase().split("");
    let answer = smallLetterArr.sort().join("")
    
    return answer;
}