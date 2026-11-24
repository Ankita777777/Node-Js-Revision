const os= require('os');
const path= require('path');

//Basic JavaScript Execution
console.log("Hello! I am revising Node.js.");

//Process module
console.log("Node Version:", process.version);
console.log("Platform:", process.platform);

//Os Module
console.log("Operating System:", os.type());
console.log("Total Memory:", os.totalmem());

//Path module
const filePath = path.join("projects", "node-revision", "app.js");

console.log("File Path:", filePath);