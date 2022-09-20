input.onGesture(Gesture.Shake, function () {
    PickShape()
})
function PickShape () {
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
}
let hand = 0
let scissors: Image = null
let paper: Image = null
let rock: Image = null
let ScissorsIndex = 0
let paperIndex = 0
let rockIndex = 0
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
