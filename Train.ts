import { Wagon } from "./Wagon";
import { Animal } from "./Animal";

export class Train {
  public wagons: Wagon[] = [];

  public addAnimalToWagon(animal: Animal[]): void {
    let wagon = new Wagon();
    animal.forEach((animal) => {
      if (wagon.tryAddAnimal(animal)) {
        return;
      } else {
        this.wagons.push(wagon);
        wagon = new Wagon();
        wagon.tryAddAnimal(animal);
      }
    });
    this.wagons.push(wagon);
  }
}
