const fs=require("fs/promises")
const path=require('path');

const filePath = path.join(__dirname,"sample.txt");

async function writeFile(){
    await fs.writeFile(
        filePath,
        "Learning Node.js asynchronous operations"
    )
    console.log("File written successfully");
}

async function appendFile(){
    await fs.appendFile(
        filePath,
        '\n Learning Promises and Async/Await'
    )
    console.log("Data appended successfully")
}

async function readFile(){
    const data = await fs.readFile(filePath,"utf8");

    console.log("File content",data);
}

module.exports={
    writeFile,
    appendFile,
    readFile
};