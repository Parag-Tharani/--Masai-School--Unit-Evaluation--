const jwt = require("jsonwebtoken");
// const SECRET = process.env.SECRET;
const SECRET = "HopefullyMyTestGoesWell";
const UserData = require("../database/userSchema")



async function register(req,res){
    const {email, password} = req.body

    let existingUser = await UserData.findOne({
        email: email
    })

    if(existingUser){
        return res.status(401).send("User Already Registered")
    }

    let user = {
        email: email,
        password: password
    }

    try {
        let userCred = await UserData.create(user);
        return res.send("Registration Successful")
    } catch (error) {
        res.status(400).send("Email and Password are mandatory Fields")
    }

}



async function login(req,res){
    let {email, password} = req.body;

    let existingUser = await UserData.findOne({
        email: email
    })

    if(existingUser){
        if(existingUser.password == password){

            let encryptionToken = jwt.sign({
                id: existingUser._id,
                email: existingUser.email,
                password: existingUser.password
            },SECRET)

            localStorage.setItem("toekn",JSON.stringify(encryptionToken))
            return res.send(encryptionToken)
        }else{
            res.send("Incorrect Password")
        }
    }else{
        res.status(404).send({
            error: "User Not Found"
        })
    }
}

module.exports = {
    login,
    register
}