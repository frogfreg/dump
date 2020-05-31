const {
  Engine,
  Render,
  Runner,
  World,
  Bodies,
  MouseConstraint,
  Mouse,
} = Matter;

const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

//Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 30, { isStatic: true }),
  Bodies.rectangle(0, 300, 30, 600, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 30, { isStatic: true }),
  Bodies.rectangle(800, 300, 30, 600, { isStatic: true }),
];

const shapes = [];
for (let i = 1; i <= 45; i++) {
  square = Bodies.rectangle(
    Math.random() * 700 + 60,
    Math.random() * 500 + 60,
    30,
    30
  );
  circle = Bodies.circle(
    Math.random() * 700 + 60,
    Math.random() * 500 + 60,
    30
  );
  shapes.push(square, circle);
}
World.add(world, walls);
World.add(world, shapes);
