// Packae json
// manual creation in root folder, npm init, npm init -y

const lodash = require("lodash");

const array = [1, [2, [3, [4]]]]

console.log(lodash.flattenDeep(array));
