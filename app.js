// npm - global command comes with node
// npm --versiom

// install for a local dependency - use it in this particular project
// npm -i <package name>
// npm install

// install global dependency - available to all projects
// npm i -g <package name>


// package.json - a manifest file that lists info & dependencies for the project
//  it exists in the root folder of the project & can be created manually
// npm init (a wizard to create the project template)
// npm init -y (accept all defaults)

const _ = require('lodash')

const data = [1,[2,[3,[4]]]]

const newData = _.flattenDeep(data)

console.log((data));
console.log((newData));