import React from "react";
import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {

    return (
        <>
        <Box sx={{position:"sticky", top:0, left:0, right:0, display:'flex', alignItems:'center', justifyContent:"space-between",backgroundColor:"white",opacity:0.8, paddingLeft:"8%", paddingRight:"8%",borderRadius:4, boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}}>
            <Box sx={{fontSize:"20px", fontFamily:"cursive", color:"rgb(230, 85, 85)" }}><h2>BookMyTicket</h2></Box>
            <Box>
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/booking">Bookings</Link>
                <Link className="navLink" to="/login">Login</Link>
            </Box>
        </Box>
        </>
    )
}