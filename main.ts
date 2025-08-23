controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`tankP1Up`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`tankP1Left`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`tankP1Right`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`tankP1Down`)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`tankP1Up`, SpriteKind.Player)
controller.moveSprite(mySprite, 30, 30)
