function solution(a, b) {
    let sum = String(a) + String(b)
    let reverseSum = String(b) + String(a)
    return sum > reverseSum ? +sum : +reverseSum
}