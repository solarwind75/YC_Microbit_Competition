input.onButtonPressed(Button.A, function () {
    animatedHeartbeat()
})
function animatedHeartbeat () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(500)
        basic.clearScreen()
    }
}
let list = [0, 1, 2]
let text_list = ["a", "b", "c"]
music.playMelody("E B C5 A B G A F ", 120)
basic.forever(function () {
	
})
