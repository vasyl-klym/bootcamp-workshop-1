const _ = require('lodash');
module.exports = (...objects) => {
    let tempObj = objects[objects.length - 1 ];
    for(let i = objects.length - 2; i >= 0; i--) {
        _.merge(tempObj, objects[i]);
    }
    return tempObj;
};