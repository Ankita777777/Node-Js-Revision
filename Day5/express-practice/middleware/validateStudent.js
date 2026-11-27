function validateStudent(req,res,next){
    const {name,department, semester}= req.body;

    if(!name || !department || semester === undefined)
    {
        return res.status(400).json({
            success:false,
            message:"Name, department and semester are required"
        })
    }
if(
    typeof name !== "string" || 
    typeof department !== "string"
)
{
    return res.status(400).json({
        success: false,
        message: "Name and department must be strings"
    })
}

if(!Number.isInteger(semester) || semester<1){
    return res.status(400).json({
        success: false,
        message: "Semester must be a positive integer"
    })
}

if(!name.trim() || !department.trim()){
    return res.status(400).json({
        success: false,
        message: "Name and department cannot be empty"
    })
}

next();
}

function validateStudentPatch(req,res,next){
    const allowedFields= ['name','department','semester']
    const entries = Object.entries(req.body);

    if(entries.length ===0){
        return res.status(400).json({
            success: false,
            message:"Provide at least one field to update"
        })
    }

    for(const [key,value] of entries){
        if(!allowedFields.includes(key)){
            return res.status(400).json({
                success: false,
                message: `Invalid field : ${key}`
            })
        }
        if(key === "name" || key === "department"){
            if(typeof value !== "string" || !value.trim()){
                return res.status(400).json({
                    success: false,
                    message: `${key} must be a non-empty string`
                })
            }
        }

        if(key === "semester"){
            if(!Number.isInteger(value)|| value<1){
                return res.status(400).json({
                    success:false,
                    message:"Semester must be a positive integer"
                })
            }
        }

    }
    next()
}

module.exports ={
    validateStudent, validateStudentPatch
}