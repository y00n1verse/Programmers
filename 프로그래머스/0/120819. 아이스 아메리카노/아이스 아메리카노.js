function solution(money) {
    let answer = []
    
    americano_bottle = Math.floor(money / 5500);
    change = money - (americano_bottle * 5500);
    
    answer.push(americano_bottle);
    answer.push(change);
    
    return answer;
}