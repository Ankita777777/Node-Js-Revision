const {writeFile,appendFile,readFile}= require("./fileService");

async function main(){
    try{
        await writeFile();
        await appendFile();
        await readFile();
    }
    catch(error){
console.log("Error:", error.message)
    }
}

main();