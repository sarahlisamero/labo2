import './style.css'
// kickstart your world here
console.log("hi");
import Island from "./src/Island.js";
document.getElementById("btnAddIsland").addEventListener("click", () => {
  const island = new Island();
  island.render();
});
