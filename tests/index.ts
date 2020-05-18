import { Regulator, energyClass, totalConsumption } from "../src/index";

test("Regulator Brussels", async () => {
  const consumption = 100;
  const ecls = await energyClass(Regulator.Brussels, consumption);
  expect(ecls).toBe("C+");
});

test("Total consumption", () => {
  const consumption = 100;
  const area = 250;
  const total = totalConsumption(consumption, area);
  expect(total).toBe(25000);
});
