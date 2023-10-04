export default class Island {
    constructor(name) {
        this.name = name || this.getRandomName(); // Allow passing a name, or generate one
    }
  
    getRandomColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    getRandomCoords() {
        /*let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        return { x: x, y: y };*/
      let randomSign = Math.random() < 0.5 ? -1 : 1;
      return {
        x: ((Math.random() * window.innerWidth) / 2) * randomSign,
        y: ((Math.random() * window.innerHeight) / 2) * randomSign
      };
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
            duration: 5000,
            iterations: 1,
            fill: "forwards"
          }
        );
    }
    toJSON() {
      return {
        name: this.name,
        color: this.getRandomColor(),
        coords: this.getRandomCoords()
      };
    }
}
