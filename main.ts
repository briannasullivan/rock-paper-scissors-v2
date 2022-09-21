radio.onReceivedNumber(function (receivedNumber) {
    handplayer2 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    if (handplayer2 == rockIndex) {
        rock.showImage(0)
    }
    if (handplayer2 == paperIndex) {
        paper.showImage(0)
        if (handplayer2 == ScissorsIndex) {
            scissors.showImage(0)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == rockIndex) {
        rock.showImage(0)
    }
    if (hand == paperIndex) {
        paper.showImage(0)
    }
    if (hand == ScissorsIndex) {
        scissors.showImage(0)
    }
    radio.sendNumber(hand)
})
let hand = 0
let handplayer2 = 0
let scissors: Image = null
let paper: Image = null
let rock: Image = null
let ScissorsIndex = 0
let paperIndex = 0
let rockIndex = 0
radio.setGroup(1)
rockIndex = 1
paperIndex = 2
ScissorsIndex = 3
rock = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paper = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
scissors = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
