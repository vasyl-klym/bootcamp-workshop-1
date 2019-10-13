const setMagicValue = (object, arrayProperties, magicValue) => {
    Object.entries(object).forEach( ([key, value]) => {
        if(typeof value === 'object') {
            arrayProperties.push(key);
            setMagicValue(value, arrayProperties, magicValue);
        } else {
            arrayProperties.push(key);
            object[key] = magicValue;
        }
    });
    return object;
}
const makeNestedObject = (arr, magicValue) => {
    const reducer = (acc, item) => ({ [item]: acc });
    return arr.reduceRight(reducer, magicValue );
};

function f5 (object, path, magicValue) {
    const arrayProperties = [];
    const tempObject = setMagicValue(object, arrayProperties, magicValue);
    return (arrayProperties.join('.') === path) ? tempObject : makeNestedObject(path.split('.'), magicValue);
}

module.exports = f5;