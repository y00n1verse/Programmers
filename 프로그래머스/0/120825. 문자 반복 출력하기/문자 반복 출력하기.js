function solution(my_string, n) {
    let strToArr = my_string.split('');
    let repeatStr = '';
    
    for (let i=0; i < my_string.length; i++) {
        repeatStr += strToArr[i].repeat(n)
    }

    return repeatStr;
}