const renameKeys = (object, keyMagic, valueMagic) => {
    for(let key in object) {
        if(typeof object[key] === 'object') {
            if(key == keyMagic) {
                let tempValue = object[key];
                delete object[key];
                object[valueMagic] = tempValue;
            }
            renameKeys(object[key], keyMagic, valueMagic)
        } else {
            if(key == keyMagic) {
                let tempValue = object[key];
                delete object[key];
                object[valueMagic] = tempValue;
            } 
        }
    }
    return object;
}

function f6 (object, magicObject) {
    const keyMagic = Object.keys(magicObject)[0];
    const valueMagic = Object.values(magicObject)[0];

    const tempObject = renameKeys(object, keyMagic, valueMagic); 
    return tempObject;
}

module.exports = f6;