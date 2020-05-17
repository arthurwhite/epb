# Energy performance of buildings

This library provides helpers for energy performance of buildings computation.

## Installing

```sh
npm i epb
```

## Usage

### `energyClass`

Get the energy class (like `A++`, `A+`, `A`, `B`...) following the regulator rules, given the energy consumption.  
If the energy class cannot be calculated from the provided data, `null` is returned.

```ts
const consumption = 100;
const ecls = await energyClass(Regulator.Brussels, consumption);
// ecls === "C+"
```

### Regulators

Currently supported:

- `brussels`
- `flanders` (_exception: energy classes are not used in Flanders_)
- `france`
- `wallonia`
