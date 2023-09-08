import { Wagon } from "../Wagon";
import { Animal } from "../Animal";
import { AnimalType } from "../enums/AnimalType";
import { AnimalSize } from "../enums/AnimalSize";
import { Herbivore } from "../Herbivore";

describe("Wagon", () => {
  it("should add animal to wagon", () => {
    const Newwagon = new Wagon();
    const animal = new Herbivore(AnimalSize.Large);

    const result = Newwagon.tryAddAnimal(animal);
    expect(result).toBe(true);
  });

  it("should not add animal to wagon", () => {
    const Newwagon = new Wagon();
    const animal1 = new Herbivore(AnimalSize.Large);
    const animal2 = new Herbivore(AnimalSize.Large);
    const animal3 = new Herbivore(AnimalSize.Large);

    Newwagon.tryAddAnimal(animal1);
    Newwagon.tryAddAnimal(animal2);

    const result = Newwagon.tryAddAnimal(animal3);
    expect(result).toBe(false);
  });
});
