import './style.css'
// kickstart your world here
console.log("hi");
import Island from "./src/Island.js";
import World from "./src/World.js";

const world = new World();

document.getElementById("btnAddIsland").addEventListener("click", () => {
  const island = new Island();
  world.addCircle(island);
  island.render();
});

document.getElementById("btnSave").addEventListener("click", () => {
  world.saveCirclesToLocalStorage();
});

document.getElementById("btnLoad").addEventListener("click", () => {
  world.loadCirclesFromLocalStorage();
});