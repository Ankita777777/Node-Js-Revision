const http=require('http');
const fs= require('fs/promises');
const path= require("path");

const filePath=path.join(__dirname,"Students.json")

const server= http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","application/json")

    if(req.url === "/students" && req.method==="GET"){
        try{
          const data= await fs.readFile(filePath,"utf8");

          res.writeHead(200);
          res.end(data);
        } catch(error){
 res.writeHead(500);
 res.end(JSON.stringify({
    message:"Unable too read students"
 }))
        }
    }
    else if(req.url.startsWith("/students/")&& req.method === 'GET'){
 try{
    const id= Number(req.url.split("/")[2]);
    const data= await fs.readFile(filePath,"utf8");
    const students= JSON.parse(data);

    const student= students.find(s => s.id === id);

    if(!student){
res.writeHead(404);
return res.end(JSON.stringify({
    message:"Student not found"
}))
    } 
    res.writeHead(200);
    res.end(JSON.stringify(student))
 }
 catch{
res.writeHead(404);
res.end(JSON.stringify({
    message:"Server error"
}))
    }
}
else{
    res.writeHead(404);
    res.end(JSON.stringify({
        message: "Route not found"
    }))
}
})
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
