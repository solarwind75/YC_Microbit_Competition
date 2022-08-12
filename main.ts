function MissingPiece (list: number[]) {
    for (let index = 0; index <= isPresent.length - 1; index++) {
        readVal = list[index]
        isPresent[readVal - 1] = 1
    }
    for (let index = 0; index <= 9; index++) {
        if (isPresent[index] == 0) {
            basic.showNumber(index + 1)
        }
    }
}
let readVal = 0
let isPresent: number[] = []
let list = [
8,
7,
4,
1,
3
]
isPresent = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
MissingPiece(list)
