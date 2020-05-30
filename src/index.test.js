import { energyClass, totalConsumption } from './index'

test('Regulator Brussels', () => {
  expect(energyClass('brussels', 100)).toBe('C+')
})

test('Total consumption', () => {
  expect(totalConsumption(100, 250)).toBe(25000)
})
