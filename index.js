function myEach (collection, callback) {
    let newCollection;
    if (typeof(collection) === 'object') {
        newCollection = Object.assign(collection);
        collection = Object.values(collection);
    } 
    for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection)
    }
    return newCollection;
    return collection
}

function myMap (collection, callback) {
let newCollection;
    if (typeof(collection) === 'object') {
        collection = Object.values(collection);
    } 
    for (let i = 0; i < collection.length; i++) {
        collection[i] = callback(collection[i]);
    }
    return collection
}

function myReduce (collection, callback, acc) {
    if (typeof(collection) === 'object') {
        collection = Object.values(collection);
    } 

    let accum = acc;
    let j = 0;
    if (acc === undefined){
        accum = collection[0];
        j = 1;
    }

    for (let i = j; i < collection.length; i++) {
        accum = callback(accum, collection[i], collection);
    }
    return accum;
}

function myFind (collection, predicate) {
    if (typeof(collection) === 'object') {
        collection = Object.values(collection);
    }

    for (const element of collection) {
        if (predicate(element)) {
            return element;
        }
    }
}

function myFilter (collection, predicate) {
    if (typeof(collection) === 'object') {
        collection = Object.values(collection);
    }

    let arr = [];

    for (const element of collection) {
        if (predicate(element))
        arr.push(element);
    }
    return arr;
}

function mySize (collection) {
    if (typeof(collection) === 'object') {
        collection = Object.values(collection);
    }

    let counter = 0;

    for (const element of collection) {
        counter++;
    }
    return counter;
}

function myFirst (array, n) {
    if (n === undefined){
        return array[0];
    }
    else {
        const returnEl = [];
        for (let i = 0; i < n; i++) {
            returnEl.push(array[i]);
        }

        return returnEl;
    }
}

function myLast (array, n) {
    if (n === undefined){
        return array[array.length - 1];
    }
    else { 
        const returnEl = [];
        for (let i = array.length - 1; i > array.length - n - 1; i--) {
            returnEl.unshift(array[i]);
        }
        return returnEl;
    }
}

function myKeys (object) {
    const arr = [];
    for (const key in object) {
        arr.push(key);
    }
    return arr;
}

function myValues (object) {
    const arr = [];
    for (const key in object) {
        arr.push(object[key]);
    }
    return arr;
}