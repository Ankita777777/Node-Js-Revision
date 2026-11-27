function checkAdmin(req,res,next){
    const apiKey = req.headers['x-api-key'];

    if(apiKey !== "admin123"){
        return res.status(403).json({
            success:false,
            message:"Access denied, Admin only"
        })
    }

    req.user= {
        role:"admin"
    }

    next();
}

module.exports= checkAdmin;