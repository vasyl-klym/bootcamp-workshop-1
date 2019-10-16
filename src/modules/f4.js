const createArrayProperty = (object, arrayProperties) => {
    Object.entries(object).forEach( ([key, value]) => {
        if(typeof value === 'object') {
            arrayProperties.push(key);
            createArrayProperty(value, arrayProperties);
        } else {
            arrayProperties.push(key);
            arrayProperties.push(value);
        }
    });
    return arrayProperties;
};

const f4 = (object, path) => {
    const arrayProperties = [];
    const tempArray = createArrayProperty(object, arrayProperties); 
    const value = tempArray.pop();
    return arrayProperties.join('.') === path ? value : undefined
}

module.exports = f4;