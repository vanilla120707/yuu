radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > dice) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(1)
