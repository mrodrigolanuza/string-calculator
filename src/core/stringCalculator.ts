export function sumNumbers(expression){
    const nothingToSum = 0;

    if(isNull(expression))
        return nothingToSum;
    
    if(isEmpty(expression))
        return nothingToSum;
    
    if(isALetter(expression))
        return nothingToSum;

    if(containsCustomizedSeparatorPattern(expression)){
        return getElementsFromCustomizedSeparator(expression)
               .map(getNumber)
               .reduce(sum);
    }

    return getElementsSeparatedBy(expression, ',')
           .map(getNumber)
           .reduce(sum);
}

function containsCustomizedSeparatorPattern(expression){
    const regexp = /^\/.{2}\/.*$/;
    return regexp.test(expression);
}

function getNumber(element:string){
    const parsedElement = Number(element);
    return isNaN(parsedElement) ? 0 : parsedElement;
}

function sum(total, current){
    return total + current;
}

function getElementsFromCustomizedSeparator(expression:string){
    const splitCharacter = expression.charAt(2);
    const expressionCoreData = expression.substring(4);
    return expressionCoreData.split(splitCharacter)
}

function getElementsSeparatedBy(expression:string, separator:string){
    return expression.split(separator);
}

function isNull(expression:string){
    return expression === null;
}

function isEmpty(expression:string){
    return expression === '';
}

function isALetter(expression:string){
    const regex = /^[a-zA-Z]$/;
    return regex.test(expression);
}