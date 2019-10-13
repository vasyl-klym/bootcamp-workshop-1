module.exports = (objects) => {
    let firtElement = objects[0];
    objects.forEach( obj => {
        Object.keys(obj).forEach( key => {
            if (!(key in firtElement))
                firtElement[key] = obj[key];
        });
    });
    return firtElement;
};