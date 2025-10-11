function solution(n)
{
    let answer = 0;
    nArr = String(n).split('')
    answer = nArr.reduce((acc, cur) => acc + +cur, 0)

    return answer;
}