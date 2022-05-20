var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var lase1 = createSprite(1, 300,400,10);
 var lase2  = createSprite(400, 150,400,10);
 
 
 var ladrao = createSprite(25, 378,20,20);
 
 var diamante = createSprite(375,28,30,30)
 diamante.shapeColor="blue";
 
  lase1.velocityY= -3
  lase2.velocityY= 3

  createEdgeSprites();
 
function draw() {
  
    background("yellow")
    
    lase1.bounceOff(topEdge)
    lase2.bounceOff(topEdge)
    
    lase1.bounceOff(bottomEdge)
    lase2.bounceOff(bottomEdge)
    
    ladrao.collide(edges);
    
    if (ladrao.collide (diamante)){
      background("darkblue")
      textSize(50)
      text("você conseguiu fuja!!",50,200)
      lase1.velocityY= 0
      lase2.velocityY= 0
      
    }
    
    ladrao.velocityX=0
    ladrao.velocityY=0
    
    if (keyDown("UP_ARROW")) {  
      ladrao.velocityX=0;
      ladrao.velocityY=-10;
    } 
    
    if (keyDown("DOWN_ARROW")){
      ladrao.velocityX=0;
      ladrao.velocityY=10;
    }
    
    if (keyDown("RIGHT_ARROW")){
      ladrao.velocityX=10
      ladrao.velocityY=0
    }
    if (keyDown("LEFT_ARROW")){
      ladrao.velocityX=-10
      ladrao.velocityY=0
    }
    
    //COMPORTAMENTOS DO LADRÃO AO COLIDIR NOS LASERS
    if (ladrao.isTouching(lase1)){
      textSize(30)
      text("Você foi capturado",100,200)
     ladrao.visible=false
      lase1.velocityY= 0
      lase2.velocityY= 0 
      ladrao.velocityX=0
      ladrao.velocityY=0
    }
    
    
    if (ladrao.isTouching(lase2)){
       textSize(30)
      text("Você foi capturado",100,200)
     ladrao.visible=false
      lase1.velocityY= 0
      lase2.velocityY= 0 
      ladrao.velocityX=0
      ladrao.velocityY=0
    }
    
    ladrao.collide(diamante);
    
    drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
