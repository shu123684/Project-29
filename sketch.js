const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonImgV = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    groundObj = new ground(600, 590, width,20);
    ground1 = new ground(400, 280, 250, 10);
    ground2 = new ground(850, 300, 250, 10);
   
    
    // stack2
    block1v2 = new Block(770, 270, 30, 40);
    block2v2 = new Block(800, 270, 30, 40);
    block3v2 = new Block(830, 270, 30, 40);
    block4v2 = new Block(860, 270, 30, 40);
    block5v2 = new Block(890, 270, 30, 40);
    // level 3
    block6v2 = new Block(920, 270, 30, 40);
    block7v2 = new Block(800, 230, 30, 40);
    block8v2 = new Block(830, 230, 30, 40);
    // level 3
    block9v2 = new Block(860, 230, 30, 40);
    block10v2 = new Block(890, 230, 30, 40);
    block11v2 = new Block(830, 190, 30, 40);
    block12v2 = new Block(860, 190, 30, 40);
    block13v2 = new Block(845, 150, 30, 40);

    // stack1
    // level 2
    block1 = new Block(330, 235, 30, 40);
    block2 = new Block(360, 235, 30, 40);
    block3 = new Block(390, 235, 30, 40);
    block4 = new Block(420, 235, 30, 40);
    block5 = new Block(450, 235, 30, 40);
    // level 3
    block6 = new Block(360, 195, 30, 40);
    block7 = new Block(390, 195, 30, 40);
    block8 = new Block(420, 195, 30, 40);
    // level 3
    block9 = new Block(390, 155, 30, 40);
    
    polygonObj = Bodies.circle(100, 200, 20, {

        density: 1,
    });
    World.add(world, polygonObj);
    
    
    chain = new Chain(polygonObj, {x:150, y:200});
}

function draw(){
    background("grey");
    Engine.update(engine);

    fill("brown")
    groundObj.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    ground1.display();
    ground2.display();

    // color = color(random(0 ,255), random(0 ,255), random(0 ,255));
    block1v2.display();
    block2v2.display();
    block3v2.display();
    block4v2.display();
    block5v2.display();
    block6v2.display();
    block7v2.display();
    block8v2.display();

    block9v2.display();
    block10v2.display();
    block11v2.display();
    block12v2.display();
    block13v2.display();


    
    // polygon.display();

    var pos = polygonObj.position;
    // imageMode(CENTER);
    // image(polygonImgV, pos.x, pos.y);
    imageMode(CENTER);
    image(polygonImgV, pos.x, pos.y, 40, 40);

    chain.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObj, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}