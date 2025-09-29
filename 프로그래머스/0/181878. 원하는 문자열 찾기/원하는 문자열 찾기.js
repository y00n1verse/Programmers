function solution(myString, pat) {
    const smallStr = myString.toLowerCase();
    const smallPat = pat.toLowerCase();
    
    return smallStr.indexOf(smallPat) >= 0 ? 1 : 0
}