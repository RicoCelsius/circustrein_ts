import { Animal } from "./Animal";

export class Carnivore extends Animal {
  public willBeEaten(animal: this): boolean {
    return this.animalSize < animal.animalSize;
  }
  public willEat(animal: Animal): boolean {
    return this.animalSize > animal.animalSize;
  }
}
