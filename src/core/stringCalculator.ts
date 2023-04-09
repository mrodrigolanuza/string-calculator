export function sumNumbers(expression){
    
    if(isNull(expression))
        return 0;
    
    if(isEmpty(expression))
        return 0;
    
    if(isALetter(expression))
        return 0;

    const regexp = /^\/.{2}\/.*$/;
    if(regexp.test(expression)){
        const splitCharacter = expression.charAt(2);
        const relevantExpression = expression.substring(4);
        return relevantExpression.split(splitCharacter)
        .map((element) => isNaN(element) ? 0 : Number(element))
        .reduce((p, c)=> p + c);
    }

    const expressionElements = expression.split(',');
    return expressionElements
           .map((element) => isNaN(element) ? 0 : Number(element))
           .reduce((p, c)=> p + c);
}

function isNull(expression){
    return expression === null;
}

function isEmpty(expression){
    return expression === '';
}

function isALetter(expression){
    const regex = /^[a-zA-Z]$/;
    return regex.test(expression);
}