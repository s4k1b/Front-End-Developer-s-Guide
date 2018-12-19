const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

  // Function to build a graph from the above raods

  function buildGraph(edges) {
    let graph = Object.create(null); //create a object with null prototype
    function addEdge(from, to) {
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        graph[from].push(to);
      }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }

//build graphs from roads

const roadGraph = buildGraph(roads);

//Now the robot will be moving around the village.
//We don't change the village state when the robot moves but rather we will compute new state for the situation after move

class VillageState {
  constructor(place, parcels) {  //constructor for creating village states
    this.place = place; //current place of the robot
    this.parcels = parcels; // array containing parcel's place and destination address
  }

  move(destination) { //the main move function. The magic happens here....
    if (!roadGraph[this.place].includes(destination)) { //return the state if destination can not be reached from current place
      return this;
    } else { //other wise create a new state
    let parcels = this.parcels.map(p => { //compute the new arrray of parcells
      if (p.place != this.place) return p; // keep all the parcels that do not correspond to this place
      return {place: destination, address: p.address}; //parcels that do correspond to this place (either originating from this place or the robot already has it) pick it up (collecting)
    }).filter(p => p.place != p.address); // parcels that have current place and destination address same, deliver them.
      return new VillageState(destination, parcels); //return the new state
    }
  }
}