import { Train } from "../Train";
import { GenerateCase } from "../misc/GenerateCase";

describe("Train", () => {
  it("Should be no wagons", () => {
    const train = new Train();
    expect(train.wagons.length).toBe(0);
  }, 1000);

  it("Should be 1 wagon", () => {
    const train = new Train();
    const animals = GenerateCase.generateCase(1, 0, 0, 0, 0, 0);
    train.addAnimalToWagon(animals);
    expect(train.wagons.length).toBe(1);
  }, 1000);

  it("Should be 1 wagon", () => {
    const train = new Train();
    const animals = GenerateCase.generateCase(1, 0, 0, 1, 0, 0);
    train.addAnimalToWagon(animals);
    expect(train.wagons.length).toBe(1);
  }, 1000);

  it("Should be 2 wagon", () => {
    const train = new Train();
    const animals = GenerateCase.generateCase(10, 0, 0, 2, 0, 0);
    train.addAnimalToWagon(animals);
    expect(train.wagons.length).toBe(2);
  }, 1000);

  it("Should be 2 wagon", () => {
    const train = new Train();
    const animals = GenerateCase.generateCase(2, 0, 0, 0, 2, 0);
    train.addAnimalToWagon(animals);
    expect(train.wagons.length).toBe(2);
  }, 1000);
});
