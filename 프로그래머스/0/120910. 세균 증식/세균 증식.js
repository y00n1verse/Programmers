function solution(n, t) {
    let virus = n
    for (let i = 1; i <= t; i++) {
        virus *= 2
    }
    return virus;
}