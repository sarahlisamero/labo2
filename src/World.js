import Island from "./Island.js";
export default class World {
    constructor() {
      this.islands = [];
    }
  
    save() {
      localStorage.setItem("islands", JSON.stringify(this.islands));
    }
    
    hasSavedIslands() {
      return localStorage.getItem("islands") !== null; // Check if there are islands in localStorage
    }
  
    load() {
      // load islands from localstorage into array
      // loop over the array and addIslands()
    }
  
    addIsland(island) {
      this.islands.push(island); // add the islands to the DOM
    }
  }
  