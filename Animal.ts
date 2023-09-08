import { Carnivore } from "./Carnivore";
import { AnimalSize } from "./enums/AnimalSize";

export abstract class Animal {
  public animalSize: AnimalSize;

  constructor(animalSize: AnimalSize) {
    this.animalSize = animalSize;
  }

  abstract willBeEaten(Carnivore: Carnivore): boolean;
}
