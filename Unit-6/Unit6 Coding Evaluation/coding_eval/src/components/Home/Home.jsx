import React from "react";
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box,Button } from "@mui/material";
import { Link } from "react-router-dom";


export const Home = () => {
    const [movieData, setMovieData] = React.useState([])
    const navigate = useNavigate()
    const { logedIn }  = useSelector(state => state)


    // React.useEffect(() => {
    //     if(!logedIn){
    //         navigate("/login")
    //     }
    // },[logedIn])


    React.useEffect(() => {
        fetch(`http://localhost:8080/movies`)
        .then((res) => res.json())
        .then((res) => setMovieData(res))
        // eslint-disable-next-line
    },[])

    return (
        <>
        <h1 style={{width:'100%', textAlign:'center', marginBottom:0, marginTop:50, color:"rgb(140, 130, 130)"}}>Movies List</h1>
        <Box id="container" sx={{display:'grid', gridTemplateColumns:"repeat(3,auto)",alignItems:"center",justifyContent:"space-around" }}>
            {movieData.map((items) => {
                return(
                <Box key={items.id} sx={{display:'flex',flexDirection:"column",alignItems:'center', border:1,borderRadius:"10px", margin:5, borderColor:"rgb(140, 130, 130)"}}>
                    <img alt="Movie Poster" style={{width:"100%", borderRadius:"10px"}} src={ items.poster_path} />
                    <h3 style={{width:"80%", textAlign:"center"}}>{ items.title}</h3>
                    <Link to={`/movie/${items.id}`} style={{color:"grey", textDecoration:"none"}}> <Button sx={{marginBottom:2}} variant="outlined" color="inherit">More Details</Button></Link>
                </Box>
                )
            })}
        </Box>
        </>
    )
}