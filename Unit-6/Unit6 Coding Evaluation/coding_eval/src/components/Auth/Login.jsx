import "./Auth.css"
import React from "react";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { isLogin } from "../../Redux/Auth/action";

export const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [bool, setBool] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {

        const payload = { email, password }
    
      fetch(`https://reqres.in/api/login`,{
          method:"POST",
          body: JSON.stringify(payload),
          headers:{
              'Content-Type':"application/json"
          }
      })
      .then((res) => res.json())
      .then((res) => {
          if(res.token){
            dispatch(isLogin(true))
            setBool(false)
            navigate("/")
          }else{
            setBool(true)
          }
      })
      .catch((err) => console.log(err))
    }

    return (
        <>
        <Box sx={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <h1 style={{marginTop:30,marginBottom:-7, fontSize:"34px"}}>Login</h1>
        <p>Welcome Back</p>
        {bool?<Box sx={{display:"flex", width:"450px", height:"30px", justifyContent:"center",marginTop:1, alignItems:"center", backgroundColor:"rgb(255, 192, 192)"}}> Incorrect Email or password</Box>:null }
            <div style={{width:"450px", marginTop:5}}>
                <label className="loginLabel" >Email</label><br />
                <input className="loginInput"  value={email} onChange={(e) => setEmail(e.target.value)} type={"text"} /><br />

                <label className="loginLabel">Password</label><br />
                <input className="loginInput" value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} />

                <input onClick={() => handleSubmit()} className="loginSubmit" type={"submit"} />
            </div>
        </Box>
        </>
    )
}