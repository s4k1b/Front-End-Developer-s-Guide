class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

whiteRabbit = new Rabbit('white');
blackRabbit = new Rabbit('black');

whiteRabbit.speak(`HI! I am ${whiteRabbit.type}.`);
blackRabbit.speak(`HI! I am ${blackRabbit.type}.`);
