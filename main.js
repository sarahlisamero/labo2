import './style.css'
// kickstart your world here
console.log("hi");
import Island from "./src/Island.js";
import World from "./src/World.js";

const world = new World();

document.getElementById("btnAddIsland").addEventListener("click", () => {
  const island = new Island();
  world.addIsland(island);
  island.render();
});

document.getElementById("btnSave").addEventListener("click", () => {
  world.save();
  console.log("island saved");
});

document.getElementById("btnLoad").addEventListener("click", () => {
  world.load();
});
