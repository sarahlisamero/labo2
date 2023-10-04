import Island from "./Island.js";
export default class World {
    constructor() {
      this.circles = [];
      this.hookEvent();
    }
    
    hookEvent(){
      document.getElementById("btnAddIsland").addEventListener("click", () => {
        const island = new Island();
        this.addCircle(island);
        island.render();
      });
      
      document.getElementById("btnSave").addEventListener("click", () => {
        this.saveCirclesToLocalStorage();
      });
      
      document.getElementById("btnLoad").addEventListener("click", () => {
        this.loadCirclesFromLocalStorage();
      });
    }
    // Save circles to localStorage
    saveCirclesToLocalStorage() {
    localStorage.setItem("circles", JSON.stringify(this.circles));
    }
    
    // Check if there are circles in localStorage
    hasSavedCircles() {
    return localStorage.getItem("circles") !== null;
    }
  
    // Load circles from localStorage
    loadCirclesFromLocalStorage() {
    const savedCircles = JSON.parse(localStorage.getItem("circles")) || [];
    this.circles = savedCircles.map((circleData) => {
      const island = new Island(circleData.name);
      island.render(circleData.color, circleData.coords);
      return island;
    });
    }
  
    addCircle(circle) {
    this.circles.push(circle);
    }
  }

  