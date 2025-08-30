function solution(money) {
    let answer = [0, 0]
    
    americano_bottle = Math.floor(money / 5500);
    change = money - (americano_bottle * 5500);
    
    answer[0] += americano_bottle;
    answer[1] += change;
    return answer;
}