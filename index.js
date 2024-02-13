const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

const width = 800;
const height = 500;

const engine = Engine.create();
const{ world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes : false,
        width,
        height
    }
});
Render.run(render);
const runner = Runner.create();
Runner.run(runner, engine);

World.add(world, MouseConstraint.create(engine,{
    mouse: Mouse.create(render.canvas)
}))
//-----------------Boundary Walls------------------
const walls = [
    Bodies.rectangle(400, 0, 800, 40, {isStatic: true}),
    Bodies.rectangle(400, 500, 800, 40, {isStatic: true}),
    Bodies.rectangle(0, 250, 40, 500, {isStatic: true}),
    Bodies.rectangle(800, 250, 40, 600, {isStatic: true})
];
World.add(world, walls);

//------------------Random Shapes-------------------

for(let i = 0; i < 50; i++){
    if(Math.random() > 0.5){
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    } else {
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35, {
            render:{
                fillStyle: 'red'
            }
        })); 
    }

}