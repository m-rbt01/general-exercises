const getFinalState = require("./script.js");

describe("Gravity Simulation Matrix", () => {
    test("returns non-explosive final state", () => {
        let initialState = [
            ['-', '#', '#', '*'],
            ['#', '-', '-', '-'],
            ['-', '-', '-', '-']
        ];
        let finalState = [
            ['-', '-', '-', '*'],
            ['-', '-', '-', '-'],
            ['#', '#', '#', '-']
        ];
        expect(getFinalState(initialState)).toEqual(finalState);
    });
    test("returns non-explosive final state with obstacles", () => {
        let initialState = [
            ['-', '#', '#', '*'],
            ['#', '-', '-', '-'],
            ['-', '*', '*', '-']
        ];
        let finalState = [
            ['-', '-', '-', '*'],
            ['-', '#', '#', '-'],
            ['#', '*', '*', '-']
        ];
        expect(getFinalState(initialState)).toEqual(finalState);
    });
    test("returns non-explosive final state for large matrix", () => {
        let initialState = [
            ['-', '#', '#', '*'],
            ['#', '-', '-', '#'],
            ['-', '-', '-', '-'],
            ['#', '-', '#', '*'],
            ['-', '-', '-', '-'],
            ['-', '*', '*', '-']
        ];
        let finalState = [
            ['-', '-', '-', '*'],
            ['-', '-', '-', '-'],
            ['-', '-', '-', '#'],
            ['-', '-', '#', '*'],
            ['#', '#', '#', '-'],
            ['#', '*', '*', '-']
        ];
        expect(getFinalState(initialState)).toEqual(finalState);
    });
});