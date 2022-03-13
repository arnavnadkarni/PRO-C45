var boy
var girl
var male, female
var gameState = "1"
var bgImg, player, playerImg

function preload() {
    bgImg = loadImage("assets/bg.jpeg")
    playerImg = loadImage("assets/shooter_2.png")
    playerImg2= loadImage("assets/shooter_3.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    boy = createSprite(100, 100, 20, 20)
    girl = createSprite(200, 100, 20, 20)
    boy.visible = false
    girl.visible = false
    male = createButton("male")
    female = createButton("female")
    player = createSprite(200, 200, 50, 50);
    player.addImage(playerImg)
    player.scale = 0.3

}


function draw() {
    if (gameState === "1") {
        boy.visible = true
        girl.visible = true
        background(200, 250, 125)
        player.visible = false
        male.position(boy.x - 20, boy.y + 20)
        female.position(girl.x - 20, girl.y + 20)

        male.mousePressed(() => {
            player1 = createInput("name")
            player1.position(width / 2, height / 2)
            submit1 = createButton("submit")
            submit1.position(width / 2 + 50, height / 2 + 35)
            submit1.mousePressed(() => {
                console.log("yayy")
                girl.visible = false
                boy.visible = false
                female.hide()
                male.hide()
                player1.hide()
                submit1.hide()
                gameState = "2"
            })
        })
    }


    if (gameState === "2") {
        background(bgImg)
        player.visible = true
        girl.visible = false
        boy.visible = false
        female.hide()
        male.hide()
        if (keyDown("UP_ARROW")) {
            player.y -= 10
        }
        if (keyDown("DOWN_ARROW")) {
            player.y += 10
        }
        if (keyDown("space")) {
            player.addImage(playerImg2)
            shoot();
        }
    }

    drawSprites();
}
function shoot() {
    bullet = createSprite(player.x, player.y, 5, 5)
    bullet.velocityX = 15

}
