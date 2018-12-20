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


function runRobot(state, robot, memory) { //robot is a function that looks at the village state and it's memory to calculate the direction of heading
  for (let turn = 0;; turn++) {
    if (state.parcels.length == 0) { //check if all percels are delivered
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);  //calculated next direction and memory
    state = state.move(action.direction); //move to next direction (changing the villageState)
    memory = action.memory; //remember the move
    console.log(`Moved to ${action.direction}`);
  }
}

//declare some random functions to randomly pick states
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

//Create a new state with some parcels (to put this sophisticated robot to work)
VillageState.random = function(parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({place, address});
  }
  return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);