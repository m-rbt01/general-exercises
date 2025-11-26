const {getObjNames, getObjFullnames, sortByAge, getAverageAge, getKeyedObjects} = require("./object-basics.js");

describe("Working With Objects", () => {
    test("Returns name key value from array of objects.", () => {
        const arr = [
            { name: "John", age: 25 },
            { name: "Pete", age: 30 },
            { name: "Mary", age: 28 }
        ];
        expect(getObjNames(arr)).toEqual(["John", "Pete", "Mary"]);
    });
    test("Returns objects with full names from array of objects.", () => {
        const arr = [
            { name: "John", surname: "Smith", id: 1 },
            { name: "Pete", surname: "Hunt", id: 2 },
            { name: "Mary", surname: "Key", id: 3 }
        ];
        expect(getObjFullnames(arr)).toEqual([{ fullName: "John Smith", id: 1 }, { fullName: "Pete Hunt", id: 2 }, { fullName: "Mary Key", id: 3 }]);
    });
    test("Sorts array of objects by age key in ascending order.", () => {
        const arr = [
            { name: "John", age: 25 },
            { name: "Pete", age: 30 },
            { name: "Mary", age: 28 }
        ];
        sortByAge(arr);
        expect(arr).toEqual([{ name: "John", age: 25 }, { name: "Mary", age: 28 }, { name: "Pete", age: 30 }]);
    });
    test("Returns the average age of an array of objects.", () => {
        const arr = [
            { name: "John", age: 25 },
            { name: "Pete", age: 30 },
            { name: "Mary", age: 29 }
        ];
        expect(getAverageAge(arr)).toEqual(28);
    });
    test("Returns an object with id keys holding objects from array.", () => {
        const arr = [
            {id: 'john', name: "John Smith", age: 20},
            {id: 'ann', name: "Ann Smith", age: 24},
            {id: 'pete', name: "Pete Peterson", age: 31},
        ];
        expect(getKeyedObjects(arr)).toEqual({
            john: {id: 'john', name: "John Smith", age: 20},
            ann: {id: 'ann', name: "Ann Smith", age: 24},
            pete: {id: 'pete', name: "Pete Peterson", age: 31}
        });
    });
});