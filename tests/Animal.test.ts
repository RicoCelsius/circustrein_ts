import { AnimalSize } from "../enums/AnimalSize";
import { Carnivore } from "../Carnivore";
import { Herbivore } from "../Herbivore";

describe("Carnivore", () => {
  it("should eat herbivore", () => {
    const carnivore = new Carnivore(AnimalSize.Large);
    const herbivore = new Herbivore(AnimalSize.Small);

    const result = carnivore.willEat(herbivore);
    expect(result).toBe(true);
  }, 1000);

  it("should not eat herbivore", () => {
    const carnivore = new Carnivore(AnimalSize.Small);
    const herbivore = new Herbivore(AnimalSize.Small);

    const result = carnivore.willEat(herbivore);
    expect(result).toBe(false);
  }, 1000);

  it("should not eat herbivore", () => {
    const carnivore = new Carnivore(AnimalSize.Small);
    const herbivore = new Herbivore(AnimalSize.Large);

    const result = carnivore.willEat(herbivore);
    expect(result).toBe(false);
  }, 1000);
});
