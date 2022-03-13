var player, zombie, bullet






function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255, 255, 255);

  console.log(frameCount)
  if (keyDown("UP_ARROW")) {
    player.y -= 10
  }
  if (keyDown("DOWN_ARROW")) {
    player.y += 10
  }
  if (keyDown("space")) {
    shoot();
  }

  drawZombies()
  drawSprites();
}

function drawZombies() {
  if (frameCount % 60 === 0) {
    zombie = createSprite(100, 100, 40, 40)
    zombie.x = Math.round(random(windowWidth / 2, windowWidth))
    zombie.y = Math.round(random(0, windowHeight))

    zombie.velocityX = -3
  }

}



female.mousePressed(() => {
  player2 = createInput("name")
  player2.position(width / 2, height / 2)
  submit2 = createButton("submit")
  submit2.position(width / 2 + 50, height / 2 + 35)
  submit2.mousePressed(() => {
      girl.visible = false
      boy.visible = false
      female.hide()
      male.hide()
      player2.hide()
      submit2.hide()
      gameState = "3"
  })
})
