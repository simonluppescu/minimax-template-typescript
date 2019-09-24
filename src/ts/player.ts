class Player {
  index: number;
  name: string;

  private static COUNTER = 0;

  constructor(name: string) {
    this.name = name;
    this.index = Player.COUNTER;

    Player.COUNTER++;
  }
}

export default Player;
