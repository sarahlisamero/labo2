export default class Island {
    constructor(name) {
        this.name = this.getRandomName();
    }
  
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  
    remove() {
      // JS animations api, fade out
      // remove the element when the animation ended
    }

    getRandomCoords() {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        return { x: x, y: y };
    }

    getRandomName() {
      // array with 10 random island names
      const names = [
        "Palmtree beach",
        "Sandy beach",
        "Tropical beach",
        "Palm beach",
        "Sunny beach",
        "Paradise beach",
        "Sunny island",
        "Tropical island",
        "Palm island",
        "Paradise island"
      ];
      // return a random name from the array
        return names[Math.floor(Math.random() * names.length)];
    }
    
    render() {
        let div = document.createElement("div");
        div.classList.add("island");

        div.style.backgroundColor = this.getRandomColor();
        
        const nameElement = document.createElement("div");
        nameElement.classList.add("island-name");
        nameElement.innerHTML = this.name;
        div.appendChild(nameElement);

        document.body.appendChild(div);
        let coords = this.getRandomCoords();
        div.animate(
          [
            { transform: `translate(0px, 0px)` },
            { transform: `translate(${coords.x}px, ${coords.y}px)` }
          ],
          {
            duration: 2000,
            iterations: 1,
            fill: "forwards"
          }
        );
    }
}
  