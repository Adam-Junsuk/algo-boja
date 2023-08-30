function solution(t, p) {
    var answer = 0;
    let pNum = p * 1
    let pLength = p.length
  
    let tArr = t.split('')
    
 
    for(i=0; i<tArr.length- pLength+1; i++){
        const limit = tArr.length
        let temp =[]
        temp.push(tArr[i])
        for(j=1; j<pLength; j++){
            temp.push(tArr[i+j])
        }
        
    let tempStr = temp.join('')
    
    if (tempStr <= p ){
        answer++
    }
    }
    
 
    return answer;
}