function countingSheep(num) {
    if (num === 0) {
        console.log('All sheep jumped over the fence');
        return
    }
    console.log(`${num}: Another sheep jumps over the fence`)
    countingSheep((num - 1));
}

// countingSheep(5);

function powerCalculator(num, exp) {
    if (exp < 0) {
        console.log('exp should be >= 0')
    }
    if (exp === 0) {
        return 1;
    }
    if (exp === 1) {
        return num;
    }

    let total = powerCalculator(num, (exp - 1))
    return total *= num;
}

// console.log(powerCalculator(3, 3));

function reverseString(str) {
    if (str.length === 0) {
        return `String must not be empty`;
    }
    if (str.length === 1) {
        return str;
    }
    let ans = reverseString(str.slice(1))
    ans += str.charAt(0);
    return ans;
}

// console.log(reverseString('hello'))

function nthTriangle(num) {
    if (num <= 0) {
        return 0
    }
    let total = nthTriangle(num - 1)
    total += num
    return total;
}

// console.log(nthTriangle(8));

function stringSplitter(str, sep, res = ['']) {
    if (str.length === 0) {
        return res
    }
    if (str[0] === sep) {
        res.push('');
    } else {
        res[res.length - 1] += str[0]
    }
    return stringSplitter(str.slice(1), sep, res)
}

// console.log(stringSplitter(`the-best-string`, '-'))

function fibonacci(num) {
    if (num === 0) {
        return [0];
    }
    if (num === 1) {
        return [0, 1];
    }
    let acc = fibonacci(num - 1)
    acc.push(acc[num - 2] + acc[num - 1])
    return acc
}

// console.log(fibonacci(3))

function factorial(num) {
    if (num === 0) {
        return;
    }
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1)

}

// console.log(factorial(5))

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let myLargeMaze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function mazeExit(maze, n, m) {
    maze[n][m] = '-'

    let newArr = ''

    switch (' ') {
        case maze[n][m + 1]:
            return newArr += 'R' + mazeExit(maze, n, m + 1)
        case maze[n][m - 1]:
            return newArr += 'L' + mazeExit(maze, n, m - 1)
        case maze[n + 1][m]:
            return newArr += 'D' + mazeExit(maze, n + 1, m)
        case maze[n - 1][m]:
            return newArr += 'U' + mazeExit(maze, n - 1, m)
    }
    switch ('e') {
        case maze[n][m + 1]:
            return newArr += 'R' + `fin`
        case maze[n][m - 1]:
            return newArr += 'L' + `fin`
        case maze[n + 1][m]:
            return newArr += 'D' + `fin`
        case maze[n - 1][m]:
            return newArr += 'U' + `fin`
    }
    return newArr;
}

// console.log(mazeExit(myLargeMaze, 0, 0))





// all possible maze here





// function anagram(str){
//     const ans = []

//     function traverse(str, acc = ''){
//         if (!str){
//             ans.push(acc);
//         }
//         for(let i = 0; i < str.length; i++){
//             traverse(str.slice(0, i) + str.slice(i + 1), acc + str[i]);
//         }
//     }
//     traverse(str)
//     return ans
// }

function anagram(str, acc = '', ans = []) {
    if (!str) {
        ans.push(acc);
    }
    for (let i = 0; i < str.length; i++) {
        anagram(str.slice(0, i) + str.slice(i + 1), acc + str[i], ans);
    }
    return ans
}

// console.log(anagram('east'))

const nameChart = [
    {
        'Zuckerburg': {
            'Schroepfer': {
                'Bosworth': [
                    'Steve',
                    'Kyle',
                    'Andra'
                ],
                'Zhao': [
                    'Richie',
                    'Sofia',
                    'Jen'
                ],
            },
            'Schrage': {
                'VanDyck': [
                    'Sabrina',
                    'Michelle',
                    'Josh'
                ],
                'Swain': [
                    'Blanch',
                    'Tom',
                    'Joe'
                ]
            },
            'Sandberg': {
                'Goler': [
                    'Eddie',
                    'Julie',
                    'Annie'
                ],
                'Hernandez': [
                    'Rowi',
                    'Inga',
                    'Morgan'
                ],
                'Moissinac': [
                    'Amy',
                    'Chuck',
                    'Vinni'
                ],
                'Kelley': [
                    'Eric',
                    'Ana',
                    'Wes'
                ]
            }
        }
    }
]

const nameChart2 = {
    Zuckerberg: {
        Schroepfer: {
            Bosworth: ['Steve', 'Kyle', 'Andra'],
            Zhao: ['Richie', 'Sofia', 'Jen']
        },
        Schrage: {
            VanDyck: ['Sabrina', 'Michelle', 'Josh'],
            Swain: ['Blanch', 'Tom', 'Joe']
        },
        Sandberg: {
            Goler: ['Eddie', 'Julie', 'Annie'],
            Hernandez: ['Rowi', 'Inga', 'Morgan'],
            Moissinac: ['Amy', 'Chuck', 'Vinni'],
            Kelley: ['Eric', 'Ana', 'Wes']
        }
    }
}

function orgChart(chart, acc = ``) {
    if(typeof chart === 'string'){
        return `\t\t\t\t${chart}`;
    }

    for (let i = 0; i < Object.keys(chart).length; i++){
        let newObj = Object.values(chart)[i]
        acc += `${orgChart(newObj)}\n`
        console.log(acc)
    }
    if(typeof chart === 'object'){
        return `${Object.getOwnPropertyNames(chart)}\n`
    }

    // for (let i = 0; i < Object.keys(chart).length; i++) {
    //     let things = (Object.values(chart)[i])
    //     console.log(things)
    //     for (let i = 0; i < Object.keys(things).length; i++) {
    //         let stuff = (Object.values(things)[i])
    //         console.log(stuff)
    //         for (let i = 0; i < Object.keys(stuff).length; i++) {
    //             let fun = (Object.values(stuff)[i])
    //             console.log(fun)
    //             for (let i = 0; i < Object.keys(fun).length; i++) {
    //                 let funthings = (Object.values(fun)[i])
    //                 console.log(funthings)
    //             }
    //         }
    //     }
    // }
}

console.log(orgChart(nameChart2))