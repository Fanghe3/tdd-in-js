function add (inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result + input;
    })
    return isNaN(res) ? "Error" : res;
}

function subtract(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result - input;
    })
    return isNaN(res) ? "Error" : res;
}
/*
function divide(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result / input;
    });
    return (res === Infinity) ? "Cannot Divide By Zero" : isNaN(res) ? "Error" : res;
} */

function multiple(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result * input;
    });
    return isNaN(res) ? "Error" : res;
}

function modulus(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result % input;
    });
    return isNaN(res) ? "Error" : res ;
}

function exponential(inputArr) {
    var res = this.operation(inputArr, function (result, input) {
        return result ** input;
    });
    return isNaN(res) ? "Error" : res;
}


function divide(input) {

    return operation(input, function (result, input) {
        console.log('result:' + result, 'input: ' + input)

        if ( Number(input) === 0 || result == "Cannot Divide By Zero")
            return "Cannot Divide By Zero";
        else if(!Number.isFinite(result / input) || result == "Error") {
            return "Error";
        }

        return result / input;
    })
}

function operation(input, operator) {
    //console.log(' inside result:' + input, ' inside input: ' + operator)
    var result = input.shift();  //result = the first number that will store output , input will be start from 2nd to the end
   // console.log(' inside result:' + result, ' inside input: ' + input)
    for (i = 0; i < input.length; i++) {
        result = operator(result, input[i]);
    }

    return result;
}

module.exports = { subtract, add, divide, multiple, modulus, exponential, operation}