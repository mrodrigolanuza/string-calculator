export function sumNumbers(expression){
    
    if(expression === null)
        return 0;
    
    if(expression === '')
        return 0;
    
    const regex = /^[a-zA-Z]$/;
    if(regex.test(expression))
        return 0;

    if(expression.includes(',')){
         const numerosArray = expression.split(",");
         return numerosArray.reduce((total, num) => {
            const regex = /^[0-9]$/;
            if(regex.test(num))
                return (total + Number(num));
            return total;
        }, 0);
    }
    
    return Number(expression);
}