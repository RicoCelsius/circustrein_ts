import { Carnivore } from "./Carnivore";
import { Animal } from "./Animal";

export class Herbivore extends Animal {
  public willBeEaten(carnivore: Carnivore): boolean {
    if (this.animalSize < carnivore.animalSize) {
      return true;
    }
    return false;
  }
}
