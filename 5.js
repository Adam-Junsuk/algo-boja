function solution(food) {
    var answer = [];
    for (i = 1; i<food.length; i++){
        if(food[i]===1){
            console.log("출력1")
            continue;
        } else {
            for(j=0; j <= food[i] -2; j= j+2){
                answer.push(i)
                console.log("push")
            }
        }
    }
    let ans = answer
    ans.push(0)
    for (j= answer.length -2; j>=0; j--){
        ans.push(answer[j])   
    }
    
   
    
    return ans.join("");
}