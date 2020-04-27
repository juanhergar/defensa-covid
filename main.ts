namespace SpriteKind {
    export const Aspirador = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
`
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    vacuna = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . b b b b b b . . . . . 
. . b . . b 9 9 1 1 b . . . . . 
. . b b b b 9 9 1 1 b b b 2 f . 
. . b . . b 9 9 1 1 b . . . . . 
. . . . . b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, enfermera, 100, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let covid_19: Sprite = null
let vacuna: Sprite = null
let enfermera: Sprite = null
enfermera = sprites.create(img`
. . . . . c c c f f f . . . 
. . . f f 5 5 5 5 5 5 f f . 
. . f 5 5 5 5 5 5 5 5 5 f . 
. c 5 5 5 5 5 5 5 5 5 5 5 f 
. c 5 5 5 5 5 5 5 d b 5 5 f 
f 5 5 5 5 5 5 5 b 4 4 d 5 f 
f 5 5 5 5 5 c c 4 4 4 b 5 f 
f b 5 5 5 b c b c 4 4 f f f 
c b b b b b e 1 c d d f f . 
c b b b b f 4 d d d d f . . 
. c b b 4 e e e 4 4 4 f . . 
. . f f 4 d d e 9 9 9 f . . 
. . . f e d d e 9 9 9 f . . 
. . . f b e e b 3 b 3 3 f . 
. . . f f b 3 b 3 b 3 f f . 
. . . . . f f b b f f . . . 
`, SpriteKind.Player)
enfermera.setPosition(20, 70)
enfermera.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(enfermera, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`0a00080008090a0b0c0d0e0f101107070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.builtin.brick,sprites.builtin.crowd0,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.vehicle.roadIntersection1,sprites.builtin.field1],
            TileScale.Sixteen
        ))
let aspiradora_1 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Aspirador)
let aspiradora_2 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Aspirador)
let aspiradora_3 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Aspirador)
let aspiradora_4 = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Aspirador)
aspiradora_1.setPosition(5, 30)
aspiradora_2.setPosition(5, 55)
aspiradora_3.setPosition(5, 80)
aspiradora_4.setPosition(5, 105)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(1500, function () {
    covid_19 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 7 . . . . 7 . . 
. . . . . . . 7 . . . . 7 . . . 
. . . . . . 7 . . . 7 7 7 . . . 
. . 7 7 . 7 7 6 6 7 7 . . . . . 
. . . . 7 7 7 7 7 7 7 . . . . . 
. . . . 7 6 7 7 7 7 6 . . . . . 
. . . . . 6 7 7 7 7 6 . . . . . 
. . . . . 7 7 7 7 7 7 7 . . . . 
. . . . 7 . 7 6 6 7 . 7 7 7 . . 
. . . 7 7 . . 7 . . . . 7 . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . 7 7 . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    covid_19.setVelocity(-50, 0)
    covid_19.setPosition(180, Math.randomRange(20, 110))
})
