const myFunc4 = (object, keyMagic, valueMagic) => {
    Object.entries(object).forEach( ([key, value]) => {
        if(key == keyMagic) {
            let tempValue = object[key];
            delete object[key];
            object[valueMagic] = tempValue;
        } else {
            myFunc4(value, keyMagic, valueMagic)
        }
    });
    return object;
}
function test (object, magicObject) {
    const keyMagic = Object.keys(magicObject)[0];
    const valueMagic = Object.values(magicObject)[0];
    
    const tempObject = myFunc4(object, keyMagic, valueMagic); 
    return tempObject
}

module.exports = test;