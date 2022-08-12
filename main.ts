function fizzBuzz (list: number[]) {
    for (let index = 0; index <= list.length - 1; index++) {
        readVal = list[index]
        if (readVal % 15 == 0) {
            basic.showString("FizzBuzz")
        } else {
            if (readVal % 3 == 0) {
                basic.showString("Fizz")
            } else {
                if (readVal % 5 == 0) {
                    basic.showString("Buzz")
                } else {
                    basic.showNumber(readVal)
                }
            }
        }
    }
}
let readVal = 0
let list = [
1,
57,
28,
47,
13,
21,
97,
76,
38,
19,
32,
87,
0,
58,
71
]
fizzBuzz(list)
