function countingSheep(num){
    if (num === 0){
        console.log('All sheep jumped over the fence');
        return
    }
    console.log(`${num}: Another sheep jumps over the fence`)
    countingSheep((num-1));
}

// countingSheep(5);

function powerCalculator(num, exp){
    if(exp < 0){
        console.log('exp should be >= 0')
    }
    if(exp === 0){
        return 1;
    }
    if(exp === 1){
        return num;
    }

    let total = powerCalculator(num, (exp-1))
    return total *= num;
}

// console.log(powerCalculator(3, 3));

function reverseString(str){
    if(str.length === 0){
        return `String must not be empty`;
    }
    if(str.length === 1){
        return str;
    }
    let ans = reverseString(str.slice(1))
    ans += str.charAt(0);
    return ans;
}

// console.log(reverseString('hello'))

function nthTriangle(num){
    if(num <= 0){
        return 0
    }
    let total = nthTriangle(num - 1)
    total += num
    return total;
}

// console.log(nthTriangle(8));

function stringSplitter(str, sep, res=['']){
    if (str.length === 0){
        return res
    }
    if(str[0] === sep){
        res.push('');
    } else {
        res[res.length - 1] += str[0]
    }
    return stringSplitter(str.slice(1), sep, res)
}

// console.log(stringSplitter(`the-best-string`, '-'))

function fibonacci(num){
    if(num === 0){
        return [0];
    }
    if(num === 1){
        return [0, 1];
    }
    let acc = fibonacci(num - 1)
    acc.push(acc[num-2] + acc[num-1])
    return acc
}

// console.log(fibonacci(3))