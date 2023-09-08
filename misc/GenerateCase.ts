import { Carnivore } from "../Carnivore";
import { Herbivore } from "../Herbivore";
import { AnimalSize } from "../enums/AnimalSize";

export class GenerateCase {
  public static generateCase(
    smallHerbi: number,
    mediumHerbi: number,
    bigHerbi: number,
    smallCarni: number,
    mediumCarni: number,
    bigCarni: number
  ): (Herbivore | Carnivore)[] {
    const animals: (Herbivore | Carnivore)[] = [];

    // Generate small herbivores
    for (let i = 0; i < smallHerbi; i++) {
      animals.push(new Herbivore(AnimalSize.Small));
    }

    // Generate medium herbivores
    for (let i = 0; i < mediumHerbi; i++) {
      animals.push(new Herbivore(AnimalSize.Medium));
    }

    // Generate big herbivores
    for (let i = 0; i < bigHerbi; i++) {
      animals.push(new Herbivore(AnimalSize.Large));
    }

    // Generate small carnivores
    for (let i = 0; i < smallCarni; i++) {
      animals.push(new Carnivore(AnimalSize.Small));
    }

    // Generate medium carnivores
    for (let i = 0; i < mediumCarni; i++) {
      animals.push(new Carnivore(AnimalSize.Medium));
    }

    // Generate big carnivores
    for (let i = 0; i < bigCarni; i++) {
      animals.push(new Carnivore(AnimalSize.Large));
    }

    return animals;
  }
}
