// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let valueOfH = 0;
    let valueOfQ = 0;
    let valueOfD = 0;
    let valueOfN = 0;
    let valueOfP = 0;
    let faceValueOfH = 50;
    let faceValueOfQ = 25;
    let faceValueOfD = 10;
    let faceValueOfN = 5;
    let faceValueOfP = 1;
    let answer={};
    let errorObject = {error:"You are rich, my friend! We don't have so much coins for exchange"}
    if(currency > 10000 ){
        return errorObject;
    }
    if(currency < 0){
        return answer;
    }
    while(currency !== 0){
        if(currency - faceValueOfH >= 0){
            currency -= faceValueOfH;
            valueOfH++;
        }else if(currency - faceValueOfQ >= 0){
            currency -= faceValueOfQ;
            valueOfQ++;
        }else if(currency - faceValueOfD >= 0){
            currency -= faceValueOfD;
            valueOfD++;
        }else if(currency - faceValueOfN >= 0){
            currency -= faceValueOfN;
            valueOfN++;
        }else if(currency - faceValueOfP >= 0){
            currency -= faceValueOfP;
            valueOfP++;
        }
    }
    if(valueOfH !== 0){
        answer.H = valueOfH;
    }
    if(valueOfQ !== 0){
        answer.Q = valueOfQ;
    }
    if(valueOfD !== 0){
        answer.D = valueOfD;
    }
    if(valueOfN !== 0){
        answer.N = valueOfN;
    }
    if(valueOfP !== 0){
        answer.P = valueOfP;
    }
    return answer;

}