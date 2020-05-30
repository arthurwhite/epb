/**
 * @type {string} A performance regulator.
 */
export const regulators = ['brussels', 'flanders', 'france', 'wallonia']

/**
 * Get the energy class of a building (like `A++`, `A+`, `A`, `B`...) following the regulator rules, given its energy consumption.
 * If the energy class cannot be calculated, `null` is returned.
 *
 * @param {regulator} regulator The regulator that defines class calculation rules.
 * @param {number} consumption The consumption of the building in kWh/m².year.
 * @returns {(string|null)} The energy class.
 */
export const energyClass = (regulator, consumption) => {
  switch (regulator) {
    case 'brussels':
      if (consumption <= 0) return 'A++'
      if (consumption <= 15) return 'A+'
      if (consumption <= 30) return 'A'
      if (consumption <= 45) return 'A-'
      if (consumption <= 62) return 'B+'
      if (consumption <= 78) return 'B'
      if (consumption <= 95) return 'B-'
      if (consumption <= 113) return 'C+'
      if (consumption <= 132) return 'C'
      if (consumption <= 150) return 'C-'
      if (consumption <= 170) return 'D+'
      if (consumption <= 190) return 'D'
      if (consumption <= 210) return 'D-'
      if (consumption <= 232) return 'E+'
      if (consumption <= 253) return 'E'
      if (consumption <= 275) return 'E-'
      if (consumption <= 345) return 'F'
      return 'G'

    case 'france':
      if (consumption <= 50) return 'A'
      if (consumption <= 90) return 'B'
      if (consumption <= 150) return 'C'
      if (consumption <= 230) return 'D'
      if (consumption <= 330) return 'E'
      if (consumption <= 450) return 'F'
      return 'G'

    case 'wallonia':
      if (consumption <= 0) return 'A++'
      if (consumption <= 45) return 'A+'
      if (consumption <= 85) return 'A'
      if (consumption <= 170) return 'B'
      if (consumption <= 255) return 'C'
      if (consumption <= 340) return 'D'
      if (consumption <= 425) return 'E'
      if (consumption <= 510) return 'F'
      return 'G'

    default:
      return null
  }
}

/**
 * Get the total consumption of a building in a year, given its energy consumption and its total area.
 *
 * @param {number} consumption The consumption of the building in kWh/m².year.
 * @param {number} area The total area of the building in m².
 * @returns {number} The total consumption in kWh/year.
 */
export const totalConsumption = (consumption, area) => consumption * area
