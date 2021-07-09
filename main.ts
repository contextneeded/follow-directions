function wrongAnswer () {
    Wrong_Guy.setImage(img`
        . e e e e e e e e e e e e e e . 
        . e . . a a . . . . a a . . e . 
        . e . . . a a . . a a . . . e . 
        . e . . . . a . . a . . . . e . 
        . e . . a . . . . . . a . . e . 
        . e . . . . . . . . . . . . e . 
        . e . . . . . . . . . . . . e . 
        . e . . . . a a a a . . . . e . 
        . e . . . a a . . a a . . . e . 
        . e . . a a . . . . a a . . e . 
        . e e . . . . . . . . . . e e . 
        . . . e e . . . . . . e e e . . 
        . . . . e e e e e e e e . . . . 
        . . . . a a . . . . a a . . . . 
        . . . a a a . . . . a a a . . . 
        . . . . . . . . . . . . . . . . 
        `)
    Wrong_Guy.say("Wrong!", 500)
    pause(500)
    info.changeScoreBy(-1)
    Wrong_Guy.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    } else {
        wrongAnswer()
    }
    Generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
    } else {
        wrongAnswer()
    }
    Generate()
})
function gameEnd () {
    pause(1000)
    game.over(true)
}
function bounce () {
    mySprite.y += -5
    pause(100)
    mySprite.y += 5
}
info.onCountdownEnd(function () {
    endScore()
})
function endScore () {
    if (info.score() < 20) {
        game.splash("Beginner score of " + info.score())
        gameEnd()
    } else {
        game.splash("Wow! Great Job! Your score is " + info.score())
        gameEnd()
    }
}
function Generate () {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.say("Push B")
        bounce()
    } else {
        mySprite.say("Push A")
        bounce()
    }
}
let randomPick = 0
let Wrong_Guy: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(1)
game.splash("Push A and B as directed")
mySprite = sprites.create(assets.image`Gatsby`, SpriteKind.Player)
Wrong_Guy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
Wrong_Guy.setPosition(30, 80)
info.startCountdown(20)
Generate()
