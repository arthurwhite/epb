export enum Regulator {
    Brussels = "brussels",
    Flanders = "flanders",
    France = "france",
    Wallonia = "wallonia",
}

/**
 * Get the energy class (like `A++`, `A+`, `A`, `B`...) following the regulator rules, given the energy consumption.
 * If the energy class cannot be calculated, `null` is returned.
 *
 * @param regulator The regulator that defines class calculation rules.
 * @param consumption The consumption of the building in kWh/m².year.
 */
export const energyClass = async (
    regulator: Regulator,
    consumption: number
): Promise<string | null> => {
    switch (regulator) {
        case Regulator.Brussels:
            if (consumption <= 0) return "A++";
            else if (consumption <= 15) return "A+";
            else if (consumption <= 30) return "A";
            else if (consumption <= 45) return "A-";
            else if (consumption <= 62) return "B+";
            else if (consumption <= 78) return "B";
            else if (consumption <= 95) return "B-";
            else if (consumption <= 113) return "C+";
            else if (consumption <= 132) return "C";
            else if (consumption <= 150) return "C-";
            else if (consumption <= 170) return "D+";
            else if (consumption <= 190) return "D";
            else if (consumption <= 210) return "D-";
            else if (consumption <= 232) return "E+";
            else if (consumption <= 253) return "E";
            else if (consumption <= 275) return "E-";
            else if (consumption <= 345) return "F";
            return "G";

        case Regulator.France:
            if (consumption <= 50) return "A";
            else if (consumption <= 90) return "B";
            else if (consumption <= 150) return "C";
            else if (consumption <= 230) return "D";
            else if (consumption <= 330) return "E";
            else if (consumption <= 450) return "F";
            return "G";

        case Regulator.Wallonia:
            if (consumption <= 0) return "A++";
            else if (consumption <= 45) return "A+";
            else if (consumption <= 85) return "A";
            else if (consumption <= 170) return "B";
            else if (consumption <= 255) return "C";
            else if (consumption <= 340) return "D";
            else if (consumption <= 425) return "E";
            else if (consumption <= 510) return "F";
            return "G";

        default:
            return null;
    }
};
