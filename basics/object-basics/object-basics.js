function getObjNames(arr){
    return arr.map((obj) => obj.name);
}

function getObjFullnames(arr){
    return arr.map((obj) => ({
        fullName: `${obj.name} ${obj.surname}`,
        id: obj.id
    }));
}

function sortByAge(arr){
    arr.sort((obj1, obj2) => obj1.age - obj2.age);
}

function getAverageAge(arr){
    return arr.reduce((sum, obj) => sum + obj.age, 0) / arr.length;
}

function getKeyedObjects(arr){
    return arr.reduce((newObj, arrItem) => {
        newObj[arrItem.id] = arrItem;
        return newObj;
    }, {});
}

module.exports = {
    getObjNames,
    getObjFullnames,
    sortByAge,
    getAverageAge,
    getKeyedObjects
};