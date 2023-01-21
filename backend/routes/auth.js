const router=require("express").Router()
const passport=require("passport");


router.get("/login/success",(req,res)=>{
    if(req.user)
    res.status(200).json({success:true,
    message:"sucessfull",
    user:req.user,
    })
})
router.get("/login/failed",(req,res)=>{
    res.status(401).json({success:false,
    message:"failure",
    })
})

router.get("/google",passport.authenticate("google",{scope:["profile"]}));

router.get("/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000",
        failureRedirect:"/login/failed"
}))