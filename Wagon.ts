import { Animal } from "./Animal";
import { AnimalSize } from "./enums/AnimalSize";

export class Wagon {
  MAX_SIZE: number = 10;
  CurrentSize: number = 0;
  AnimalsInWagon: Animal[] = [];

  constructor() {}

  public tryAddAnimal(animal: Animal): boolean {
    if (this.isFull(animal) || animal.willBeEaten(this.AnimalsInWagon)) {
      return false;
    }
    this.AnimalsInWagon.push(animal);
    this.CurrentSize += animal.animalSize;
    return true;
  }

  public isFull(animalSize: Animal): boolean {
    return true
      ? this.CurrentSize + animalSize.animalSize > this.MAX_SIZE
      : false;
  }
}
