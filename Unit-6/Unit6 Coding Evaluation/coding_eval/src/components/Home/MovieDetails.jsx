import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";


export const MovieDetails = () => {
    const {id} = useParams()

    return (
        <Box>
            <h1 style={{width:"100%", textAlign:'center'}}>Your id is : {id}</h1>
        </Box>
    )
}